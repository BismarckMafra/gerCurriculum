"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { toast, Toaster } from "sonner";
import { listarCurriculos } from "@/services/curriculosService";
import type { Curriculo } from "./types";

export default function PaginaCurriculo() {
    const [curriculos, setCurriculos] = useState<Curriculo[]>([]);
    const [busca, setBusca] = useState("");
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function carregarCurriculos() {
            try {
                const dados = await listarCurriculos();
                setCurriculos(dados);
            } catch (error) {
                console.error(error);
                toast.error("Nao foi possivel carregar os curriculos do Firestore.");
            } finally {
                setCarregando(false);
            }
        }

        carregarCurriculos();
    }, []);

    const curriculosFiltrados = useMemo(() => {
        const termo = busca.trim().toLowerCase();

        if (!termo) {
            return curriculos;
        }

        return curriculos.filter((curriculo) =>
            curriculo.nomeCompleto.toLowerCase().includes(termo) ||
            curriculo.profissao.toLowerCase().includes(termo)
        );
    }, [busca, curriculos]);

    return (
        <section className="mx-auto max-w-5xl px-6 py-12 bg-cyan-50">
            <h1 className="text-3xl mt-40 md:text-4xl font-semibold text-amber-900 text-center mb-6 bg-amber-200 p-4 rounded-lg">
                Lista de Curriculos
            </h1>

            <div className="mb-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
                <input
                    value={busca}
                    onChange={(event) => setBusca(event.target.value)}
                    placeholder="Pesquisar por nome ou cargo"
                    className="w-full md:max-w-md px-4 py-3 border-2 border-amber-200 rounded-lg bg-white text-black"
                />
                <Link
                    href="/sistema/paginas/curriculos/novo"
                    className="text-center bg-amber-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors duration-300"
                >
                    Novo curriculo
                </Link>
            </div>

            {carregando ? (
                <div className="bg-white rounded-2xl shadow-md p-8 text-center text-amber-900">
                    Carregando curriculos...
                </div>
            ) : curriculosFiltrados.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                    <p className="text-amber-900 font-semibold">Nenhum curriculo encontrado.</p>
                    <p className="text-gray-600 mt-2">Cadastre um novo curriculo ou ajuste a pesquisa.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {curriculosFiltrados.map((curriculo) => (
                        <div
                            key={curriculo.id}
                            className="bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden text-3xl text-gray-400">
                                {curriculo.imagem ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={curriculo.imagem} alt={curriculo.nomeCompleto} className="object-cover w-full h-full" />
                                ) : (
                                    "👤"
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-amber-900 mb-2">{curriculo.nomeCompleto}</h3>
                                <p className="text-amber-700 font-medium mb-2">{curriculo.profissao}</p>
                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{curriculo.resumoProfissional}</p>
                                <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                                    <span>{curriculo.email}</span>
                                    <span>{curriculo.telefone}</span>
                                    <span>CPF {curriculo.cpf}</span>
                                </div>
                            </div>
                            <div className="w-full md:w-auto flex flex-col gap-2">
                                <Link className="inline-block text-center bg-amber-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors duration-300" href={`/sistema/paginas/curriculos/${curriculo.id}`}>
                                    Ver detalhes
                                </Link>
                                <Link className="inline-block text-center bg-amber-100 text-amber-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-amber-200 transition-colors duration-300" href={`/sistema/paginas/curriculos/${curriculo.id}/editar`}>
                                    Editar
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <Toaster position="top-center" />
        </section>
    );
}

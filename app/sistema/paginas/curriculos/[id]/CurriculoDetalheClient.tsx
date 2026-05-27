"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { buscarCurriculoPorId, excluirCurriculo } from "@/services/curriculosService";
import type { curriculo } from "../types";

type CurriculoDetalheClientProps = {
    id: string;
};

export default function CurriculoDetalheClient({ id }: CurriculoDetalheClientProps) {
    const router = useRouter();
    const [curriculo, setCurriculo] = useState<curriculo | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [excluindo, setExcluindo] = useState(false);

    useEffect(() => {
        async function carregarCurriculo() {
            try {
                const dados = await buscarCurriculoPorId(id);
                setCurriculo(dados);
            } catch (error) {
                console.error(error);
                toast.error("Nao foi possivel carregar este curriculo.");
            } finally {
                setCarregando(false);
            }
        }

        carregarCurriculo();
    }, [id]);

    async function confirmarExclusao() {
        if (!curriculo) {
            return;
        }

        const confirmou = window.confirm(`Deseja excluir o curriculo de ${curriculo.nomeCompleto}?`);

        if (!confirmou) {
            return;
        }

        try {
            setExcluindo(true);
            await excluirCurriculo(id);
            toast.success("Curriculo excluido com sucesso!");
            router.push("/sistema/paginas/curriculos");
        } catch (error) {
            console.error(error);
            toast.error("Nao foi possivel excluir o curriculo.");
            setExcluindo(false);
        }
    }

    if (carregando) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cyan-50">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-amber-900 font-semibold">Carregando curriculo...</div>
            </div>
        );
    }

    if (!curriculo) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-cyan-50">
                <div className="text-center p-10">
                    <h1 className="text-3xl font-bold text-amber-900 mb-4">Curriculo nao encontrado</h1>
                    <p className="text-gray-600 mb-6">O curriculo que voce esta procurando nao existe.</p>
                    <Link href="/sistema/paginas/curriculos" className="bg-amber-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                        Voltar a lista
                    </Link>
                </div>
                <Toaster position="top-center" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cyan-50 p-6">
            <div className="max-w-4xl mx-auto">
                <div className="mt-30 bg-white rounded-2xl shadow-lg p-8 mb-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                        <div className="w-24 h-24 shrink-0 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden text-5xl text-gray-400">
                            {curriculo.imagem ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={curriculo.imagem} alt={curriculo.nomeCompleto} className="object-cover w-full h-full" />
                            ) : (
                                "👤"
                            )}
                        </div>
                        <div className="flex-1">
                            <h1 className="text-4xl font-bold text-amber-900 mb-2">{curriculo.nomeCompleto}</h1>
                            <p className="text-2xl font-semibold text-amber-700 mb-4">{curriculo.profissao}</p>
                            <div className="space-y-2 text-gray-600">
                                <p><a href={`mailto:${curriculo.email}`} className="text-blue-600 hover:underline">{curriculo.email}</a></p>
                                <p><a href={`tel:${curriculo.telefone}`} className="text-blue-600 hover:underline">{curriculo.telefone}</a></p>
                                <p>CPF {curriculo.cpf}</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-6">
                        <h2 className="text-2xl font-bold text-amber-900 mb-3">Resumo Profissional</h2>
                        <p className="text-gray-700 leading-relaxed">{curriculo.resumoProfissional}</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                    <h2 className="text-2xl font-bold text-amber-900 mb-4">Habilidades</h2>
                    <div className="flex flex-wrap gap-3">
                        {curriculo.habilidades.map((habilidade, index) => (
                            <span key={`${habilidade}-${index}`} className="bg-amber-100 text-amber-900 px-4 py-2 rounded-full font-medium">{habilidade}</span>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                    <h2 className="text-2xl font-bold text-amber-900 mb-6">Experiencia Profissional</h2>
                    <div className="space-y-6">
                        {curriculo.experiencia.map((exp, index) => (
                            <div key={`${exp.empresa}-${index}`} className="border-l-4 border-amber-900 pl-6 pb-6 last:pb-0">
                                <h3 className="text-xl font-bold text-amber-900">{exp.cargo}</h3>
                                <p className="text-amber-700 font-semibold mb-1">{exp.empresa}</p>
                                <p className="text-gray-500 text-sm mb-3">{exp.periodo}</p>
                                <p className="text-gray-700">{exp.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                    <h2 className="text-2xl font-bold text-amber-900 mb-4">Formacao Academica</h2>
                    <ul className="space-y-3">
                        {curriculo.formacao.map((formacao, index) => (
                            <li key={`${formacao}-${index}`} className="text-gray-700">{formacao}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-3 mb-6">
                    <Link href="/sistema/paginas/curriculos" className="text-center bg-amber-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                        Voltar a lista
                    </Link>
                    <div className="flex flex-col md:flex-row gap-3">
                        <Link href={`/sistema/paginas/curriculos/${id}/editar`} className="text-center bg-amber-100 text-amber-900 px-6 py-3 rounded-lg font-medium hover:bg-amber-200 transition-colors">
                            Editar
                        </Link>
                        <button disabled={excluindo} onClick={confirmarExclusao} className="bg-red-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors disabled:opacity-60">
                            {excluindo ? "Excluindo..." : "Excluir"}
                        </button>
                    </div>
                </div>
            </div>
            <Toaster position="top-center" />
        </div>
    );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import CurriculoForm from "../../CurriculoForm";
import type { CurriculoFormData } from "../../types";
import { atualizarCurriculo, buscarCurriculoPorId } from "@/services/curriculosService";

type EditarCurriculoClientProps = {
    id: string;
};

export default function EditarCurriculoClient({ id }: EditarCurriculoClientProps) {
    const [curriculo, setCurriculo] = useState<CurriculoFormData | null>(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function carregarCurriculo() {
            try {
                const dados = await buscarCurriculoPorId(id);
                if (dados) {
                    setCurriculo({
                        nomeCompleto: dados.nomeCompleto,
                        email: dados.email,
                        telefone: dados.telefone,
                        cpf: dados.cpf,
                        profissao: dados.profissao,
                        resumoProfissional: dados.resumoProfissional,
                        formacao: dados.formacao,
                        experiencia: dados.experiencia,
                        habilidades: dados.habilidades,
                        imagem: dados.imagem,
                    });
                }
            } catch (error) {
                console.error(error);
                toast.error("Nao foi possivel carregar este curriculo.");
            } finally {
                setCarregando(false);
            }
        }

        carregarCurriculo();
    }, [id]);

    async function salvarCurriculo(data: CurriculoFormData) {
        await atualizarCurriculo(id, data);
    }

    if (carregando) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cyan-50">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-amber-900 font-semibold">Carregando curriculo...</div>
                <Toaster position="top-center" />
            </div>
        );
    }

    if (!curriculo) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-cyan-50">
                <div className="text-center p-10">
                    <h1 className="text-3xl font-bold text-amber-900 mb-4">Curriculo nao encontrado</h1>
                    <Link href="/sistema/paginas/curriculos" className="bg-amber-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                        Voltar a lista
                    </Link>
                </div>
                <Toaster position="top-center" />
            </div>
        );
    }

    return <CurriculoForm modo="editar" initialData={curriculo} onSave={salvarCurriculo} />;
}

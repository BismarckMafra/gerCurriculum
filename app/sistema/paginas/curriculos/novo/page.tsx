"use client"
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import Link from "next/link";
import { MaskedControl } from "../utilitarios/mascaras/controladorMascaras";
import { cadastroSchema, type cadastroDados } from "../utilitarios/validacao";
import { mascaraCampos } from "../utilitarios/mascaras/cadastroMascaras";

export default function CadastrarCurriculo() {
    const [novaFormacao, setNovaFormacao] = useState("");
    const [novaHabilidade, setNovaHabilidade] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // @ts-ignore - Yup resolver type mismatch
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        getValues,
    } = useForm({
        resolver: yupResolver(cadastroSchema),
        defaultValues: {
            nomeCompleto: "",
            email: "",
            telefone: "",
            profissao: "",
            resumoProfissional: "",
            formacao: [],
            habilidades: [],
            imagem: "",
        },
    });

    const formacao = watch("formacao");
    const habilidades = watch("habilidades");

    const adicionarFormacao = () => {
        if (novaFormacao.trim()) {
            setValue("formacao", [...(formacao || []), novaFormacao]);
            setNovaFormacao("");
        }
    };

    const removerFormacao = (index: number) => {
        setValue("formacao", formacao?.filter((_: any, i: number) => i !== index));
    };

    const adicionarHabilidade = () => {
        if (novaHabilidade.trim()) {
            setValue("habilidades", [...(habilidades || []), novaHabilidade]);
            setNovaHabilidade("");
        }
    };

    const removerHabilidade = (index: number) => {
        setValue("habilidades", habilidades?.filter((_: any, i: number) => i !== index));
    };

    // @ts-ignore - Yup type mismatch
    const onSubmit = (data: any) => {
        console.log("Dados válidos:", data);
        setSubmitted(true);
        toast.success("Currículo cadastrado com sucesso!");
        setTimeout(() => {
            window.location.href = "/sistema/paginas/curriculos";
        }, 2000);
    };

    return (
        <section className="min-h-screen bg-cyan-50 p-6 mt-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="mt-30 text-4xl font-bold text-amber-900 text-center mb-2">
                    Cadastrar Novo Currículo
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Preencha todos os campos para adicionar um novo currículo ao sistema
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Dados Pessoais */}
                    <fieldset className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200">
                        <legend className="px-4 text-xl font-bold text-amber-900">
                            📋 Dados Pessoais
                        </legend>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-amber-900 mb-2">
                                    Nome Completo *
                                </label>
                                <input
                                    {...register("nomeCompleto")}
                                    placeholder="Seu nome completo"
                                    className={`w-full px-4 py-2 border-2 rounded-lg bg-white text-black ${
                                        errors.nomeCompleto ? "border-red-500" : "border-amber-200"
                                    }`}
                                />
                                {errors.nomeCompleto && (
                                    <p className="text-red-600 text-sm mt-1">{errors.nomeCompleto.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-amber-900 mb-2">
                                    Profissão *
                                </label>
                                <input
                                    {...register("profissao")}
                                    placeholder="Sua profissão"
                                    className={`w-full px-4 py-2 border-2 rounded-lg bg-white text-black ${
                                        errors.profissao ? "border-red-500" : "border-amber-200"
                                    }`}
                                />
                                {errors.profissao && (
                                    <p className="text-red-600 text-sm mt-1">{errors.profissao.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-amber-900 mb-2">
                                    Email *
                                </label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="seu.email@exemplo.com"
                                    className={`w-full px-4 py-2 border-2 rounded-lg bg-white text-black ${
                                        errors.email ? "border-red-500" : "border-amber-200"
                                    }`}
                                />
                                {errors.email && (
                                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-amber-900 mb-2">
                                    Telefone *
                                </label>
                                {/* @ts-ignore - Yup type mismatch */}
                                <MaskedControl
                                    nome="telefone"
                                    control={control as any}
                                    mask={mascaraCampos.telefone.mask}
                                    placeholder={mascaraCampos.telefone.placeholder}
                                    className="w-full px-4 py-2 border-2 rounded-lg bg-white text-black"
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Resumo Profissional */}
                    <fieldset className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200">
                        <legend className="px-4 text-xl font-bold text-amber-900">
                            📝 Resumo Profissional
                        </legend>

                        <div className="mt-6">
                            <label className="block text-sm font-medium text-amber-900 mb-2">
                                Resumo Profissional *
                            </label>
                            <textarea
                                {...register("resumoProfissional")}
                                placeholder="Descreva suas experiências, qualificações e objetivos profissionais"
                                rows={4}
                                className={`w-full px-4 py-2 border-2 rounded-lg bg-white text-black ${
                                    errors.resumoProfissional ? "border-red-500" : "border-amber-200"
                                }`}
                            />
                            {errors.resumoProfissional && (
                                <p className="text-red-600 text-sm mt-1">{errors.resumoProfissional.message}</p>
                            )}
                        </div>
                    </fieldset>

                    {/* Formação Acadêmica */}
                    <fieldset className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200">
                        <legend className="px-4 text-xl font-bold text-amber-900">
                            🎓 Formação Acadêmica
                        </legend>

                        <div className="mt-6 space-y-4">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={novaFormacao}
                                    onChange={(e) => setNovaFormacao(e.target.value)}
                                    placeholder="Ex: Bacharelado em Ciência da Computação - USP (2019)"
                                    className="flex-1 px-4 py-2 border-2 border-amber-200 rounded-lg bg-white text-black"
                                />
                                <button
                                    type="button"
                                    onClick={adicionarFormacao}
                                    className="bg-amber-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors"
                                >
                                    Adicionar
                                </button>
                            </div>

                            {formacao && formacao.length > 0 && (
                                <ul className="space-y-2">
                                    {formacao.map((item: any, index: number) => (
                                        <li key={index} className="flex justify-between items-center bg-amber-50 p-3 rounded-lg">
                                            <span className="text-amber-900">{item}</span>
                                            <button
                                                type="button"
                                                onClick={() => removerFormacao(index)}
                                                className="text-red-600 hover:text-red-800 font-medium"
                                            >
                                                Remover
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {errors.formacao && typeof errors.formacao.message === "string" && (
                                <p className="text-red-600 text-sm">{errors.formacao.message}</p>
                            )}
                        </div>
                    </fieldset>

                    {/* Habilidades */}
                    <fieldset className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200">
                        <legend className="px-4 text-xl font-bold text-amber-900">
                            ⚡ Habilidades
                        </legend>

                        <div className="mt-6 space-y-4">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={novaHabilidade}
                                    onChange={(e) => setNovaHabilidade(e.target.value)}
                                    placeholder="Ex: React, TypeScript, Next.js"
                                    className="flex-1 px-4 py-2 border-2 border-amber-200 rounded-lg bg-white text-black"
                                />
                                <button
                                    type="button"
                                    onClick={adicionarHabilidade}
                                    className="bg-amber-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors"
                                >
                                    Adicionar
                                </button>
                            </div>

                            {habilidades && habilidades.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {habilidades.map((habilidade: any, index: number) => (
                                        <div
                                            key={index}
                                            className="bg-amber-100 text-amber-900 px-4 py-2 rounded-full flex items-center gap-2"
                                        >
                                            <span>{habilidade}</span>
                                            <button
                                                type="button"
                                                onClick={() => removerHabilidade(index)}
                                                className="text-amber-900 hover:text-red-600 font-bold"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {errors.habilidades && typeof errors.habilidades.message === "string" && (
                                <p className="text-red-600 text-sm">{errors.habilidades.message}</p>
                            )}
                        </div>
                    </fieldset>

                    {/* URL da Imagem */}
                    <fieldset className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200">
                        <legend className="px-4 text-xl font-bold text-amber-900">
                            🖼️ Imagem
                        </legend>

                        <div className="mt-6">
                            <label className="block text-sm font-medium text-amber-900 mb-2">
                                URL da Imagem (opcional)
                            </label>
                            <input
                                {...register("imagem")}
                                type="url"
                                placeholder="https://exemplo.com/sua-imagem.jpg"
                                className={`w-full px-4 py-2 border-2 rounded-lg bg-white text-black ${
                                    errors.imagem ? "border-red-500" : "border-amber-200"
                                }`}
                            />
                            {errors.imagem && typeof errors.imagem.message === "string" && (
                                <p className="text-red-600 text-sm mt-1">{errors.imagem.message}</p>
                            )}
                        </div>
                    </fieldset>

                    {/* Botões de Ação */}
                    <div className="flex justify-center gap-4 mt-8">
                        <Link
                            href="/sistema/paginas/curriculos"
                            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                        >
                            Cancelar
                        </Link>
                        <button
                            type="submit"
                            className="bg-amber-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
                        >
                            Cadastrar Currículo
                        </button>
                    </div>
                </form>
            </div>

            <Toaster position="top-center" />
        </section>
    );
}

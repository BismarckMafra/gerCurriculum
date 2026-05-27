"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { toast, Toaster } from "sonner";
import type { CurriculoFormData, Experiencia } from "./types";
import { MaskedControl } from "./utilitarios/mascaras/controladorMascaras";
import { mascaraCampos } from "./utilitarios/mascaras/cadastroMascaras";
import { cadastroSchema } from "./utilitarios/validacao";
import { curriculo } from "./curriculosData";

const emptyExperiencia: Experiencia = {
    cargo: "",
    empresa: "",
    periodo: "",
    descricao: "",
};

const defaultValues: CurriculoFormData = {
    nomeCompleto: "",
    email: "",
    telefone: "",
    cpf: "",
    profissao: "",
    resumoProfissional: "",
    formacao: [],
    experiencia: [],
    habilidades: [],
    imagem: "",
};

type CurriculoFormProps = {
    modo: "criar" | "editar";
    initialData?: CurriculoFormData;
    onSave: (data: CurriculoFormData) => Promise<void>;
};

export default function CurriculoForm({ modo, initialData, onSave }: CurriculoFormProps) {
    const router = useRouter();
    const [novaFormacao, setNovaFormacao] = useState("");
    const [novaHabilidade, setNovaHabilidade] = useState("");
    const [novaExperiencia, setNovaExperiencia] = useState<Experiencia>(emptyExperiencia);
    const [salvando, setSalvando] = useState(false);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm<CurriculoFormData>({
        resolver: yupResolver(cadastroSchema) as unknown as Resolver<CurriculoFormData>,
        defaultValues: initialData ?? defaultValues,
    });

    const formacao = watch("formacao") ?? [];
    const habilidades = watch("habilidades") ?? [];
    const experiencia = watch("experiencia") ?? [];

    const adicionarFormacao = () => {
        if (novaFormacao.trim()) {
            setValue("formacao", [...formacao, novaFormacao.trim()], { shouldValidate: true });
            setNovaFormacao("");
        }
    };

    const adicionarHabilidade = () => {
        if (novaHabilidade.trim()) {
            setValue("habilidades", [...habilidades, novaHabilidade.trim()], { shouldValidate: true });
            setNovaHabilidade("");
        }
    };

    const adicionarExperiencia = () => {
        const valores = {
            cargo: novaExperiencia.cargo.trim(),
            empresa: novaExperiencia.empresa.trim(),
            periodo: novaExperiencia.periodo.trim(),
            descricao: novaExperiencia.descricao.trim(),
        };

        if (valores.cargo && valores.empresa && valores.periodo && valores.descricao) {
            setValue("experiencia", [...experiencia, valores], { shouldValidate: true });
            setNovaExperiencia(emptyExperiencia);
            return;
        }

        toast.error("Preencha todos os campos da experiencia antes de adicionar.");
    };

    const onSubmit = async (data: CurriculoFormData) => {
        try {
            setSalvando(true);
            await onSave(data);
            toast.success(modo === "criar" ? "Curriculo cadastrado com sucesso!" : "Curriculo atualizado com sucesso!");
            router.push("/sistema/paginas/curriculos");
        } catch (error) {
            console.error(error);
            toast.error("Nao foi possivel salvar o curriculo. Confira o Firebase e tente novamente.");
        } finally {
            setSalvando(false);
        }
    };

    return (
        <section className="min-h-screen bg-cyan-50 p-6 mt-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="mt-30 text-4xl font-bold text-amber-900 text-center mb-2">
                    {modo === "criar" ? "Cadastrar Novo Curriculo" : "Editar Curriculo"}
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    {modo === "criar"
                        ? "Preencha todos os campos para adicionar um novo curriculo ao sistema"
                        : "Atualize os dados do curriculo selecionado"}
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <fieldset className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200">
                        <legend className="px-4 text-xl font-bold text-amber-900">Dados Pessoais</legend>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-amber-900 mb-2">Nome Completo *</label>
                                <input {...register("nomeCompleto")} className={`w-full px-4 py-2 border-2 rounded-lg bg-white text-black ${errors.nomeCompleto ? "border-red-500" : "border-amber-200"}`} />
                                {errors.nomeCompleto && <p className="text-red-600 text-sm mt-1">{errors.nomeCompleto.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-amber-900 mb-2">Cargo desejado *</label>
                                <input {...register("profissao")} className={`w-full px-4 py-2 border-2 rounded-lg bg-white text-black ${errors.profissao ? "border-red-500" : "border-amber-200"}`} />
                                {errors.profissao && <p className="text-red-600 text-sm mt-1">{errors.profissao.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-amber-900 mb-2">Email *</label>
                                <input {...register("email")} type="email" className={`w-full px-4 py-2 border-2 rounded-lg bg-white text-black ${errors.email ? "border-red-500" : "border-amber-200"}`} />
                                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-amber-900 mb-2">Telefone *</label>
                                <MaskedControl nome="telefone" control={control} mask={mascaraCampos.telefone.mask} placeholder={mascaraCampos.telefone.placeholder} className="w-full px-4 py-2 border-2 rounded-lg bg-white text-black" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-amber-900 mb-2">CPF *</label>
                                <MaskedControl nome="cpf" control={control} mask={mascaraCampos.cpf.mask} placeholder={mascaraCampos.cpf.placeholder} className="w-full px-4 py-2 border-2 rounded-lg bg-white text-black" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-amber-900 mb-2">URL da Imagem</label>
                                <input {...register("imagem")} type="url" placeholder="https://exemplo.com/imagem.jpg" className={`w-full px-4 py-2 border-2 rounded-lg bg-white text-black ${errors.imagem ? "border-red-500" : "border-amber-200"}`} />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200">
                        <legend className="px-4 text-xl font-bold text-amber-900">Resumo Profissional</legend>
                        <textarea {...register("resumoProfissional")} rows={4} className={`mt-6 w-full px-4 py-2 border-2 rounded-lg bg-white text-black ${errors.resumoProfissional ? "border-red-500" : "border-amber-200"}`} />
                        {errors.resumoProfissional && <p className="text-red-600 text-sm mt-1">{errors.resumoProfissional.message}</p>}
                    </fieldset>

                    <fieldset className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200">
                        <legend className="px-4 text-xl font-bold text-amber-900">Experiencias Profissionais</legend>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input value={novaExperiencia.cargo} onChange={(e) => setNovaExperiencia({ ...novaExperiencia, cargo: e.target.value })} placeholder="Cargo" className="px-4 py-2 border-2 border-amber-200 rounded-lg bg-white text-black" />
                            <input value={novaExperiencia.empresa} onChange={(e) => setNovaExperiencia({ ...novaExperiencia, empresa: e.target.value })} placeholder="Empresa" className="px-4 py-2 border-2 border-amber-200 rounded-lg bg-white text-black" />
                            <input value={novaExperiencia.periodo} onChange={(e) => setNovaExperiencia({ ...novaExperiencia, periodo: e.target.value })} placeholder="Periodo" className="px-4 py-2 border-2 border-amber-200 rounded-lg bg-white text-black" />
                            <button type="button" onClick={adicionarExperiencia} className="bg-amber-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors">Adicionar experiencia</button>
                            <textarea value={novaExperiencia.descricao} onChange={(e) => setNovaExperiencia({ ...novaExperiencia, descricao: e.target.value })} placeholder="Descricao" rows={3} className="md:col-span-2 px-4 py-2 border-2 border-amber-200 rounded-lg bg-white text-black" />
                        </div>
                        {experiencia.length > 0 && (
                            <div className="mt-5 space-y-3">
                                {experiencia.map((exp, index) => (
                                    <div key={`${exp.empresa}-${index}`} className="border-l-4 border-amber-900 bg-amber-50 p-4 rounded-r-lg">
                                        <div className="flex justify-between gap-3">
                                            <div>
                                                <h3 className="font-bold text-amber-900">{exp.cargo}</h3>
                                                <p className="text-amber-700">{exp.empresa} - {exp.periodo}</p>
                                                <p className="text-gray-700 mt-2">{exp.descricao}</p>
                                            </div>
                                            <button type="button" onClick={() => setValue("experiencia", experiencia.filter((_, i) => i !== index), { shouldValidate: true })} className="text-red-600 font-medium">Remover</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {errors.experiencia && <p className="text-red-600 text-sm mt-2">{errors.experiencia.message}</p>}
                    </fieldset>

                    <fieldset className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200">
                        <legend className="px-4 text-xl font-bold text-amber-900">Formacao Academica</legend>
                        <div className="mt-6 flex gap-2">
                            <input value={novaFormacao} onChange={(e) => setNovaFormacao(e.target.value)} placeholder="Ex: Bacharelado em Sistemas - USP (2024)" className="flex-1 px-4 py-2 border-2 border-amber-200 rounded-lg bg-white text-black" />
                            <button type="button" onClick={adicionarFormacao} className="bg-amber-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors">Adicionar</button>
                        </div>
                        <ul className="mt-4 space-y-2">
                            {formacao.map((item, index) => (
                                <li key={`${item}-${index}`} className="flex justify-between items-center bg-amber-50 p-3 rounded-lg">
                                    <span className="text-amber-900">{item}</span>
                                    <button type="button" onClick={() => setValue("formacao", formacao.filter((_, i) => i !== index), { shouldValidate: true })} className="text-red-600 font-medium">Remover</button>
                                </li>
                            ))}
                        </ul>
                        {errors.formacao && <p className="text-red-600 text-sm mt-2">{errors.formacao.message}</p>}
                    </fieldset>

                    <fieldset className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200">
                        <legend className="px-4 text-xl font-bold text-amber-900">Habilidades</legend>
                        <div className="mt-6 flex gap-2">
                            <input value={novaHabilidade} onChange={(e) => setNovaHabilidade(e.target.value)} placeholder="Ex: React, TypeScript, Lideranca" className="flex-1 px-4 py-2 border-2 border-amber-200 rounded-lg bg-white text-black" />
                            <button type="button" onClick={adicionarHabilidade} className="bg-amber-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors">Adicionar</button>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {habilidades.map((habilidade, index) => (
                                <span key={`${habilidade}-${index}`} className="bg-amber-100 text-amber-900 px-4 py-2 rounded-full flex items-center gap-2">
                                    {habilidade}
                                    <button type="button" onClick={() => setValue("habilidades", habilidades.filter((_, i) => i !== index), { shouldValidate: true })} className="font-bold">x</button>
                                </span>
                            ))}
                        </div>
                        {errors.habilidades && <p className="text-red-600 text-sm mt-2">{errors.habilidades.message}</p>}
                    </fieldset>

                    <div className="flex justify-center gap-4 mt-8">
                        <Link href="/sistema/paginas/curriculos" className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors">Cancelar</Link>
                        <button disabled={salvando} type="submit" className="bg-amber-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors disabled:opacity-60">
                            {salvando ? "Salvando..." : modo === "criar" ? "Cadastrar Curriculo" : "Salvar Alteracoes"}
                        </button>
                    </div>
                </form>
            </div>
            <Toaster position="top-center" />
        </section>
    );
}

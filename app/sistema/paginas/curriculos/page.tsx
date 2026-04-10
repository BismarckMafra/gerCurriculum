"use client"

import { useState } from "react";
import CurriculosPage from "./novo/page";

export default function CadastrarCurriculo() {
    const [formData, setFormData] = useState({
        nomeCompleto: "",
        idade: "",
        profissao: "",
        email: "",
        imagem: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="mx-auto max-w-5xl px-6 py-12">
            <section className="mb-12 rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-sm">
                <h1 className="text-3xl font-bold text-amber-900 mb-4">Cadastrar Currículo</h1>
                <p className="text-gray-700 mb-6">
                    Preencha os dados abaixo para adicionar um novo currículo à lista.
                </p>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                    <label className="flex flex-col gap-2 text-sm font-medium text-amber-900">
                        Nome Completo
                        <input
                            name="nomeCompleto"
                            value={formData.nomeCompleto}
                            onChange={handleChange}
                            className="rounded-xl border border-amber-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-amber-500"
                            placeholder="Nome do candidato"
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-2 text-sm font-medium text-amber-900">
                        Idade
                        <input
                            name="idade"
                            value={formData.idade}
                            onChange={handleChange}
                            className="rounded-xl border border-amber-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-amber-500"
                            placeholder="Ex: 28 anos, desenvolvedor frontend"
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-2 text-sm font-medium text-amber-900">
                        Resumo e valor pretendido
                        <input
                            name="profissao"
                            value={formData.profissao}
                            onChange={handleChange}
                            className="rounded-xl border border-amber-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-amber-500"
                            placeholder="Ex: 12.50"
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-2 text-sm font-medium text-amber-900">
                        Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="rounded-xl border border-amber-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-amber-500"
                            placeholder="Ex: john.doe@example.com"
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-2 text-sm font-medium text-amber-900">
                        URL da imagem
                        <input
                            name="imagem"
                            value={formData.imagem}
                            onChange={handleChange}
                            className="rounded-xl border border-amber-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-amber-500"
                            placeholder="/foto.jpg"
                        />
                    </label>
                    <button
                        type="submit"
                        className="self-start rounded-full bg-amber-900 px-6 py-3 text-white transition hover:bg-amber-700"
                    >
                        Enviar currículo
                    </button>
                </form>
                {submitted && (
                    <div className="mt-6 rounded-2xl bg-amber-100 p-4 text-amber-900">
                        Currículo enviado com sucesso! Dados recebidos:
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-amber-900">
                            <li>Nome: {formData.nomeCompleto}</li>
                            <li>Resumo / Idade: {formData.idade}</li>
                            <li>Valor / Profissão: {formData.profissao}</li>
                            <li>Imagem: {formData.imagem || "Não informado"}</li>
                        </ul>
                    </div>
                )}
            </section>

            <CurriculosPage />
        </div>
    );
}


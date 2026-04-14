"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import { toast, Toaster } from "sonner";

type UsuarioDados = {
    nomeCompleto: string;
    idade: string;
    resumo: string;
    valorPretendido: string;
    profissao: string;
    email: string;
    imagem: string;
};

const initialFormData: UsuarioDados = {
    nomeCompleto: "",
    idade: "",
    resumo: "",
    valorPretendido: "",
    profissao: "",
    email: "",
    imagem: "",
};

export default function CadastrarCurriculo() {
    const [formData, setFormData] = useState<UsuarioDados>(initialFormData);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        toast.success("Currículo enviado com sucesso!");
    };

    return (
        <section className="p-8">
            <h1 className="text-4xl font-bold text-amber-500 text-center">
                TELA DE CADASTRO
            </h1>
            <div className="max-w-full min-h-screen bg-amber-120 border-4 border-white-800 rounded mt-4">
                <h3 className="text-xl ml-8 mt-4 font-bold text-shadow-amber-950">
                    Preencha os dados abaixo e cadastre-se:
                </h3>

                <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <fieldset className="border-2 border-amber-800 p-4 rounded-lg">
                            <legend className="px-2 font-semibold">Dados do Usuário</legend>

                            <label className="block mb-4">
                                <span className="text-sm font-medium">Nome Completo</span>
                                <input
                                    name="nomeCompleto"
                                    placeholder="Seu nome completo"
                                    value={formData.nomeCompleto}
                                    onChange={handleChange}
                                    className="text-black mt-2 w-full rounded-lg border border-amber bg-white px-3 py-2"
                                />
                            </label>

                            <label className="block mb-4">
                                <span className="text-sm font-medium">Idade</span>
                                <input
                                    name="idade"
                                    placeholder="Sua idade"
                                    value={formData.idade}
                                    onChange={handleChange}
                                    className="text-black mt-2 w-full rounded-lg border border-amber bg-white px-3 py-2"
                                />
                            </label>

                            <label className="block mb-4">
                                <span className="text-sm font-medium ">Resumo</span>
                                <textarea
                                    name="resumo"
                                    placeholder="Descreva suas habilidades e experiências"
                                    value={formData.resumo}
                                    onChange={handleChange}
                                    className="text-black mt-2 w-full min-h-22.5 rounded-lg border border-white bg-white px-3 py-2"
                                />
                            </label>

                            <label className="block mb-4">
                                <span className="text-sm font-medium">Valor Pretendido</span>
                                <input
                                    name="valorPretendido"
                                    placeholder="Sua pretenção salarial"
                                    value={formData.valorPretendido}
                                    onChange={handleChange}
                                    className="text-black mt-2 w-full rounded-lg border border-amber bg-white px-3 py-2"
                                />
                            </label>

                            <label className="block mb-4">
                                <span className="text-sm font-medium">Profissão</span>
                                <input
                                    name="profissao"
                                    placeholder="Sua profissão"
                                    value={formData.profissao}
                                    onChange={handleChange}
                                    className="text-black mt-2 w-full rounded-lg border border-amber bg-white px-3 py-2"
                                />
                            </label>

                            <label className="block mb-4">
                                <span className="text-sm font-medium">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Seu email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="text-black mt-2 w-full rounded-lg border border-amber bg-white px-3 py-2"
                                />
                            </label>

                            <label className="block mb-4">
                                <span className="text-sm font-medium">Imagem</span>
                                <input
                                    name="imagem"
                                    placeholder="URL da sua imagem"
                                    value={formData.imagem}
                                    onChange={handleChange}
                                    className="text-black mt-2 w-full rounded-lg bg-white border border-amberbg-white px-3 py-2"
                                   
                                />
                            </label>
                        </fieldset>
                    </div>

                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="rounded-2xl bg-gray-800 px-8 py-3 text-amber-100 transition hover:bg-gray-700"
                        >
                            CADASTRE-SE AGORA
                        </button>
                    </div>
                </form>

                {submitted && (
                    <div className="mt-6 rounded-2xl bg-amber-100 p-4 text-amber-900">
                        <p className="font-semibold mb-2">Dados enviados:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Nome: {formData.nomeCompleto}</li>
                            <li>Idade: {formData.idade}</li>
                            <li>Resumo: {formData.resumo}</li>
                            <li>Valor Pretendido: {formData.valorPretendido}</li>
                            <li>Profissão: {formData.profissao}</li>
                            <li>Email: {formData.email}</li>
                            <li>Imagem: {formData.imagem || "Não informado"}</li>
                        </ul>
                    </div>
                )}

                <Toaster position="top-right" />
            </div>
        </section>
    );
}

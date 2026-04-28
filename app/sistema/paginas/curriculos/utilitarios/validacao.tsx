import * as yup from "yup";

export const cadastroSchema = yup.object().shape({
    nomeCompleto: yup.string().required("O nome é obrigatório").min(3, "O nome deve ter pelo menos 3 caracteres").trim(),
    email: yup.string().required("O email é obrigatório").email("O formato do email é inválido").lowercase().trim(),
    telefone: yup.string().required("O telefone é obrigatório").matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "O telefone deve estar no formato (XX) XXXXX-XXXX"),
    profissao: yup.string().required("A profissão é obrigatória").min(3, "A profissão deve ter pelo menos 3 caracteres").trim(),
    resumoProfissional: yup.string().required("O resumo profissional é obrigatório").min(20, "O resumo profissional deve ter pelo menos 20 caracteres").max(600, "O resumo profissional não deve exceder 600 caracteres").trim(),
    formacao: yup.array(yup.string()).min(1, "É necessário adicionar pelo menos uma formação").required() as any,
    habilidades: yup.array(yup.string()).min(1, "É necessário adicionar pelo menos uma habilidade").required() as any,
    imagem: yup.string().default("").notRequired() as any,
});

export type cadastroDados = {
    nomeCompleto: string;
    email: string;
    telefone: string;
    profissao: string;
    resumoProfissional: string;
    formacao: string[];
    habilidades: string[];
    imagem: string;
};
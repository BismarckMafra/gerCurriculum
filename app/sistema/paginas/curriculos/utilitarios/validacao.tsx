import * as yup from "yup";
import type { CurriculoFormData } from "../types";

const experienciaSchema = yup.object({
    cargo: yup.string().required("O cargo e obrigatorio").trim().defined(),
    empresa: yup.string().required("A empresa e obrigatoria").trim().defined(),
    periodo: yup.string().required("O periodo e obrigatorio").trim().defined(),
    descricao: yup.string().required("A descricao e obrigatoria").trim().defined(),
});

export const cadastroSchema: yup.ObjectSchema<CurriculoFormData> = yup.object({
    nomeCompleto: yup.string().required("O nome e obrigatorio").min(3, "O nome deve ter pelo menos 3 caracteres").trim().defined(),
    email: yup.string().required("O email e obrigatorio").email("O formato do email e invalido").lowercase().trim().defined(),
    telefone: yup.string().required("O telefone e obrigatorio").matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "O telefone deve estar no formato (XX) XXXXX-XXXX").defined(),
    cpf: yup.string().required("O CPF e obrigatorio").matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "O CPF deve estar no formato XXX.XXX.XXX-XX").defined(),
    profissao: yup.string().required("O cargo desejado e obrigatorio").min(3, "O cargo deve ter pelo menos 3 caracteres").trim().defined(),
    resumoProfissional: yup.string().required("O resumo profissional e obrigatorio").min(20, "O resumo profissional deve ter pelo menos 20 caracteres").max(600, "O resumo profissional nao deve exceder 600 caracteres").trim().defined(),
    formacao: yup.array().of(yup.string().required()).min(1, "E necessario adicionar pelo menos uma formacao").defined(),
    experiencia: yup.array().of(experienciaSchema).min(1, "E necessario adicionar pelo menos uma experiencia profissional").defined(),
    habilidades: yup.array().of(yup.string().required()).min(1, "E necessario adicionar pelo menos uma habilidade").defined(),
    imagem: yup.string().default("").defined(),
});

export type cadastroDados = CurriculoFormData;

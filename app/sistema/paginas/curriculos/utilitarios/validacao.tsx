import * as yup from "yup";

export const cadastroSchema = yup.object({
    // Dados Pessoais
    nomeCompleto: yup.string()
        .required("O nome é obrigatório")
        .min(3, "O nome deve ter pelo menos 3 caracteres")
        .trim(),
    idade: yup.string()
        .required("A idade é obrigatória")
        .matches(/^\d+$/, "A idade deve ser um número válido"),
    telefone_celular: yup.string()
        .required("O telefone/celular é obrigatório")
        .matches(/^\d{10,11}$/, "O telefone/celular deve conter apenas números e ter 10 ou 11 dígitos"),
    email: yup.string()
        .required("O email é obrigatório")
        .email("O formato do email é inválido")
        .lowercase()
        .trim(),
    endereco: yup.string()
        .required("O endereço é obrigatório")
        .min(5, "O endereço deve ter pelo menos 5 caracteres")
        .trim(),
    resumo: yup.string()
        .max(600, "O resumo não deve exceder 600 caracteres")
        .trim(),
    valorPretendido: yup.number()
        .required("O valor pretendido é obrigatório")
        .positive("O valor pretendido deve ser um número positivo")
        .typeError("O valor pretendido deve ser um número válido"),
    profissao: yup.string()
        .required("A profissão é obrigatória")
        .min(3, "A profissão deve ter pelo menos 3 caracteres")
        .trim(),
    imagem: yup.string()
        .required("A imagem é obrigatória")
        .url("A imagem deve ser uma URL válida"),


});

// Inferência automática do tipo para uso no useForm
export type cadastroDados = yup.InferType<typeof cadastroSchema>;
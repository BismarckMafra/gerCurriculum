import * as yup from "yup";

export const cadastroSchema = yup.object({
    // Dados Pessoais
    nomeCompleto: yup.string()
        .required("O nome é obrigatório")
        .min(3, "O nome deve ter pelo menos 3 caracteres")
        .trim(),
    
    email: yup.string()
        .required("O email é obrigatório")
        .email("O formato do email é inválido")
        .lowercase()
        .trim(),

    idade: yup.string()
        .required("A idade é obrigatória")
        .min(18, "A idade deve ser maior que 18 anos")
        .matches(/^\d+$/, "A idade deve ser um número válido"),
    
});

// Inferência automática do tipo para uso no useForm
export type cadastroDados = yup.InferType<typeof cadastroSchema>;
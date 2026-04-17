export const mascaraCampos = {
    telefone_celular: {
        mask: "(##) #####-####", // Mudou de 9 para #
        placeholder: "(00) 00000-0000"
    },
    cep: {
        mask: "#####-###", // Mudou de 9 para #
        placeholder: "00000-000"
    }
} as const;
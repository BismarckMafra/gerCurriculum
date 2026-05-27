export const mascaraCampos = {
    telefone: {
        mask: "(##) #####-####",
        placeholder: "(11) 98765-4321"
    },
    cpf: {
        mask: "###.###.###-##",
        placeholder: "123.456.789-00"
    },
    email: {
        mask: "",
        placeholder: "seu.email@exemplo.com"
    }
} as const;

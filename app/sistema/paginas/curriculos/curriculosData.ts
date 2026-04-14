export type Curriculo = {
  id: number;
  nomeCompleto: string;
  idade: string;
  resumo: number;
  valorPretendido: number;
  email: string;
  imagem: string;
};

export const CURRICULOS: Curriculo[] = [
  {
    id: 1,
    nomeCompleto: "Café Pingado",
    idade: "Café com um pouco de leite, perfeito para começar o dia.",
    resumo: 10.95,
    valorPretendido: 10.95,
    email: "john.doe@example.com",
    imagem: "/cappuccino.jpg",
  },
  {
    id: 2,
    nomeCompleto: "Monster",
    idade: "Energético para te dar aquele boost de energia quando mais precisar.",
    resumo: 10.95,
    valorPretendido: 10.95,
    email: "jane.smith@example.com",
    imagem: "/monster.jpg",
  },
  {
    id: 3,
    nomeCompleto: "Pizza",
    idade: "Pizza de calabresa, com borda recheada de catupiry, perfeita para compartilhar com os amigos.",
    resumo: 25.5,
    valorPretendido: 25.5,
    email: "bob.johnson@example.com",
    imagem: "/pizza.jpg",
  },
  {
    id: 4,
    nomeCompleto: "Escondidinho",
    idade: "Escondidinho de frango, com purê de batata cremoso, tão bom que ninguém acha.",
    resumo: 18.25,
    valorPretendido: 18.25,
    email: "alice.wonderland@example.com",
    imagem: "/escondidinho.jpg",
  },
  {
    id: 5,
    nomeCompleto: "Sorvete",
    idade: "Sorvete de chocolate, cremoso e irresistível, perfeito para se refrescar nos dias quentes.",
    resumo: 12.38,
    valorPretendido: 12.38,
    email: "eve.adams@example.com",
    imagem: "/sorvete.jpg",
  },
];

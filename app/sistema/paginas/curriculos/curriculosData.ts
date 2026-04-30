export type Curriculo = {
  id: number;
  nomeCompleto: string;
  idade: string;
  resumo: string;
  valorPretendido: number;
  email: string;
  imagem: string;
};

export const CURRICULOS: Curriculo[] = [
  {
    id: 1,
    nomeCompleto: "Ana Silva",
    idade: "29 anos",
    resumo: "Analista de marketing digital com 6 anos de experiência em campanhas de performance e automação.",
    valorPretendido: 7200,
    email: "ana.silva@example.com",
    imagem: "/Logo.jpg",
  },
  {
    id: 2,
    nomeCompleto: "Bruno Costa",
    idade: "35 anos",
    resumo: "Desenvolvedor front-end especializado em React e TypeScript, com foco em interfaces acessíveis e escaláveis.",
    valorPretendido: 8500,
    email: "bruno.costa@example.com",
    imagem: "/Logo.jpg",
  },
  {
    id: 3,
    nomeCompleto: "Carla Ferreira",
    idade: "27 anos",
    resumo: "Designer gráfico com experiência em branding, UX e projetos de identidade visual para startups.",
    valorPretendido: 6000,
    email: "carla.ferreira@example.com",
    imagem: "/Logo.jpg",
  },
  {
    id: 4,
    nomeCompleto: "Diego Almeida",
    idade: "42 anos",
    resumo: "Gerente de projetos com certificação PMP e histórico de entregas em times multidisciplinares.",
    valorPretendido: 11000,
    email: "diego.almeida@example.com",
    imagem: "/Logo.jpg",
  },
  {
    id: 5,
    nomeCompleto: "Elisa Nogueira",
    idade: "31 anos",
    resumo: "Especialista em recursos humanos com foco em recrutamento, desenvolvimento e retenção de talentos.",
    valorPretendido: 6800,
    email: "elisa.nogueira@example.com",
    imagem: "/Logo.jpg",
  },
];

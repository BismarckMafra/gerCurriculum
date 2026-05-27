export type Curriculo = {
  id: number;
  nomeCompleto: string;

  idade: string;
  resumo: string;
  valorPretendido: number;
  email: string;
  telefone: string;
  profissao: string;
  resumoProfissional: string;
  formacao: string[];
  experiencia: {
    cargo: string;
    empresa: string;
    periodo: string;
    descricao: string;
  }[];
  habilidades: string[];
  imagem?: string;
};

export const curriculo: Curriculo[] = [
  {
    id: 1,
    nomeCompleto: "João Silva",
    idade: "30 anos",
    resumo: "Profissional de TI com 8 anos de experiência em desenvolvimento de software.",
    valorPretendido: 5000,
    email: "joao.silva@example.com",
    telefone: "(11) 99999-9999",
    profissao: "Desenvolvedor de Software",
    resumoProfissional: "Especialista em desenvolvimento web e mobile, com foco em soluções escaláveis.",
    formacao: ["Bacharel em Ciência da Computação - Universidade XYZ"],
    experiencia: [
      {
        cargo: "Desenvolvedor Sênior",
        empresa: "Tech Solutions",
        periodo: "2018 - Presente",
        descricao: "Liderança de projetos de desenvolvimento de software, mentorando equipes e garantindo a entrega de soluções de alta qualidade."
      },
      {
        cargo: "Desenvolvedor Júnior",
        empresa: "InovaTech",
        periodo: "2015 - 2018",
        descricao: "Desenvolvimento de aplicações web e mobile, colaborando com equipes multidisciplinares para criar soluções inovadoras."
      }
    ],
    habilidades: ["JavaScript", "TypeScript", "React", "Node.js", "SQL"],
    imagem: "https://randomuser.me/api/ports/128/128"
  }
]

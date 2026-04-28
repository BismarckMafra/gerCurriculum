export type Curriculo = {
  id: number;
  nomeCompleto: string;
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

export const CURRICULOS: Curriculo[] = [
  {
    id: 1,
    nomeCompleto: "João Silva",
    email: "joao.silva@example.com",
    telefone: "(11) 98765-4321",
    profissao: "Desenvolvedor Full Stack",
    resumoProfissional: "Profissional com 5 anos de experiência em desenvolvimento web, especializado em React, Next.js e Node.js. Apaixonado por criar soluções inovadoras e scaláveis.",
    formacao: [
      "Bacharelado em Ciência da Computação - USP (2019)",
      "Certificação em React - Udemy (2021)",
      "Certificação em Next.js - Alura (2022)"
    ],
    experiencia: [
      {
        cargo: "Desenvolvedor Full Stack",
        empresa: "Tech Solutions Inc",
        periodo: "2021 - Presente",
        descricao: "Desenvolvimento de aplicações web com React e Node.js, implementação de APIs RESTful e WebSockets."
      },
      {
        cargo: "Desenvolvedor Frontend",
        empresa: "Digital Agency",
        periodo: "2019 - 2021",
        descricao: "Desenvolvimento de interfaces web responsivas com React, CSS e JavaScript."
      }
    ],
    habilidades: ["React", "Next.js", "Node.js", "TypeScript", "SQL", "MongoDB", "Git"],
    imagem: "/default-avatar.jpg"
  },
  {
    id: 2,
    nomeCompleto: "Maria Santos",
    email: "maria.santos@example.com",
    telefone: "(11) 99876-5432",
    profissao: "Designer UX/UI",
    resumoProfissional: "Designer criativa com 4 anos de experiência em design de interfaces, prototipagem e pesquisa de usuário. Focada em criar experiências intuitivas e acessíveis.",
    formacao: [
      "Bacharelado em Design - FAAP (2018)",
      "Certificação em UX/UI Design - Interaction Design Foundation (2020)",
      "Certificação em Figma - Udemy (2021)"
    ],
    experiencia: [
      {
        cargo: "Designer UX/UI Senior",
        empresa: "Creative Studio",
        periodo: "2020 - Presente",
        descricao: "Liderança de projetos de design, prototipagem em Figma, pesquisa de UX e testes de usabilidade."
      },
      {
        cargo: "Designer UX/UI",
        empresa: "StartUp Inovação",
        periodo: "2018 - 2020",
        descricao: "Design de interfaces para aplicações mobile e web, criação de design systems."
      }
    ],
    habilidades: ["Figma", "Adobe XD", "Prototyping", "User Research", "CSS", "HTML", "Accessibility"],
    imagem: "/default-avatar.jpg"
  },
  {
    id: 3,
    nomeCompleto: "Pedro Oliveira",
    email: "pedro.oliveira@example.com",
    telefone: "(11) 97654-3210",
    profissao: "DevOps Engineer",
    resumoProfissional: "Engenheiro DevOps experiente com 6 anos de atuação em infraestrutura cloud, containerização e CI/CD. Especialista em AWS e Kubernetes.",
    formacao: [
      "Bacharelado em Engenharia de Software - PUC (2018)",
      "Certificação AWS Solutions Architect (2021)",
      "Certificação Kubernetes - Linux Foundation (2022)"
    ],
    experiencia: [
      {
        cargo: "DevOps Engineer Senior",
        empresa: "Cloud Infrastructure Ltd",
        periodo: "2022 - Presente",
        descricao: "Arquitetura e gerenciamento de infraestrutura em cloud, implementação de pipelines CI/CD, automação e monitoramento."
      },
      {
        cargo: "DevOps Engineer",
        empresa: "Tech Corp",
        periodo: "2018 - 2022",
        descricao: "Administração de servidores, containerização com Docker, orquestração com Kubernetes."
      }
    ],
    habilidades: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux", "Monitoring"],
    imagem: "/default-avatar.jpg"
  },
  {
    id: 4,
    nomeCompleto: "Ana Costa",
    email: "ana.costa@example.com",
    telefone: "(11) 96543-2109",
    profissao: "Gerente de Projetos",
    resumoProfissional: "Gerente de projetos com 7 anos de experiência em gestão ágil, liderança de times multidisciplinares e entrega de projetos complexos no prazo e orçamento.",
    formacao: [
      "MBA em Gestão de Projetos - FGV (2018)",
      "Certificação PMP - PMI (2020)",
      "Certificação Scrum Master - Scrum Alliance (2019)"
    ],
    experiencia: [
      {
        cargo: "Gerente de Projetos Senior",
        empresa: "Consulting Group",
        periodo: "2021 - Presente",
        descricao: "Liderança de projetos estratégicos, gestão de stakeholders, implantação de metodologias ágeis."
      },
      {
        cargo: "Scrum Master",
        empresa: "Software Solutions",
        periodo: "2017 - 2021",
        descricao: "Facilitação de cerimônias ágeis, remoção de impedimentos, coaching do time."
      }
    ],
    habilidades: ["Scrum", "Kanban", "Jira", "Leadership", "Stakeholder Management", "Risk Management"],
    imagem: "/default-avatar.jpg"
  },
  {
    id: 5,
    nomeCompleto: "Carlos Mendes",
    email: "carlos.mendes@example.com",
    telefone: "(11) 95432-1098",
    profissao: "Analista de Dados",
    resumoProfissional: "Analista de dados apaixonado por insights, com 3 anos de experiência em análise exploratória, visualização de dados e machine learning.",
    formacao: [
      "Bacharelado em Estatística - UFRJ (2021)",
      "Certificação em Data Analytics - Google (2022)",
      "Certificação em Python para Data Science - Coursera (2023)"
    ],
    experiencia: [
      {
        cargo: "Analista de Dados",
        empresa: "Data Analytics Co",
        periodo: "2021 - Presente",
        descricao: "Análise exploratória de dados, criação de dashboards, implementação de modelos de ML."
      }
    ],
    habilidades: ["Python", "SQL", "Tableau", "Power BI", "Machine Learning", "Excel", "Pandas"],
    imagem: "/default-avatar.jpg"
  },
];

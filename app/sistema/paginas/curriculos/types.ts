import type { Timestamp } from "firebase/firestore";

export type Experiencia = {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
};

export type CurriculoFormData = {
  nomeCompleto: string;
  email: string;
  telefone: string;
  cpf: string;
  profissao: string;
  resumoProfissional: string;
  formacao: string[];
  experiencia: Experiencia[];
  habilidades: string[];
  imagem: string;
};

export type curriculo = CurriculoFormData & {
  id: string;
  criadoEm?: Timestamp | Date | null;
};

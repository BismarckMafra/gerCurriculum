import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { curriculo, CurriculoFormData } from "@/app/sistema/paginas/curriculos/types";

const COLLECTION_NAME = "curriculos";

const curriculosCollection = collection(db, COLLECTION_NAME);

function mapCurriculo(id: string, data: Record<string, unknown>): curriculo {
  return {
    id,
    nomeCompleto: String(data.nomeCompleto ?? ""),
    email: String(data.email ?? ""),
    telefone: String(data.telefone ?? ""),
    cpf: String(data.cpf ?? ""),
    profissao: String(data.profissao ?? ""),
    resumoProfissional: String(data.resumoProfissional ?? ""),
    formacao: Array.isArray(data.formacao) ? (data.formacao as string[]) : [],
    experiencia: Array.isArray(data.experiencia) ? (data.experiencia as curriculo["experiencia"]) : [],
    habilidades: Array.isArray(data.habilidades) ? (data.habilidades as string[]) : [],
    imagem: String(data.imagem ?? ""),
    criadoEm: (data.criadoEm as curriculo["criadoEm"]) ?? null,
  };
}

export async function listarCurriculos(): Promise<curriculo[]> {
  const curriculosQuery = query(curriculosCollection, orderBy("criadoEm", "desc"));
  const snapshot = await getDocs(curriculosQuery);

  return snapshot.docs.map((documento) => mapCurriculo(documento.id, documento.data()));
}

export async function buscarCurriculoPorId(id: string): Promise<curriculo | null> {
  const documento = await getDoc(doc(db, COLLECTION_NAME, id));

  if (!documento.exists()) {
    return null;
  }

  return mapCurriculo(documento.id, documento.data());
}

export async function cadastrarCurriculo(data: CurriculoFormData): Promise<string> {
  const documento = await addDoc(curriculosCollection, {
    ...data,
    criadoEm: serverTimestamp(),
  });

  return documento.id;
}

export async function atualizarCurriculo(id: string, data: CurriculoFormData): Promise<void> {
  await updateDoc(doc(db, COLLECTION_NAME, id), data);
}

export async function excluirCurriculo(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION_NAME, id));
}

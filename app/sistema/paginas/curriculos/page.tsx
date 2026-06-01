"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { listarCurriculos } from "@/services/curriculosService";
import type { curriculo } from "./types";

function getImagemSrc(imagem?: string) {
  if (!imagem || !imagem.trim()) {
    return "/Logo.jpg";
  }

  try {
    const url = new URL(imagem);
    if (url.protocol === "http:" || url.protocol === "https:") {
      return imagem;
    }
  } catch {
    // Continue to fallback if imagem is not a valid URL.
  }

  return "/Logo.jpg";
}

export default function CurriculosPage() {
  const [curriculos, setCurriculos] = useState<curriculo[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function carregarCurriculos() {
      try {
        const dados = await listarCurriculos();
        setCurriculos(dados);
      } catch (error) {
        console.error(error);
        setErro("Erro ao carregar currículos do Firebase. Tente novamente mais tarde.");
      } finally {
        setCarregando(false);
      }
    }

    carregarCurriculos();
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-6 py-12 bg-cyan-50">
      <h1 className="text-3xl mt-40 md:text-4xl font-semibold text-amber-900 text-center mb-6 bg-amber-200 p-4 rounded-lg">
        Lista de Currículos
      </h1>

      {carregando && <p className="text-center text-slate-600">Carregando currículos...</p>}
      {erro && <p className="text-center text-red-600">{erro}</p>}
      {!carregando && curriculos.length === 0 && (
        <p className="text-center text-slate-700">Nenhum currículo encontrado no Firebase.</p>
      )}

      <div className="space-y-6">
        {curriculos.map((item) => {
          const srcImagem = getImagemSrc(item.imagem);

          return (
            <div
              key={item.id}
              className="rounded-2xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 bg-white"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src={srcImagem}
                  alt={item.nomeCompleto}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  {item.nomeCompleto}
                </h3>
                <p className="text-sm text-slate-500 mb-1">{item.profissao}</p>
                <p className="text-sm text-slate-500 mb-1">{item.email}</p>
                <p className="text-sm text-slate-500">{item.telefone}</p>
              </div>

              <div className="w-full md:w-auto">
                <Link
                  href={`/sistema/paginas/curriculos/${item.id}`}
                  className="inline-flex w-full md:w-auto items-center justify-center rounded-lg bg-amber-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-700"
                >
                  Ver detalhes do currículo
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <Toaster position="top-center" />
    </section>
  );
}

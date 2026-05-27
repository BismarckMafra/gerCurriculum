"use client"

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CURRICULOS } from "../curriculosData";

export default function BuscarCurriculo() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");

  const resultados = useMemo(() => {
    const termo = submitted.trim().toLowerCase();
    if (!termo) return [];
    return CURRICULOS.filter((curriculo) =>
      curriculo.nomeCompleto.toLowerCase().includes(termo)
    );
  }, [submitted]);

  return (
    <section className="mx-auto max-w-4xl px-6 pt-32 pb-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-900/80">
            Busca de currículo
          </p>
          <h1 className="mt-3 text-3xl font-bold text-amber-900">
            Localize um candidato pelo nome
          </h1>
        </div>
        <Link
          href="/sistema/paginas/curriculos"
          className="inline-flex items-center rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-amber-900 transition hover:border-amber-300 hover:bg-amber-50"
        >
          Ver lista completa
        </Link>
      </div>

      <div className="rounded-[32px] border border-amber-100 bg-amber-50 p-8 shadow-sm">
        <form
          className="flex flex-col gap-4 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(query);
          }}
        >
          <label htmlFor="nomeCurriculo" className="sr-only">
            Buscar por nome do candidato
          </label>
          <input
            id="nomeCurriculo"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Digite o nome do candidato"
            className="flex-1 rounded-3xl border border-amber-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-3xl bg-amber-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-amber-800"
          >
            Buscar
          </button>
        </form>
      </div>

      <div className="mt-8 space-y-6">
        {submitted === "" ? (
          <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
            <p className="text-sm text-slate-600">
              Digite um nome e clique em Buscar para ver o currículo do candidato.
            </p>
          </div>
        ) : resultados.length === 0 ? (
          <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
            <p className="text-sm text-slate-600">
              Nenhum candidato encontrado para "{submitted}".
            </p>
          </div>
        ) : (
          resultados.map((curriculo) => (
            <article key={curriculo.id} className="rounded-[32px] border border-amber-100 bg-amber-50 p-6 shadow-sm">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <div className="flex h-28 w-28 flex-none items-center justify-center rounded-3xl bg-white p-3 shadow-sm border border-amber-100">
                  <Image
                    src={curriculo.imagem}
                    alt={curriculo.nomeCompleto}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover rounded-3xl"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-amber-900/80">
                        Candidato
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-amber-900">
                        {curriculo.nomeCompleto}
                      </h2>
                    </div>
                    <Link
                      href={`/sistema/paginas/curriculos/${curriculo.id}`}
                      className="inline-flex items-center rounded-full bg-amber-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-800"
                    >
                      Ver detalhes
                    </Link>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-amber-100 bg-white p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-900/80">
                        Idade
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        {curriculo.idade}
                      </p>
                    </div>
                    <div className="rounded-3xl border border-amber-100 bg-white p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-900/80">
                        Pretensão salarial
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        R$ {curriculo.valorPretendido.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 rounded-3xl border border-amber-100 bg-white p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-900/80">Resumo profissional</p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {curriculo.resumo}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

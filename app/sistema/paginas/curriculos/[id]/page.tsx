import { CURRICULOS } from "../curriculosData"
import Image from "next/image"
import Link from "next/link"

export default async function PaginaItemCurriculo({ params }:
  { params: Promise<{ id: string }> // Tipagem correta para o Next.js 15
}) {
  
  // Aguarde os params serem resolvidos
  const { id } = await params;

  const curriculoId = Number(id);
  const curriculo = CURRICULOS.find((c) => c.id === curriculoId);

  if (!curriculo || Number.isNaN(curriculoId)) {
    return (
      <div className="p-10 text-center">Currículo não encontrado</div>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-6 pt-42 pb-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-900/80">Detalhes do currículo</p>
          <h1 className="mt-3 text-3xl font-bold text-amber-900">{curriculo.nomeCompleto}</h1>
          <p className="mt-2 text-sm text-slate-600">{curriculo.email}</p>
        </div>
        <Link
          href="/sistema/paginas/curriculos"
          className="inline-flex items-center rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-amber-900 transition hover:border-amber-300 hover:bg-amber-50"
        >
          Voltar à lista
        </Link>
      </div>

      <div className="space-y-6 rounded-[32px] border border-amber-100 bg-amber-50 p-8 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-white p-6 shadow-sm border border-amber-100">
            <div className="mb-5 h-28 w-28 overflow-hidden rounded-3xl bg-gray-100">
              <Image
                src={curriculo.imagem}
                alt={curriculo.nomeCompleto}
                width={112}
                height={112}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm text-slate-500">Foto do candidato</p>
          </div>

          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-900/80">Idade</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{curriculo.idade}</p>
              </div>
              <div className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-900/80">Pretensão salarial</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">R$ {curriculo.valorPretendido.toFixed(2)}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-900/80">Resumo profissional</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">{curriculo.resumo}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-900/80">E-mail</p>
            <p className="mt-3 text-sm text-slate-700">{curriculo.email}</p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-900/80">ID do candidato</p>
            <p className="mt-3 text-sm text-slate-700">{curriculo.id}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
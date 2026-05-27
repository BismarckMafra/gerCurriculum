import Image from "next/image";
import Link from "next/link";
import { Toaster } from "sonner";
import { CURRICULOS } from "./curriculosData";

export default function CurriculosPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 bg-cyan-50">
      <h1 className="text-3xl mt-40 md:text-4xl font-semibold text-amber-900 text-center mb-6 bg-amber-200 p-4 rounded-lg">
        Lista de Currículos
      </h1>

      <div className="space-y-6">
        {CURRICULOS.map((curriculo) => (
          <div
            key={curriculo.id}
            className="rounded-2xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 bg-white"
          >
            <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={curriculo.imagem ?? "/Logo.jpg"}
                alt={curriculo.nomeCompleto}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {curriculo.nomeCompleto}
              </h3>
              <p className="text-amber-500 text-sm mb-1">{curriculo.idade}</p>
              <p className="text-lg font-bold text-amber-900 mt-2">
                R$ {curriculo.valorPretendido.toFixed(2)}
              </p>
            </div>

            <div className="w-full md:w-auto">
              <Link
                href={`/sistema/paginas/curriculos/${curriculo.id}`}
                className="inline-flex w-full md:w-auto items-center justify-center rounded-lg bg-amber-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-700"
              >
                Ver detalhes do currículo
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Toaster position="top-center" />
    </section>
  );
}

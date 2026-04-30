import Image from "next/image"
import Link from "next/link"
import { CURRICULOS } from "./curriculosData"

export default function PaginaCurriculo() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-12 bg-cyan-50">
            <h1 className="text-3xl md:text-4xl font-semibold text-amber-900 text-center mb-10
            bg-amber-200 p-4 rounded-lg">
                Lista de Currículos
            </h1>
            {CURRICULOS.map((curriculo) => (
                <div key={curriculo.id}
                    className="bg-amber-200-300 rounded-2xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 mb-6">
                    <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-xl">
                        <Image src={curriculo.imagem} alt={curriculo.nomeCompleto} width={50} height={50}
                            className="object-contain transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-semibold text-amber-900 mb-2"> {curriculo.nomeCompleto} </h3>
                        <p className="text-amber-500 text-sm mb-1"> {curriculo.idade} </p>
                        <p className="text-lg font-bold text-amber-900 mt-2"> R$ {curriculo.valorPretendido.toFixed(2)} </p>
                    </div>
                    <div className="w-full md:w-auto">
                        <Link
                            className="w-full md:w-auto bg-amber-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
                            href={`/sistema/paginas/curriculos/${curriculo.id}`}>
                            Ver detalhes do currículo
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    )
}
import Image from "next/image"
import Link from "next/link"
import { CURRICULOS } from "./curriculosData"

export default function PaginaCurriculo() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-12 bg-cyan-50">
            <h1 className=" text-3xl mt-40 md:text-4xl font-semibold text-amber-900 text-center mb-10 bg-amber-200 p-4 rounded-lg">
                Lista de Currículos
            </h1>
            <div className="space-y-6">
                {CURRICULOS.map((curriculo) => (
                    <div key={curriculo.id}
                        className="bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
                            {curriculo.imagem ? (
                                <Image 
                                    src={curriculo.imagem} 
                                    alt={curriculo.nomeCompleto} 
                                    width={80} 
                                    height={80}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <div className="text-3xl text-gray-400">👤</div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                {curriculo.nomeCompleto}
                            </h3>
                            <p className="text-amber-700 font-medium mb-2">
                                {curriculo.profissao}
                            </p>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                {curriculo.resumoProfissional}
                            </p>
                            <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                                <span>📧 {curriculo.email}</span>
                                <span>📱 {curriculo.telefone}</span>
                            </div>
                        </div>
                        <div className="w-full md:w-auto">
                            <Link
                                className="inline-block bg-amber-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors duration-300"
                                href={`/sistema/paginas/curriculos/${curriculo.id}`}>
                                Ver detalhes
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
import Image from "next/image"
import Link from "next/link"
import { CURRICULOS } from "./curriculosData"

    return (
        <section className="mx-auto max-w-5xl px-6 py-12 bg-cyan-50">
            <h1 className="text-3xl mt-40 md:text-4xl font-semibold text-amber-900 text-center mb-6 bg-amber-200 p-4 rounded-lg">
                Lista de Curriculos
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
            ) : (
                <div className="space-y-6">
                    {curriculosFiltrados.map((curriculo) => (
                        <div
                            key={curriculo.id}
                            className="bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden text-3xl text-gray-400">
                                {curriculo.imagem ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={curriculo.imagem} alt={curriculo.nomeCompleto} className="object-cover w-full h-full" />
                                ) : (
                                    "👤"
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-amber-900 mb-2">{curriculo.nomeCompleto}</h3>
                                <p className="text-amber-700 font-medium mb-2">{curriculo.profissao}</p>
                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{curriculo.resumoProfissional}</p>
                                <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                                    <span>{curriculo.email}</span>
                                    <span>{curriculo.telefone}</span>
                                    <span>CPF {curriculo.cpf}</span>
                                </div>
                            </div>
                            <div className="w-full md:w-auto flex flex-col gap-2">
                                <Link className="inline-block text-center bg-amber-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors duration-300" href={`/sistema/paginas/curriculos/${curriculo.id}`}>
                                    Ver detalhes
                                </Link>
                                <Link className="inline-block text-center bg-amber-100 text-amber-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-amber-200 transition-colors duration-300" href={`/sistema/paginas/curriculos/${curriculo.id}/editar`}>
                                    Editar
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <Toaster position="top-center" />
        </section>
    );
}

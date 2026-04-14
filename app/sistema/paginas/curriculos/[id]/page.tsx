import { CURRICULOS } from "../page"
import Image from "next/image"

export default function PaginaItemCurriculo({ params }:
  { params: { id: string } }) {

  const { id } = params;
  const curriculo = CURRICULOS.find((c) => c.id === parseInt(id));

  if (!curriculo) {
    return (
      <div className="p-10 text center">Currículo não encontrado</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-amber-900 m-4">{curriculo.nomeCompleto}</h1>
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
    </div>
  );
}
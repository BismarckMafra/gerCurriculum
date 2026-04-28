import { CURRICULOS } from "../curriculosData"
import Image from "next/image"
import Link from "next/link"

export default async function PaginaItemCurriculo({ params }:
  { params: Promise<{ id: string }> }) {

  const { id } = await params;
  const curriculo = CURRICULOS.find((c) => c.id === parseInt(id));

  if (!curriculo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cyan-50">
        <div className="text-center p-10">
          <h1 className="text-3xl font-bold text-amber-900 mb-4">Currículo não encontrado</h1>
          <p className="text-gray-600 mb-6">O currículo que você está procurando não existe.</p>
          <Link href="/sistema/paginas/curriculos" className="bg-amber-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
            Voltar à lista
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyan-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mt-30 bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            {curriculo.imagem ? (
              <div className="w-24 h-24 shrink-0 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
                <Image 
                  src={curriculo.imagem} 
                  alt={curriculo.nomeCompleto} 
                  width={96} 
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
            ) : (
              <div className="w-24 h-24 shrink-0 flex items-center justify-center bg-gray-100 rounded-xl text-5xl">👤</div>
            )}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-amber-900 mb-2">{curriculo.nomeCompleto}</h1>
              <p className="text-2xl font-semibold text-amber-700 mb-4">{curriculo.profissao}</p>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <span>📧</span>
                  <a href={`mailto:${curriculo.email}`} className="text-blue-600 hover:underline">
                    {curriculo.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span>📱</span>
                  <a href={`tel:${curriculo.telefone}`} className="text-blue-600 hover:underline">
                    {curriculo.telefone}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Resumo Profissional */}
          <div className="border-t pt-6">
            <h2 className="text-2xl font-bold text-amber-900 mb-3">Resumo Profissional</h2>
            <p className="text-gray-700 leading-relaxed">{curriculo.resumoProfissional}</p>
          </div>
        </div>

        {/* Habilidades */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Habilidades</h2>
          <div className="flex flex-wrap gap-3">
            {curriculo.habilidades.map((habilidade, index) => (
              <span key={index} className="bg-amber-100 text-amber-900 px-4 py-2 rounded-full font-medium">
                {habilidade}
              </span>
            ))}
          </div>
        </div>

        {/* Experiência Profissional */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">Experiência Profissional</h2>
          <div className="space-y-6">
            {curriculo.experiencia.map((exp, index) => (
              <div key={index} className="border-l-4 border-amber-900 pl-6 pb-6 last:pb-0">
                <h3 className="text-xl font-bold text-amber-900">{exp.cargo}</h3>
                <p className="text-amber-700 font-semibold mb-1">{exp.empresa}</p>
                <p className="text-gray-500 text-sm mb-3">{exp.periodo}</p>
                <p className="text-gray-700">{exp.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formação Acadêmica */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Formação Acadêmica</h2>
          <ul className="space-y-3">
            {curriculo.formacao.map((formacao, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-amber-900 mt-1">📚</span>
                <span className="text-gray-700">{formacao}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Botão de Voltar */}
        <div className="flex justify-between mb-6">
          <Link 
            href="/sistema/paginas/curriculos" 
            className="bg-amber-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
          >
            ← Voltar à lista
          </Link>
        </div>
      </div>
    </div>
  );
}
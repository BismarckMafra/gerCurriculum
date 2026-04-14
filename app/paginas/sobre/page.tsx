export default function SobrePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 bg-cyan-50">
      <h1 className="text-3xl md:text-4xl font-semibold text-amber-900 text-center mb-10 bg-amber-200 p-4 rounded-lg">
        Sobre a Empresa
      </h1>

      <div className="space-y-12">
        {/* Missão */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-amber-900">Nossa Missão</h2>
          </div>
          <p className="text-slate-700 text-lg leading-relaxed">
            Conectar talentos excepcionais às oportunidades ideais, revolucionando o processo de recrutamento através de tecnologia inovadora e análise inteligente de currículos.
          </p>
        </div>

        {/* Visão */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-amber-900">Nossa Visão</h2>
          </div>
          <p className="text-slate-700 text-lg leading-relaxed">
            Ser a plataforma líder em gerenciamento de currículos, reconhecida pela eficiência, precisão e pela capacidade de transformar carreiras e organizações.
          </p>
        </div>

        {/* Valores */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-amber-900">Nossos Valores</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-amber-900">Inovação</h3>
                  <p className="text-slate-600">Buscamos constantemente novas tecnologias para melhorar a experiência de nossos usuários.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-amber-900">Transparência</h3>
                  <p className="text-slate-600">Mantemos processos claros e comunicação aberta com todos os stakeholders.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-amber-900">Excelência</h3>
                  <p className="text-slate-600">Comprometemo-nos com a qualidade em cada aspecto de nossos serviços.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-amber-900">Inclusão</h3>
                  <p className="text-slate-600">Promovemos diversidade e igualdade de oportunidades no mercado de trabalho.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* O que fazemos */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-amber-900">O que Fazemos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">Busca Inteligente</h3>
              <p className="text-slate-600">Algoritmos avançados para encontrar os candidatos perfeitos para cada vaga.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">Análise de Dados</h3>
              <p className="text-slate-600">Insights valiosos sobre tendências do mercado e perfis profissionais.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">Gestão Completa</h3>
              <p className="text-slate-600">Plataforma completa para cadastro, organização e acompanhamento de currículos.</p>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-amber-900 text-center mb-8">Nossos Números</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-900 mb-2">10K+</div>
              <p className="text-slate-700">Currículos Cadastrados</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-900 mb-2">500+</div>
              <p className="text-slate-700">Empresas Parceiras</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-900 mb-2">95%</div>
              <p className="text-slate-700">Taxa de Satisfação</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-900 mb-2">24/7</div>
              <p className="text-slate-700">Suporte Disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

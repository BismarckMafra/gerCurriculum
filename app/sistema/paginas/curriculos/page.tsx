import Image from "next/image"
import Link from "next/link"

export const CURRICULOS = [
    {
        id: 1,
        nomeCompleto: "Ana Maria Souza",
        idade: "29 anos",
        profissão: 3500.00,
        resumo: "Analista de marketing digital com 5 anos de experiência em campanhas de redes sociais e geração de leads.",
        pretensao: "R$ 3.500,00",
        email: "ana.souza@example.com",
        imagem: "/file.svg"
    },
    {
        id: 2,
        nomeCompleto: "Carlos Eduardo Lima",
        idade: "32 anos",
        profissão: 4200.00,
        resumo: "Desenvolvedor full-stack especializado em React, Node.js e TypeScript, com foco em soluções escaláveis.",
        pretensao: "R$ 4.200,00",
        email: "carlos.lima@example.com",
        imagem: "/file.svg"
    },
    {
        id: 3,
        nomeCompleto: "Beatriz Fernandes",
        idade: "27 anos",
        profissão: 3200.00,
        resumo: "Designer UI/UX com portfólio em interfaces mobile e web, destacando usabilidade e acessibilidade.",
        pretensao: "R$ 3.200,00",
        email: "beatriz.fernandes@example.com",
        imagem: "/file.svg"
    },
    {
        id: 4,
        nomeCompleto: "Eduardo Silva",
        idade: "36 anos",
        profissão: 4800.00,
        resumo: "Gerente de projetos com certificação PMP, experiente em equipes ágeis e entregas de TI.",
        pretensao: "R$ 4.800,00",
        email: "eduardo.silva@example.com",
        imagem: "/file.svg"
    },
    {
        id: 5,
        nomeCompleto: "Lucas Oliveira",
        idade: "24 anos",
        profissão: 2900.00,
        resumo: "Técnico de suporte de TI com forte atuação em redes, infraestrutura e atendimento ao cliente.",
        pretensao: "R$ 2.900,00",
        email: "lucas.oliveira@example.com",
        imagem: "/file.svg"
    },
    {
        id: 6,
        nomeCompleto: "Fernanda Costa",
        idade: "30 anos",
        profissão: 4100.00,
        resumo: "Analista financeiro com domínio em Excel, Power BI e controle orçamentário.",
        pretensao: "R$ 4.100,00",
        email: "fernanda.costa@example.com",
        imagem: "/file.svg"
    }
]

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
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">{curriculo.nomeCompleto}</h3>
                        <p className="text-amber-500 text-sm mb-1">{curriculo.idade}</p>
                        <p className="text-sm text-slate-700 mb-3">{curriculo.resumo}</p>
                        <p className="text-lg font-bold text-amber-900">Pretensão: {curriculo.pretensao}</p>
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
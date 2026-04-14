import Image from "next/image"
import Link from "next/link"
import { CURRICULOS } from "./curriculosData"
[
    {
        id: 1,
        nomeCompleto: "Café Pingado",
        idade: "Café com um pouco de leite, perfeito para começar o dia.",
        profissão: 10.95,
        email:"john.doe@example.com",
        imagem: "/cappuccino.jpg"

    },
    {
        id: 2,
        nomeCompleto: "Monster",
        idade: "Energético para te dar aquele boost de energia quando mais precisar.",
        profissão: 8.75,
        email:"jane.smith@example.com",
        imagem: "/monster.jpg"

    }, {
        id: 3,
        nomeCompleto: "Pizza",
        idade: "Pizza de calabresa, com borda recheada de catupiry, perfeita para compartilhar com os amigos.",
        profissão: 15.55,
        email:"bob.johnson@example.com",
        imagem: "/pizza.jpg"
    },{
        id: 4,
        nomeCompleto: "Escondidinho",
        idade: " Escondidinho de frango, com purê de batata cremoso, tão bom que ninguém acha.",
        profissão: 18.25,
        email:"alice.wonderland@example.com",
        imagem: "/escondidinho.jpg"
    },{
        id: 5,
        nomeCompleto:"Sorvete",
        idade: "Sorvete de chocolate, cremoso e irresistível, perfeito para se refrescar nos dias quentes.",
        profissão: 12.38,
        email:"eve.adams@example.com",
        imagem: "/sorvete.jpg"
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
                        <h3 className="text-xl font-semibold text-amber-900 mb-2"> {curriculo.nomeCompleto} </h3>
                        <p className="text-amber-500 text-sm mb-1"> {curriculo.idade} </p>
                        <p className="text-lg font-bold text-amber-900 mt-2"> R$ {curriculo.profissão.toFixed(2)} </p>
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
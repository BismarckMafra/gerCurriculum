import Link from "next/link";

export default function Nav(){
    return(
        <div aria-label=" Navegação principal" className=" text-amber-300 hidden md:flex items-center">
            <Link className="mr-4" href='/'> Home </Link>
            <Link className="mr-4" href='/paginas/contato'> Contatos </Link>
            <Link className="mr-4" href='/paginas/sobre'> Sobre a empresa </Link>
            <Link className="mr-4" href='/sistema/paginas/curriculos'> Lista de Currículos </Link>
            <Link className="mr-4" href='/sistema/paginas/curriculos/1'> Currículo </Link>
        </div>
    )
}
import Link from "next/link";

export default function Nav(){
    return(
        <div aria-label=" Navegação principal" className=" text-amber-950 hidden md:flex items-center position-right">
            <Link className="mr-4" href='/'> Home </Link>
            <Link className="mr-4" href='/paginas/contato'> Contatos </Link>
            <Link className="mr-4" href='/paginas/sobre'> Sobre a empresa </Link>
             <Link className="mr-4" href='/curriculos/cadastrar'> Cadastrar Currículos </Link>
            <Link className="mr-4" href='/curriculos/visualizar'> Lista de Currículos </Link>
            <Link className="mr-4" href='/curriculos/visualizar/id'> Currículo </Link>
        </div>
    )
}
"use client"

import Image from "next/image";
import Nav from "./nav"
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const fecharMenu = () => setIsMenuOpen(false);
    const [solid, setSolid] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSolid(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={` text-amber-950 fixed top-0 z-50 w-full transition-colors duration-300 border-b ${solid
                ? " text-amber-950 bg-amber-500 shadow-md border-amber-700"
                : " text-amber-950 border-amber-700/40 bg-amber-200/40"
                } p-6`}
        >
            <div className="mx-auto text-amber-950">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-amber-950">
                        <Image src="/Logo.jpg" alt="Logo da empresa" width={150} height={90} className="rounded" />
                    </div>
                    <Nav />
                    <button
                        className="flex md:hidden min-h-11 min-w-11 items-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-label="Abrir Menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className={`text-amber-950 fixed inset-0 z-50 bg-black bg-opacity-50 ${isMenuOpen ? "block" : "hidden"}`}>
                        <div className={ `text-amber-950 fixed top-0 left-0 h-full w-64 bg-amber-200 p-6 transform transition-transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                            <button
                                className="mb-4"
                                onClick={fecharMenu}
                                aria-label="Fechar Menu"
                            >
                                <X size={24} />
                            </button>
                            <nav className="text-amber-950 flex flex-col space-y-4">
                                <a href="/" className="text-amber-950" onClick={fecharMenu}>Home</a>
                                <a href="/paginas/contato" className="text-amber-950" onClick={fecharMenu}>Contatos</a>
                                <a href="/paginas/sobre" className="text-amber-950" onClick={fecharMenu}>Sobre a empresa</a>
                                <a href="/sistema/paginas/curriculos" className="text-amber-950" onClick={fecharMenu}>Lista de Currículos</a>
                                <a href="/sistema/paginas/curriculos/1" className="text-amber-950" onClick={fecharMenu}>Currículo</a>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
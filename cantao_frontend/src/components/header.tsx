import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header>
             {/* Logo*/}
            <div className="bg-fundoCinza">
                <div className="pt-8 mx-auto w-2/12">
                    <img src="/logo_cantao.png" alt="Logo do Cantão do Catete" className="h-auto w-full"/>
                </div>
                {/* Barra de navegação*/}
                <nav>
                    <ul id='lista' className="text-center">

                        <li className="inline-block px-5 pt-2 text-lg font-neue text-black hover:text-red-600"><Link to = "/">Início</Link></li>
                        <li className="inline-block px-5 pt-2 text-lg font-neue text-black hover:text-red-600"><Link to = "/cardapio">Cardápio</Link></li>
                        <li className="inline-block px-5 pt-2 text-lg font-neue text-black hover:text-red-600"><Link to = "/sobre">Sobre/Localização</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header(){
    return(
        <header>
             {/* Logo*/}
            <div className="bg-cinza">
                <div className="pt-8 mx-auto w-2/12">
                    <Image
                    src="/logo_cantao.png"
                    alt="Logo do Cantão do Catete"
                    width={600}
                    height={400}
                    className="h-auto w-full"
                    />
                </div>
                {/* Barra de navegação*/}
                <nav>
                    <ul id='lista' className="text-center">

                        <li className="inline-block px-5 pt-2 text-lg font-neue text-black hover:text-vermelho"><Link href="/">Início</Link></li>
                        <li className="inline-block px-5 pt-2 text-lg font-neue text-black hover:text-vermelho"><Link href="/cardapio">Cardápio</Link></li>
                        <li className="inline-block px-5 pt-2 text-lg font-neue text-black hover:text-vermelho"><Link href="/sobre">Sobre/Localização</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
"use client"
import React from "react";
import Link from "next/link"
import Image from "next/image";

export default function Footer(){
    return(
        <footer className="bg-green-300">
            <div id="containerContatos" className="flex justify-around items-center p-4">
                <nav id="linksPaginas" className="w-3/6">
                    <ul id='lista' className="text-left flex-col">
                        <li className="w-2/6 px-5 pt-2 text-lg font-neue text-black border-b last:border-none py-2 hover:text-vermelho"><Link href="/">Início</Link></li>
                        <li className="w-2/6 px-5 pt-2 text-lg font-neue text-black border-b last:border-none py-2 hover:text-vermelho"><Link href="/cardapio">Cardápio</Link></li>
                        <li className="w-2/6 px-5 pt-2 text-lg font-neue text-black border-b last:border-none py-2 hover:text-vermelho"><Link href="/sobre">Sobre/Localização</Link></li>
                    </ul>
                </nav>
                <div id="contatos" className="flex flex-col items-end w-2/6 p-4 font-neue text-right text-lg space-y-2 pr-4">
                    <p>Cantão do Catete</p>
                    <p>Tel: (21) 2225-1380</p>
                    <p>Cel: (21) 99447-4417</p>
                    <p>Endereço: Travessa Carlos de Sá, 14 - Catete - Rio de Janeiro - RJ</p>
                </div>
                <div id="redesSociais" className="flex flex-row items-center w-1/6 mx-4 gap-4">
                    <Link href="#" target="_blank">
                        <Image 
                        src="/whatsapp.png"
                        alt="Whatsapp"
                        width={30}
                        height={30}
                        className="mx-4"
                        />
                    </Link>
                    
                    <Link href="https://www.instagram.com/cantaodocatete/" target="_blank">
                        <Image 
                        src="/instagram.png"
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="mx-4"
                        />
                    </Link>
                </div>
            </div>
            

            <div id="copy" className="p-4 text-center font-neue font-bold">
                <p>Copyright &copy; 2025 - Cantão do Catete</p>
            </div>
        </footer>
    )
}

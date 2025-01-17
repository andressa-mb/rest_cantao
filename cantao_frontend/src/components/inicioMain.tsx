"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/globals.css";
import "../styles/inicioMainStyles.css";


export default function InicioMain() {
    return(
        <main className="bg-white">
            <div id="containerPagina" className="mx-[25%]">
                <div id="primeiraParte" className="h-96 w-96 m-auto pt-4 pb-4">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="w-full h-full"
                    >
                        <SwiperSlide className="text-center flex justify-center items-center">
                            <Image 
                            src="/imagens/cantao.jpg"
                            width={480}
                            height={300}
                            quality={55}
                            alt="Foto do Cantão"
                            className="rounded-lg block w-full h-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="text-center flex justify-center items-center">
                            <Image 
                            src="/imagens/contraFilé.png"
                            width={400}
                            height={300}
                            alt="Foto Comida"
                            className="rounded-lg block w-full h-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="text-center flex justify-center items-center">
                            <Image 
                            src="/imagens/beer.jpg"
                            width={300}
                            height={500}
                            alt="Foto Cerveja"
                            className="rounded-lg block w-full h-full"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div id="segundaParte1" className="flex justify-center gap-4 pt-4 pb-4">
                    <table className="border border-solid border-black border-collapse">
                        <caption className="font-semibold font-neue text-lg">Pratos do dia</caption>
                        <thead>
                            <tr>
                                <th className="table-cell font-neue">Dia da Semana</th>
                                <th className="table-cell font-neue">Pratos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-cell font-neue">Segunda-Feira</td>
                                <td className="table-cell font-neue">Galinha caipira c/ bat. cozida arroz e feijão</td>
                            </tr>
                            <tr>
                                <td className="table-cell font-neue">Terça-Feira</td>
                                <td className="table-cell font-neue">Dobradinha a siciliana</td>
                            </tr>
                            <tr>
                                <td className="table-cell font-neue">Quarta-Feira</td>
                                <td className="table-cell font-neue">Galinha ao molho pardo com macarrão e arroz</td>
                            </tr>
                            <tr>
                                <td className="table-cell font-neue">Quinta-Feira</td>
                                <td className="table-cell font-neue">Costela com agrião, batata, arroz e feijão</td>
                            </tr>
                            <tr>
                                <td className="table-cell font-neue">Sexta-Feira</td>
                                <td className="table-cell font-neue">Mocotó com feijão branco e arroz</td>
                            </tr>
                            <tr>
                                <td className="table-cell font-neue">Sábado</td>
                                <td className="table-cell font-neue">Feijoada completa</td>
                            </tr>
                            <tr>
                                <td className="table-cell font-neue">Domingo</td>
                                <td className="table-cell font-neue">Cozido especial</td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="segundaParte2" className="relative">
                        <Image
                        src="/imagens/dobradinha.jpg"
                        width={400}
                        height={300}
                        alt="Prato de dobradinha"
                        className="rounded-lg"
                        />
                    
                        <div className="absolute bottom-2 left-2">
                            <Link href="/cardapio">
                            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600">
                                Cardápio
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="terceiraParte" className="m-auto flex pt-4 pb-4 justify-center items-center">
                    <div id="imagensParteTres" className="w-96">
                        <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="w-full h-full"
                        >
                            <SwiperSlide>
                                <Image 
                                src="/imagens/friendsWithBeer.jpg"
                                width={400}
                                height={300}
                                alt="Amigos brindando"
                                className="rounded-lg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image 
                                src="/imagens/bebidaNaMesa.jpg"
                                width={400}
                                height={300}
                                alt="Bebida"
                                className="rounded-lg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image 
                                src="/imagens/toastBeer.jpg"
                                width={400}
                                height={300}
                                alt="Brinde"
                                className="rounded-lg"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div id="textoParteTres" className="w-96 font-neue font-bold text-lg text-justify pl-4 pr-4">
                        <p>Reúna-se com os amigos, seja jogo, aniversário ou &quot;sextar&quot; com a galera e uma bebida.</p>
                    </div>
                </div>
               
                <div id="quartaParte" className="pt-4 pb-4 w-full m-auto">
                    
                    <form className="flex flex-col items-center space-y-4">
                    <h1 className="font-neue text-lg font-semibold">Feedback</h1>
                        <div className="w-1/2">
                            <label htmlFor="nome" className="block font-neue text-lg font-semibold">Nome</label>
                            <input id="nome" type="text" placeholder="Digite seu nome" className="w-full mt-2 p-2 border border-red-400 rounded-md"></input>
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="email" className="block font-neue text-lg font-semibold">E-mail</label>
                            <input id="email" type="email" placeholder="Digite seu e-mail" className="w-full mt-2 p-2 border border-red-400 rounded-md"></input>
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="file" className="block font-neue text-lg font-semibold">Escolha uma foto</label>
                            <input id="file" type="file" accept="image/*" className="w-full mt-2 p-2 border border-red-400 rounded-md"></input>
                            <p className="font-neue text-sm text-gray-600 mt-1">Apenas imagens (JPG, PNG, etc.)</p>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <button id="botaoForm" className="bg-green-600 font-neue text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600">Postar</button>
                        </div>
                    </form>
                </div>

                <div id="quartaParteResposta" className="pt-4 pb-4 w-full m-auto"></div>
            </div>
        </main>
    )
}

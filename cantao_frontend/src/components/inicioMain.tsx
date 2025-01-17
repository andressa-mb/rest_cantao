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
        <main className="bg-red-400">
            <div id="containerPagina" className="mx-[25%] bg-gray-200">
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
                        <SwiperSlide className="text-center bg-white flex justify-center items-center">
                            <Image 
                            src="/imagens/cantao.jpg"
                            width={480}
                            height={300}
                            quality={55}
                            alt="Foto do Cantão"
                            className="rounded-lg block w-full h-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="text-center bg-white flex justify-center items-center">
                            <Image 
                            src="/imagens/contraFilé.png"
                            width={400}
                            height={300}
                            alt="Foto Comida"
                            className="rounded-lg block w-full h-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="text-center bg-white flex justify-center items-center">
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

                <div id="segundaParte1" className="bg-gray-200 flex justify-center gap-4 pt-4 pb-4">
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
                            <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600">
                                Cardápio
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div id="terceiraParte" className="bg-gray-200 m-auto flex pt-4 pb-4 justify-center items-center">
                    <div id="textoParteTres" className="w-96 font-neue font-bold text-lg pr-4">
                        <p>Reúna-se com os amigos, seja jogo, aniversário ou &quot;sextar&quot; com a galera e uma bebida.</p>
                    </div>
                    
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
                </div>
               
            </div>
        </main>
    )
}

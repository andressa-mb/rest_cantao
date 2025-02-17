"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/inicioMainStyles.css";
import { createPortal } from 'react-dom';
import {getFeedbacks, postFeedbacks } from '../utils/api';
import {Feedback} from '../interfaces/feedback';

const Modal = ({ message, onClose }: { message: string; onClose: () => void }) => {
    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-lg font-semibold">{message}</p>
                <button
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800"
                    onClick={onClose}
                >
                    Fechar
                </button>
            </div>
        </div>,
        document.body
    );
};

export default function InicioMain() {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [comentario, setComentario] = useState("");
    const [imagem, setImagem] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showMessageModal, setShowMessageModal] = useState("");

    useEffect(() => {
        const feedAnterior = async () => {
            try {
                const dataFeed = await getFeedbacks();
                setFeedbacks(dataFeed);
            }catch(err){
                console.error("Erro ao buscar os feedbacks " + err);
            }
        };
        feedAnterior();
    }, []);

    const handleSubmit = async (e:any) => {
         e.preventDefault();
            const formData = new FormData();
            formData.append("nome", nome);
            formData.append("email", email);
            formData.append("comentario", comentario);
            formData.append("img", imagem);

            try{
                await postFeedbacks(formData);                
                setShowModal(true);
                setShowMessageModal("Comentário inserido com sucesso.");
                setNome("");
                setEmail("");
                setComentario("");
                setImagem("");
                const updatedFeedbacks = await getFeedbacks();
                setFeedbacks(updatedFeedbacks);
            } catch (err) {
                console.error("Erro ao enviar feedback no front inicio: ", err);
                setShowModal(true);
                setShowMessageModal("Erro ao enviar comentário.");
            }
    };

    const handleImageChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setImagem(e.target.files[0]);
        }
    }

    const formatarData = (data: string) => {
        const dateObj = new Date(data);
        return dateObj.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

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
                 <form className="flex flex-col items-center space-y-4" onSubmit={handleSubmit} encType="multipart/form-data">
                    <h1 className="font-neue text-lg font-semibold">Feedback</h1>
                        <div className="w-1/2">
                            <label htmlFor="nome" className="block font-neue text-lg font-semibold">Nome</label>
                            <input id="nome" type="text" placeholder="Digite seu nome" className="w-full mt-2 p-2 border border-green-400 rounded-md" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="email" className="block font-neue text-lg font-semibold">E-mail</label>
                            <input id="email" type="email" placeholder="Digite seu e-mail" className="w-full mt-2 p-2 border border-green-400 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="comentario" className="block font-neue text-lg font-semibold">Comentário</label>
                            <input id="comentario" type="text" placeholder="Restaurante acolhedor, comida boa..." className="w-full mt-2 p-2 border border-green-400 rounded-md" value={comentario} onChange={(e) => setComentario(e.target.value)}></input>
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="file" className="block font-neue text-lg font-semibold">Escolha uma foto</label>
                            <input id="file" type="file" accept="image/*" className="w-full mt-2 p-2 border border-green-400 rounded-md" onChange={handleImageChange}></input>
                            <p className="font-neue text-sm text-gray-600 mt-1">Apenas imagens (JPG, PNG, etc.)</p>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <button id="botaoForm" type="submit" className="bg-green-600 font-neue text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600">Postar</button>
                        </div>
                    </form>
                </div>

                <div id="quartaParteResposta" className="pt-4 pb-4 w-full m-auto">
                    <div className="flex flex-col items-center space-y-4">
                        <h1 className="font-neue text-lg font-semibold">Feedbacks</h1>
                        <div className="w-1/2 space-y-4">
                        {feedbacks.map((feedback: any) => (
                            <div 
                            key={feedback.id} 
                            className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                            >
                            {/* Imagem do usuário */}
                            <Image 
                                src={feedback.img}
                                width={200}
                                height={100}
                                alt={feedback.nome}
                                className="w-16 h-16 rounded-full object-cover"
                            />

                            {/* Nome e Comentário */}
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <span className="text-gray-500 text-sm">{formatarData(feedback.criado_em)}</span>
                                </div>
                                <span className="font-semibold text-lg">{feedback.nome}</span>
                                <p className="text-gray-700">{feedback.comentario}</p>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                {/* MODAL */}
                {showModal && <Modal message={showMessageModal} onClose={() => setShowModal(false)} />}
            </div>
        </main>
    )
}

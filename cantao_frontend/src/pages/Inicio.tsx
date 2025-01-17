"use client"
import React from "react";
import Header from "../components/header";
import InicioMain from '../components/inicioMain';
import Footer from "../components/footer";

export default function Inicio(){
    
    return(
        <div>
            <Header></Header>
            <InicioMain></InicioMain>
            <Footer></Footer>
        </div>
    )
}
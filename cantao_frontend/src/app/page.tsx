'use client'
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import InicioMain from '@/components/inicioMain';

export default function Home() {
  return (
    <div>
        <Header></Header>
        <InicioMain></InicioMain>
        <Footer></Footer>
    </div>
  );
}

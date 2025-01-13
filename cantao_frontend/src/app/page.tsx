'use client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from '@/pages/Inicio';

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Inicio />}></Route>
        <Route path="/cardapio"></Route>
        <Route path="/sobre" ></Route>
      </Routes>
    </Router>
  );
}

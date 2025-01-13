import React from 'react';  // Garanta que o React esteja importado
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Importar BrowserRouter

import Inicio from '../src/pages/Inicio';

test("Carregar página de Início", () => {
  render(
    <BrowserRouter>
      <Inicio />
    </BrowserRouter>
  );

  const inicioLink = screen.getByText(/Início/i); // Procurando pelo texto do link "Início"
  expect(inicioLink).toBeInTheDocument(); // Verificando se o link está na tela
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Inicio from '../src/pages/Inicio';

test('Carregar página de Início', () => {
  render(
    <BrowserRouter>
      <Inicio />
    </BrowserRouter>
  );

  const inicioLink = screen.getByText(/Início/i); // Procurando pelo texto
  expect(inicioLink).toBeInTheDocument(); // Validando a existência do texto
});

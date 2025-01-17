import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Inicio from '../src/pages/Inicio';

jest.mock("swiper/react", () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper">{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}));

test('Carregar página de Início', () => {
  render(
    <BrowserRouter>
      <Inicio />
    </BrowserRouter>
  );

  const inicioLink = screen.getAllByText(/Início/i);
  expect(inicioLink.length).toBeGreaterThan(0);
});
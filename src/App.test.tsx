import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

//Añadir test -> Tiene que aparecer el botón añadir tarea
//Añadir test -> Abrir modal el clickar botón

test('Renders To do Panel', () => {
  render(<App />);
  const titleToDo = screen.getByText(/To do/i);
  expect(titleToDo).toBeInTheDocument();
});

test('Renders In progress panel', () => {
  render(<App />);
  const titleToDo = screen.getByText(/In progress/i);
  expect(titleToDo).toBeInTheDocument();
});

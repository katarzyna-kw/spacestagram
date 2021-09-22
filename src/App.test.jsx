import React from 'react'
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders App without crashing', () => {
  render(<App />);
  const app = screen.getByTestId("app-body");
  expect(app).toBeInTheDocument();
});
import React from 'react'
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import LikeButton from '../likebutton';

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

test('renders LikeButton without crashing', () => {
  render(<LikeButton />);
  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
});
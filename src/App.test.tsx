import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render the Carousel component', () => {
    render(<App />);

    const carousel = screen.getByTestId('carousel');
    expect(carousel).toBeInTheDocument();
  })
});

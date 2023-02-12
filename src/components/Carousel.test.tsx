import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './Carousel.component';

describe('Carousel component', () => {
  it('should render a slide', () => {
    render(<Carousel
      carouselImages={[
        { id: '0', author: 'John Wick', width: 100, height: 100, download_url: 'url' },
        { id: '1', author: 'John Wick', width: 100, height: 100, download_url: 'url' },
        { id: '2', author: 'John Wick', width: 100, height: 100, download_url: 'url' }
      ]}
      currentSlide={0}
      handleClickNext={jest.fn()} 
      handleClickPrev={jest.fn()}  
    />);

    const initSlide = screen.getByTestId('slide-0');
    expect(initSlide).toBeInTheDocument();
  });
});

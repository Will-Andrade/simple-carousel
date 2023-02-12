import { CarouselItemType } from "../types";
import './Carousel.styles.css';

interface CarouselProps {
  carouselImages: CarouselItemType[];
  currentSlide: number;
  handleClickNext: () => void;
  handleClickPrev: () => void;
};

export default function CarouselComponent({
  carouselImages,
  currentSlide,
  handleClickNext,
  handleClickPrev
}: CarouselProps) {
  return (<div className='container' data-testid="carousel">
    <h1>React Carousel</h1>
    <div className='carousel-controls'>
      <button 
        type='button' 
        onClick={handleClickPrev} 
        data-testid='prev-btn'
      >
        Prev
      </button>
      <button 
        type='button' 
        onClick={handleClickNext} 
        data-testid='next-btn'
      >
        Next
      </button>
    </div>
    <div className='images-container'>
      {carouselImages.map(({ id, download_url, author, width, height }) =>
        currentSlide === Number(id) && (
          <div key={id} data-testid={`slide-${id}`}>
            <img src={download_url} alt={author} width={width} height={height} />
          </div>
        )
      )}
    </div>
  </div>
  );
};

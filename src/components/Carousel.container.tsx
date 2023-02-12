import { useCallback, useEffect, useState } from "react";
import CarouselComponent from "./Carousel.component";
import { CarouselItemType, ResponseObj } from "../types";

export default function CarouselContainer() {
  const [carouselImages, setCarouselImages] = useState<CarouselItemType[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const getCarouselImages = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?limit=5');

        if (!response.ok) throw new Error('Error fetching data!');

        const treatedData = await response.json();
        const imagesData = treatedData.reduce((acc: CarouselItemType[], image: ResponseObj) => {
          return [
            ...acc, {
              id: image.id,
              author: image.author,
              width: image.width,
              height: image.height,
              download_url: image.download_url
            }
          ]
        }, []);

        setCarouselImages(imagesData);
        
      } catch(err) {}
    }
    
    getCarouselImages();
  }, []);
  
  const onHandleClickNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => prevSlide === carouselImages.length - 1? 0 : prevSlide + 1);
  }, [carouselImages.length]);

  const onHandleClickPrevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => prevSlide === 0 ? carouselImages.length - 1 : prevSlide - 1);
  }, [carouselImages.length]);

  return <CarouselComponent 
    carouselImages={carouselImages}
    currentSlide={currentSlide}
    handleClickNext={onHandleClickNextSlide} 
    handleClickPrev={onHandleClickPrevSlide} 
  />
};

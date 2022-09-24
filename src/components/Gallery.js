import React from 'react';
import { Icon, Image } from 'atomize';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Gallery = () => {
  const images = [
    { src: `/images/supplies-min.jpg?webp`, alt: 'Samsun Duru Temizlik, temizlik ürünleri' },
    { src: `/images/gloves-min.jpg?webp`, alt: 'Samsun temizlik şirketi elemanı' },
    { src: `/images/bucket-min.jpg?webp`, alt: 'Temizlik ürünleri dolu vileda sepeti' },
    { src: `/images/spray-min.jpg?webp`, alt: 'Samsun temizlik şirketi elemanı' },
    { src: `/images/vacuum-min.jpg?webp`, alt: 'Samsun ev temizliği süpürme' },
    { src: `/images/sink-min.jpg?webp`, alt: 'Samsun ev lavabo temizliği' },
    { src: `/images/cleaning-min.jpg?webp`, alt: 'Samsun ev banyo temizliği' }
  ]

  return (
    <Carousel
      autoPlay
      interval="3000"
      infiniteLoop
      emulateTouch
      showThumbs={false}
      renderArrowPrev={(onClickHandler, hasPrev) =>
      hasPrev && (
        <button
          type="button"
          onClick={onClickHandler}
          title="Önceki resim"
          className="carousel-button glass left"
        >
          <Icon name="LeftArrow" size={{sm: "10vw", md: "7.5vw", xl: "3.5vw"}} color="primaryGreen" />
        </button>
      )
      }
      renderArrowNext={(onClickHandler, hasNext) =>
      hasNext && (
        <button
          type="button"
          onClick={onClickHandler}
          title="Sonraki resim"
          className="carousel-button right glass"
        >
          <Icon name="RightArrow" size={{sm: "10vw", md: "7.5vw", xl: "3.5vw"}} color="primaryGreen" />
        </button>
      )
      }
    >
      {images.map((img, idx) => {
        return (
          <Image 
            key={idx}
            src={img.src}
            className="carousel-img"
            alt={img.alt}
          />
        );
      })}
    </Carousel>
  );
}

export default Gallery;
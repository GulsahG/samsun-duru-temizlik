import React from 'react';
import Magnifier from 'react-magnifier';
import { Icon, Image } from 'atomize';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Gallery = () => {
  const images = [
    {src: require(`../images/supplies.jpg?webp`), alt: 'Samsun Duru Temizlik, temizlik ürünleri'},
    {src: require(`../images/gloves.jpg?webp`), alt: 'Samsun temizlik şirketi elemanı'},
    {src: require(`../images/bucket.jpg?webp`), alt: 'Temizlik ürünleri dolu vileda sepeti'},
    {src: require(`../images/spray.jpg?webp`), alt: 'Samsun temizlik şirketi elemanı'},
    {src: require(`../images/vacuum.jpg?webp`), alt: 'Samsun ev temizliği süpürme'},
    {src: require(`../images/sink.jpg?webp`), alt: 'Samsun ev lavabo temizliği'},
    {src: require(`../images/cleaning.jpg?webp`), alt: 'Samsun ev banyo temizliği'}
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
          className="carousel-button glass"
        >
          <Icon name="LeftArrow" size="3.5vw" color="primaryGreen" />
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
          <Icon name="RightArrow" size="3.5vw" color="primaryGreen" />
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
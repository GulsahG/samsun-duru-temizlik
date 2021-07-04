import React from 'react';
import Magnifier from 'react-magnifier';
import { Icon, Image } from 'atomize';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Gallery = () => {
  const images = [
    require(`../images/supplies.jpg?webp`),
    require(`../images/gloves.jpg?webp`),
    require(`../images/bucket.jpg?webp`),
    require(`../images/spray.jpg?webp`),
    require(`../images/vacuum.jpg?webp`),
    require(`../images/sink.jpg?webp`),
    require(`../images/cleaning.jpg?webp`),
  ]

  return (
    <Carousel
      autoPlay
      interval="3000"
      infiniteLoop
      emulateTouch
      showThumbs="false"
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
            src={img}
            className="carousel-img"
          />
        );
      })}
    </Carousel>
  );
}

export default Gallery;
import React from 'react';
import Magnifier from 'react-magnifier';
import { Text, Div, Image, Icon } from 'atomize';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Homepage = () => {
  const images = [
    require(`../src/images/bucket.jpg?webp`),
    require(`../src/images/bucket.jpg?webp`),
    require(`../src/images/bucket.jpg?webp`)
  ]
  return (
    <>
      <Text 
        tag="h1" 
        w="75vw"
        m="3vh auto"
        fontFamily="secondary" 
        textSize="h2" 
        textColor="primaryBlue"
        textAlign="center"
      >
        Samsun Duru Temizlik
      </Text>
      <Carousel
        autoPlay
        interval="3000"
        infiniteLoop
        emulateTouch
        stopOnHover
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="carousel-button glass"
            >
              <Icon name="LeftArrow" size="3.5vw" color="primaryGreen" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
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
    </>
  );  
}

export default Homepage;
import React from 'react';
import { Text, Div, Image, Icon } from 'atomize';
import Gallery from '../src/components/Gallery';

const Homepage = () => {
  return (
    <>
      <Text 
        tag="h1" 
        w="90vw"
        m="1.5vh auto 3vh auto"
        fontFamily="secondary" 
        textSize="h2" 
        textColor="primaryBlue"
        textAlign="center"
      >
        Samsun Duru Temizlik
      </Text>
      <Gallery />
    </>
  );  
}

export default Homepage;
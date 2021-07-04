import React from 'react';
import { Text, Div, Image, Icon } from 'atomize';
import Gallery from '../src/components/Gallery';

const Homepage = () => {
  return (
    <>
      <Text 
        tag="h1" 
        w="92.5vw"
        m="1.5vh auto 5vh auto"
        fontFamily="secondary" 
        textSize="h2" 
        textColor="primaryBlue"
        textAlign="center"
        className="typing"
      >
        samsun duru temizlik
      </Text>
      <Gallery />
    </>
  );  
}

export default Homepage;
import React, { useState, useEffect } from 'react';
import { Text, Div, Image, Icon } from 'atomize';
import Gallery from '../src/components/Gallery';
import AboutUs from './AboutUs';

const Homepage = () => {
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    if(window.sessionStorage.getItem("firstLoadDone") === null) {
      setAnimation(true);

      window.sessionStorage.setItem("firstLoadDone", 1)
    }
    else {
      setAnimation(false);
    }

    return () => {
      setAnimation(true);
      window.sessionStorage.setItem("firstLoadDone", null);
    }
  });

  return (
    <>
      <Text 
        tag="h1" 
        w="92.5vw"
        m="1.5vh auto 5vh auto"
        fontFamily="secondary" 
        textSize="h1" 
        textColor="primaryBlue"
        textAlign="center"
        className={animation ? "typing" : ""}
      >
        samsun duru temizlik
      </Text>
      <Gallery />
      <AboutUs />
    </>
  );  
}

export default Homepage;
import React, { useState, useEffect } from 'react';
import { Text, Div, Image, Icon } from 'atomize';
import Gallery from '../src/components/Gallery';
import AboutUs from './AboutUs';
import Phone from '../src/components/Phone';
import Contacts from './Contacts';
import Services from './Services';
import References from './References';
import Footer from '../src/components/Footer';

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
  });

  return (
    <Div
      p={{xs: "15vh 0 0 0", md: "20vh 0 0 0"}}
      id="gallery"
    >
      <Text 
        tag="h1" 
        w="92.5vw"
        m="1.5vh auto 5vh auto"
        fontFamily="secondary" 
        textSize={{xs: "h2", md: "h1"}}
        textColor="primaryBlue"
        textAlign="center"
        className={animation ? "typing" : "main-title"}
      >
        samsun duru temizlik
      </Text>
      <Gallery />
      <AboutUs />
      <Phone />
      <Services />
      <Contacts />
      <References />
      <Footer />
    </Div>
  );  
}

export default Homepage;
import React from 'react';
import { Div, Text } from 'atomize';
import Homepage from './Homepage';

const AboutUs = () => {
  return (
    <Div>
      <Div
        m="10vh auto"
        d="flex"
        flexDir="column"
        w="92.5vw"
        className="quote"
        p="5vh 0"
        align="center"
      >
        <Text 
          tag="h2"
          textSize="h2"
          textAlign="center"
          w="35%"
        >
          Temizlikten yana endişeniz olmasın.
        </Text>
        <Text
          w="75%"
          tag="p"
          textSize="body"
          m="5vh auto"
          textAlign="center"
        >
          <b>Müzeyyen & Davut Genç</b> , 2013'ten beri sizlerle...
        </Text>
      </Div>
    </Div>
  );
};

export default AboutUs;
import React from 'react';
import { Div, Image, Text } from 'atomize';

const Phone = () => {
  return (
    <Div
      d="flex"
      w="100%"
      m="5vh auto"
      align="center"
      justify="center"
      bg="accentBlue"
    >
      <Text 
        w="40%"
        tag="h2"
        textSize="h2"
        textAlign="center"
        p="0 2.5%"
      >
        Fiyat teklifi ve randevu almak için bize ulaşın!
      </Text>
      <Image src={require(`../images/phone-3d.png?webp`)} w="40%" h="auto" />
    </Div>
  );
}

export default Phone;
import React from 'react';
import { Div, Image, Text } from 'atomize';

const Phone = () => {
  return (
    <Div
      d="flex"
      w="100%"
      m="7.5vh auto 0 auto"
      align="center"
      justify="center"
      bg="accentBlue"
    >
      <Text 
        w={{md: "60%", xl: "20%"}}
        tag="h2"
        textSize="h2"
        textAlign="center"
        p={{md: "2.5% 5%", lg: "2.5% 15%"}}
        className="phone-text"
        style={{backgroundImage: `url(${"./blob2.svg"})`}}
      >
        Fiyat teklifi ve randevu almak için bize ulaşın!
      </Text>
      <Image src={require(`../images/phone-3d.png?webp`)} w="40%" h="auto" />
    </Div>
  );
}

export default Phone;
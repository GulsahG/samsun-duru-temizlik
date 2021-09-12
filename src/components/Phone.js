import React from 'react';
import { Div, Image, Text } from 'atomize';

const Phone = () => {
  return (
    <Div
      d="flex"
      w="100%"
      m={{xs: "5vh auto 0 auto", md: "7.5vh auto 0 auto"}}
      align="center"
      justify="center"
      bg="accentBlue"
      flexDir={{xs: "column-reverse", md: "row"}}
    >
      <Text 
        w={{xs: "70%", md: "60%", xl: "20%"}}
        tag="h2"
        textSize={{xs: "32px", md: "h2"}}
        textAlign="center"
        p={{xs: "5% 5% 10% 5% ", md: "2.5% 5%", lg: "2.5% 15%"}}
        className="phone-text"
        style={{backgroundImage: `url(${"./blob2.svg"})`}}
      >
        Fiyat teklifi ve randevu almak için bize ulaşın!
      </Text>
      <Image src={require(`../images/phone-3d.png?webp`)} w={{xs: "85%", md: "40%"}} h="auto" alt="Samsun Duru Temizlik şirketi telefon numarası" />
    </Div>
  );
}

export default Phone;
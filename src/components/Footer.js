import { Div, Image, Text } from 'atomize';
import React from 'react';

const Footer = () => {
  return (
    <footer>
    <Div
      d="flex"
      w="auto"
      h="35vh"
      m="5vh 0 0 0"
      bg="primaryGreen"
      align="center"
      justify="center"
      className="footer"
    >
      <Div
        d="flex"
        flexGrow="1"
        flexDir="column"
        align="center"
        justify="center"
        bg="white"
        h="35vh"
      >
      <Image 
        w="auto" 
        h="10vh" 
        p="1.25vh 1vw"
        src={require('../images/logo2.svg')} 
        alt="Samsun Duru Temizlik logo"
      />
      </Div>
      <Div
        d="flex"
        flexGrow="2"
        flexDir="column"
        align="center"
        justify="space-between"
        h="35vh"
        p="2rem"
      >
        <Text
          tag="h3"
          textSize="h3"
          textColor="white"
          textWeight="bold"
        >
          Hizmetlerimiz
        </Text>
        <Text
          tag="p"
          textSize="body"
          textColor="white"
          style={{ lineHeight: "2" }}
          textAlign="center"
        >
          Ev-Ofis temizliği <br />
          İnşaat sonrasi temizliği <br />
          Kafe/Restoran temizliği <br /> 
          Otel/Yurt temizliği <br />
        </Text>
      </Div>
      <Div
        d="flex"
        flexGrow="2"
        flexDir="column"
        align="center"
        justify="space-between"
        h="35vh"
        p="2rem"
      >
        <Text
          tag="h3"
          textSize="h3"
          textColor="white"
          textWeight="bold"
        >
          İletişim
        </Text>
        <Text
          tag="p"
          textSize="body"
          textColor="white"
          style={{ lineHeight: "2.5" }}
          textAlign="center"
        >
          <b>Telefon:</b> +90 0532 300 71 52 <br />
          <b>Adres:</b> Uludağ, Eski Konak Sk. No:5, 55080 Canik/Samsun
        </Text>
      </Div>
      <Div
        d="flex"
        flexGrow="3"
        flexDir="column"
        align="center"
        justify="space-between"
        h="35vh"
        p="2rem"
      >
        <Text
          tag="h3"
          textSize="h3"
          textColor="white"
          textWeight="bold"
        >
          Çalışma Koşulları
        </Text>
        <Text
          tag="p"
          textSize="body"
          textColor="white"
          style={{ lineHeight: "2.5" }}
          textAlign="center"
        >
          Şirketimiz haftanın her günü <b>8:30 ile 19:30</b> saatleri arasında,  
          <b> Atakum, İlkadım, Çarşamba, Canik, Terme, Bafra</b> başta olmak üzere birçok 
          ilçede hizmet vermektedir.
        </Text>
      </Div>
    </Div>
    </footer>
  );
}

export default Footer;
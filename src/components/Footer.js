import { Anchor, Div, Image, Text } from 'atomize';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Div
        d="flex"
        justify="space-between"
        align="center"
        p="1rem 2.5rem 1rem 1rem"
      >
        <Text
          tag="p"
          textSize="body"
          textColor="alpha"
          m="6rem 0 0 0"
        >
          Tüm hakları saklıdır © 2021 \ Samsun Duru Temizlik <br />
        </Text>
        <Div
          d="flex"
          align="center"
          flexDir="column"
        >
          <Image 
            w="2.5rem" 
            h="2.5rem" 
            m={{sm: "2.5rem 0 0 2.5rem", xl: "2.5rem 0 0 1rem"}}
            src={require('../images/clown-logo.svg')} 
            alt="Designer logo"
            className="clown-logo"
          />
          <Text
            tag="p"
            textSize="body"
            textColor="alpha"
            p={{sm: "1rem 0 0 2rem", xl: "1rem 1rem 0 1rem"}}
          >
            Design by <Anchor textColor="alpha" hoverTextColor="primaryGreen" target="_blank" href="https://portfolio-page-gulsahg.vercel.app/" style={{transition: "color 0.3s"}}>Gülşah Genç</Anchor>
          </Text>
        </Div>
      </Div>
    <Div
      d="flex"
      w="auto"
      h="auto"
      bg="primaryGreen"
      align="center"
      justify="center"
      className="footer"
      flexDir={{xs: "column", xl: "row"}}
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
        w={{xs: "100vw", xl:"auto"}}
        h="10vh" 
        p="1.25vh 1vw"
        src={require('../images/logo2.svg')} 
        alt="Samsun Duru Temizlik logo"
        style={{objectFit: "contain"}}
      />
      </Div>
      <Div
        d="flex"
        flexGrow="2"
        flexDir="column"
        align="center"
        justify="space-between"
        h="35vh"
        p={{xs: "0.5rem", md: "1rem", xl: "2rem"}}
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
          style={{ lineHeight: "2.5" }}
          textAlign="center"
        >
          Ev-Ofis temizliği <br />
          İnşaat sonrasi temizliği <br />
          Kafe / Restoran temizliği <br /> 
          Otel / Yurt temizliği <br />
        </Text>
      </Div>
      <Div
        d="flex"
        flexGrow="2"
        flexDir="column"
        align="center"
        justify="space-between"
        p={{xs: "0.5rem", md: "1rem", xl: "2rem"}}
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
          style={{ lineHeight: "3" }}
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
        justify="space-between"
        h="35vh"
        p={{xs: "0.5rem", md: "1rem", xl: "2rem"}}
      >
        <Text
          tag="h3"
          textSize="h3"
          textColor="white"
          textWeight="bold"
          textAlign="center"
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
          <br />
        </Text>
      </Div>
    </Div>
    </footer>
  );
}

export default Footer;
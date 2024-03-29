import { Div, Text } from 'atomize';
import React from 'react';
import Email from '../src/components/Email';

const Contacts = () => {
  return (
    <Div
      w="90vw"
      m={{xs: "5vh auto 0 auto", md: "22.5vh auto 0 auto", lg: "5vh auto 0 auto", xl: "12.5vh auto"}}
      p="5vh 0"
      d="flex"
      flexDir="column"
      align="center"
      justify="center"
      className="contacts"
    >
      <Text
        tag="h2"
        textSize={{xs: "32px", md: "h2"}}
        textColor="primaryBlue"
      >
        Bize Ulaşın
      </Text>
      <Div
        d="flex"
        align="center"
        justify="center"
        m="5vh 0 0 0"
        flexDir="column"
      >
        <Text
         tag="body"
         textSize={{xs: "21px", md: "17px"}}
         m="2vh 0"
         textColor="alpha"
         hoverTextColor="primaryBlue"
         width="auto"
         textAlign="center"
        >
          <a
            href="javascript:void(
              window.open(
                'https://form.jotform.com/222816092045048',
                'blank',
                'scrollbars=yes,
                toolbar=no,
                width=700,
                height=500'
              )
            )
          ">
            Samsun Duru Temizlik İletişim Formu
          </a>
        </Text>
        <Div
          d="flex"
          flexDir="column"
          w={{xs: "85vw", md: "75vw", xl: "70vw"}}
          // m={{xs: "7.5vh 0 2.5vh 0", md: "0 1.25vw 4.5vw 1.25vw"}}
        >
          {/* <Text
            tag="h3"
            textSize="h3"
            fontFamily="secondary"
            textColor="primaryBlue"
            textWeight="bold"
            textAlign="center"
          >
            iletisim bilgilerimiz
          </Text> */}
          {/* <Text
            tag="p"
            textSize={{xs: "smallB", md: "body"}}
            p={{xs: "1.5rem 1.25rem", md: "1.5rem 2.5rem"}}
            textAlign="left"
            textWeight="bold"
            textColor="alpha"
          >
            Duru Temizlik
          </Text> */}
          <Text
            tag="p"
            p={{xs: "0.25rem 1.25rem", md: "0.25rem 2.5rem"}}
            textSize={{xs: "smallB", md: "body"}}
            textAlign="center"
            style={{lineHeight: "2.5"}}
          >
            <b>Telefon Numarası:</b> +90 0532 300 71 52 <br />
            <b>E-posta:</b> ahmetgenc55@hotmail.com <br />
            <b>Adres:</b> Uludağ, Eski Konak Sk. No:5, 55080 Canik/Samsun
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default Contacts;

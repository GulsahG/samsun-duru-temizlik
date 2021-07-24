import { Div, Text } from 'atomize';
import React from 'react';
import Email from '../src/components/Email';

const Contacts = () => {
  return (
    <Div
      w="90vw"
      m="0 auto"
      p="5vh 0"
      d="flex"
      flexDir="column"
      align="center"
      justify="center"
      className="contacts"
    >
      <Text
        tag="h2"
        textSize="h2"
        textColor="primaryBlue"
      >
        Bize Ulaşın
      </Text>
      <Div
        d="flex"
        align="center"
        justify="center"
        m="5vh 0 0 0"
      >
        <Email />
        <Div
          d="flex"
          flexDir="column"
          w="40vw"
          m="0 2.5vw 4.5vw 2.5vw"
        >
          <Text
            tag="h3"
            textSize="h3"
            fontFamily="secondary"
            textColor="primaryBlue"
            textWeight="bold"
            textAlign="center"
          >
            iletisim bilgilerimiz
          </Text>
          <Text
            tag="p"
            textSize="body"
            p="1.5rem 2.5rem"
            textAlign="left"
            textWeight="bold"
            textColor="alpha"
          >
            Duru Temizlik
          </Text>
          <Text
            tag="p"
            p="0.25rem 2.5rem"
            textSize="body"
            textAlign="left"
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
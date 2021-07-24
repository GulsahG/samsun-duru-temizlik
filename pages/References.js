import { Anchor, Div, Text, Icon } from 'atomize';
import React from 'react';

const References = () => {
  const referenceList = [
    {name: "Legend Hotel Ayvacık", location: "https://goo.gl/maps/odYf2vqaMq6Kh6pH8", addr:"Orhangazi, Yolu 17th Km., 55200, Ayvacık/Samsun"},
    {name: "Starbucks Coffee", location: "https://goo.gl/maps/rBkMmEefhRN1dsy87", addr:"Cumhuriyet, Adnan Menderes Blv. No:367, 55200 Atakum/Samsun"},
    {name: "Beyaz Ev", location: "https://goo.gl/maps/uogwkfd25KW84Jvx5", addr:"Cumhuriyet, Alparslan Blv. No:24, 55000 Atakum/Samsun"},
    {name: "1453 Insaat", location: "https://goo.gl/maps/DQf3fGbQoqGSEBMw7", addr:"Yenimahalle, 3130. Sk. NO:43, 55270 Atakum/Samsun"},
    {name: "Baran Plaza", location: "https://goo.gl/maps/RHsToZ6ZEXZbnNCg7", addr:"Bahçelievler, İstiklal Cd. No: 242/6, 55070 İlkadım/Samsun"},
  ]
  return (
    <Div
      w="90vw"
      m="0 auto"
      p="5vh 0"
      d="flex"
      flexDir="column"
      align="center"
      justify="center"
      className="references"
    >
      <Text
        tag="h2"
        textSize="h2"
        textColor="primaryGreen"
      >
        En Büyük Destekçilerimiz
      </Text>
      <Div
        m="2.5vh auto"
        d="flex"
        flexWrap="wrap"
        align="center"
        justify="center"
      >
        {referenceList.map((ref, idx) => {
          return <Div 
            className="reference"
            w="40vw"
            h="25vh"
            m="5vh auto"
            p="2.5%"
            d="flex"
            key={idx}
            align="center"
            justify="space-between"
            style={{backgroundImage: `url(${"./gradient-bg.jpg"})`}}
          >
            <Div>
              <Text
                tag="h3"
                textSize="h3"
                textColor="alpha"
                m="1.5% 0"
                fontFamily="secondary"
              >
                {ref.name.toLowerCase()}
              </Text>
              <Text
                tag="p"
                textSize="body"
                textColor="alpha"
                m="1.5% 0"
              >
                <span style={{ color: "#1c68ce", fontWeight: "bolder" }}>Adres:</span> {ref.addr}
              </Text>
            </Div>
            <Anchor
              href={ref.location}
              target="_blank"
            >
              <Icon name="LocationSolid" size="30px" color="primaryBlue" />
            </Anchor>
          </Div>
          })
        }
      </Div>
    </Div>
  )
};

export default References;
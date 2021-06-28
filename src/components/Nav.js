import React, { useState } from 'react';
import Link from 'next/link';
import { Image, Div, Anchor, Text } from 'atomize';
import { Icon } from "atomize";
import { Breakpoint } from 'react-socks';

const Nav = () => {
  const nav= ['Anasayfa', 'Hakkımızda', 'Hizmetlerimiz', 'Referanslar', 'İletişim']
  return (
    <nav>
      <Div 
        d="flex"
        w="100vw"
        h="19vh"
        m="2.5vh 0"
        justify="space-around"
        align="center"
      >
        <Image 
          w="12.5vw" 
          h="15vh" 
          p="2vh" 
          src={require('../images/logo.svg')} 
        />
        <Div 
          d="flex" 
          align="center"
        >
          <Icon 
            name="Checked" 
            size="20px" 
            color="primaryGreen"
          />
          <Text 
            p="0 0.75rem" 
            tag="body" 
            textSize="body" 
            textColor="alpha"
          >
            7/24 Hizmete Açığız
          </Text>
        </Div>
        <Div 
          d="flex"
          w="auto"
          h="10vh"
          p="1rem"
          alignSelf="flex-end"
          align="center"
          className="glass"
        >
          {nav.map(item => {
            return (
              <Text 
                className="nav-hover" 
                m="0 0.5rem" 
                textSize="h3"
                p={{lg: "0.25rem 0.5rem", xl: "0.25rem 1rem" }}
              >
                <Anchor     
                  textColor="alpha"
                  hoverTextColor="primaryBlue" 
                  href={`#${item.toLowerCase()}`}
                > 
                  {item}
                </Anchor>
              </Text>
            );
          })}
        </Div>
      </Div>
    </nav>
  );
};

export default Nav;
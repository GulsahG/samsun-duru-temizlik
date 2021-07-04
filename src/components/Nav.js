import React, { useState } from 'react';
import Link from 'next/link';
import { Image, Div, Anchor, Text } from 'atomize';
import { Icon } from "atomize";
import { Breakpoint } from 'react-socks';

const Nav = () => {
  const navItems= [
    {name: 'Anasayfa', location: '/Homepage'}, 
    {name: 'Hakkımızda', location: '/AboutUs'}, 
    {name: 'Hizmetlerimiz', location: '/Services'}, 
    {name: 'Referanslar', location: '/References'}, 
    {name: 'İletişim', location: '/Contacts'}
  ]

  return (
    <nav>
      <Div 
        d="flex"
        w="100vw"
        h="19vh"
        m="2.5vh 0"
        justify="space-evenly"
        align="center"
      >
        <Image 
          w="12.5vw" 
          h="15vh" 
          p="2vh 0" 
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
            p="0 0 0 0.75rem" 
            tag="p" 
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
          align="center"
        >
          {navItems.map((item,idx) => {
            return (
              <Link
                key={idx}
                href={item.location}
                as="/"
              > 
                <Text 
                  className="nav-hover" 
                  m="0 0.5rem" 
                  textSize="h3"
                  textColor="alpha"
                  hoverTextColor="primaryBlue" 
                  p={{lg: "0.25rem 0.5rem", xl: "0.25rem 0.75rem" }}
                >
                  {item.name}
                </Text>
              </Link>
            );
          })}
        </Div>
      </Div>
    </nav>
  );
};

export default Nav;
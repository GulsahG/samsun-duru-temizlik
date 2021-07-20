import React, { useState } from 'react';
import Link from 'next/link';
import { Image, Div, Anchor, Text, Icon } from 'atomize';
import { Breakpoint } from 'react-socks';
import MobileNav from './MobileNav';

const Nav = () => {
  const navItems= [
    {name: 'Anasayfa', location: '/Homepage'}, 
    {name: 'Hakkımızda', location: '/AboutUs'}, 
    {name: 'Hizmetlerimiz', location: '/Services'}, 
    {name: 'Referanslar', location: '/References'}, 
    {name: 'İletişim', location: '/Contacts'}
  ]

  return (
    <nav style={{ position: "fixed", zIndex: "100" }}>
      <Breakpoint large up>
        <Div 
          d="flex"
          w="100vw"
          h="17.5vh"
          align="center"
          bg="white"
        >
          <Image 
            w="auto" 
            h="15vh" 
            p="1.25vh 1vw"
            src={require('../images/logo.svg')} 
            alt="Samsun Duru Temizlik logo"
          />
          <Div 
            d="flex"
            w="100vw"
            h="17.5vh"
            m="2.5vh 0"
            justify="space-evenly"
            align="center"
          >
            <Div 
              d="flex" 
              align="center"
            >
              <Icon 
                name="Message" 
                size="20px" 
                color="primaryGreen"
              />
              <Text 
                p="0 0 0 0.75rem" 
                tag="p" 
                textSize="body" 
                textColor="alpha"
              >
                7/24 Hizmete Açığız <br /> +90 0532 300 71 52
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
        </Div>
      </Breakpoint>
      <Breakpoint medium down>
        <MobileNav navItems={navItems} />
      </Breakpoint>
    </nav>
  );
};

export default Nav;
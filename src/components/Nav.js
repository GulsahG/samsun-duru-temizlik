import React, { useState } from 'react';
import { Image, Div, Anchor, Text, Icon, Button, scrollTo } from 'atomize';
import { Breakpoint } from 'react-socks';
import MobileNav from './MobileNav';

const Nav = () => {
  const navItems= [
    {name: 'Anasayfa', location: '#gallery'}, 
    {name: 'Hakkımızda', location: '#about-us'}, 
    {name: 'Hizmetlerimiz', location: '#services'}, 
    {name: 'Referanslar', location: '.references'}, 
    {name: 'İletişim', location: '.contacts'}
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
            h={{md: "7.5vh", xl: "15vh" }}
            p="1.25vh 1vw"
            src={require('../images/logo.svg')} 
            alt="Samsun Duru Temizlik logo"
          />
          <Div 
            d="flex"
            w={{lg: "85vw", xl: "100vw"}}
            h="17.5vh"
            m="2.5vh 0"
            justify="space-evenly"
            align="center"
          >
            <Div 
              d="flex" 
              align="center"
              w="15vw"
              className="nav-text"
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
                className="phone-number"
              >
                7/24 Hizmete Açığız <br /><Anchor href="tel:+9005323007152" textColor="primaryBlue">+90 0532 300 71 52</Anchor>
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
                  <Button
                    key={idx}
                    onClick={() => scrollTo(item.location, 100, 0, 800)}
                    bg="white"
                  > 
                    <Text 
                      className="nav-hover" 
                      m="0 0.5rem"
                      textSize="h3"
                      textColor="alpha"
                      hoverTextColor="primaryBlue" 
                      p={{lg: "0.25rem 0", xl: "0.25rem 0.75rem" }}
                    >
                      {item.name}
                    </Text>
                  </Button>
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
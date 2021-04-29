import React, { useState } from 'react';
import Link from 'next/link';
import { Image, Div, Anchor } from 'atomize';
import { Breakpoint } from 'react-socks';

const Nav = () => {
  return (
    <nav>
      <Div 
        d="flex"
        w="100%"
      >
        <Image 
          w="auto" 
          h="15vh" 
          p="1rem" 
          src={require('../images/logo.svg')} 
        />
        <Div 
          d="flex"
          w="80%" 
          align="center"
        >
          
        </Div>
      </Div>
    </nav>
  );
};

export default Nav;
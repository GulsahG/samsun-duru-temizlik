import React, { useState } from 'react';
import { Div, Button, SideDrawer, Icon, Text, Image, Anchor } from "atomize";
import Link from 'next/link';

const Drawer = ({ isOpen, onClose, navItems }) => {
  return (
    <SideDrawer 
      isOpen={isOpen} 
      onClose={onClose} 
      w={{ xs: "100vw", sm: "16rem" }}
    >
      <Div d="flex" justify="flex-end">
        <Button onClick={onClose} bg="white">
          <Icon name="Close" size="40px" color="primaryBlue" />
        </Button>
      </Div>
      <Div 
        d="flex" 
        flexDir="column" 
        m={{ b: "4rem" }}
        p="2rem"
        justify="space-evenly"
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
                p="6vh 0"
              >
                {item.name}
              </Text>
            </Link>
          );
        })}
      </Div>
    </SideDrawer>
  );
};

const MobileNav = ({ navItems }) => {
  const [showSideDrawer, setSideDrawer] = useState(false);
  return (
    <Div d="flex" align="center" w="100vw" justify="space-between">
      <Image 
        w={{xs:"30vw", md:"20vw"}} 
        h="auto" 
        p="1.25vh 1vw"
        src={require('../images/logo.svg')} 
        alt="Samsun Duru Temizlik logo"
      />
      <Text 
        p="0 0 0 0.75rem" 
        tag="p" 
        textSize="h3" 
        textColor="alpha"
        className="phone-number"
      >
        <Icon 
          name="Message" 
          size="30px" 
          color="primaryGreen"
        />
        <Anchor href="tel:+9005323007152" textColor="primaryBlue">+90 0532 300 71 52</Anchor>
      </Text>
      <Button
        m={{ r: "0.5rem" }}
        onClick={() => setSideDrawer(true)}
        bg="white"
      >
        <Icon name="Menu" size="40px" color="primaryBlue" />
      </Button>
      <Drawer
        isOpen={showSideDrawer}
        navItems={navItems}
        onClose={() => setSideDrawer(false)}
      />
    </Div>
  );
}

export default MobileNav;
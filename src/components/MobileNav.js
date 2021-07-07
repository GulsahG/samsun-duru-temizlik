import React, { useState } from 'react';
import { Div, Button, SideDrawer, Icon, Text, Image } from "atomize";
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
    <Div d="flex" align="center">
      <Image 
        w={{xs:"30vw", md:"20vw"}} 
        h="15vh" 
        p="1.25vh 1vw"
        src={require('../images/logo.svg')} 
        alt="Samsun Duru Temizlik logo"
      />
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
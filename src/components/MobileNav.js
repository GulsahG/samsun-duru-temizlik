import React, { useState } from 'react';
import { Div, Button, SideDrawer, Icon, Text, Image, Anchor, scrollTo } from "atomize";

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
        h="90vh"
        p="2rem"
        justify="space-evenly"
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
                p="6vh 0"
              >
                {item.name}
              </Text>
            </Button>
          );
        })}
      </Div>
    </SideDrawer>
  );
};

const MobileNav = ({ navItems }) => {
  const [showSideDrawer, setSideDrawer] = useState(false);
  return (
    <Div 
      d="flex" 
      align="center" 
      w="100vw" 
      justify="space-between" 
      bg="white"
    >
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
        textSize={{xs: "body", md: "h3"}}
        textColor="alpha"
        className="phone-number"
      >
        <Anchor textWeight="bold" href="tel:+9005323007152" textColor="primaryBlue">Hemen Ara! 🤙</Anchor>
      </Text>
      <Button
        m={{ r: "0.5rem" }}
        onClick={() => setSideDrawer(true)}
        bg="white"
      >
        <Icon name="Menu" size={{xs: "30px", md: "40px"}} color="primaryBlue" />
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
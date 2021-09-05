import { Div, Input, Icon, Button, Textarea, Notification } from 'atomize';
import React, { useState } from 'react';

const Email = () => {
  const [showNotif, setShowNotif] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};

    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    })

    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    
    setShowNotif(true);
  }

  return (
    <Div
      m={{md: "5vh 0 5vh 5vw", xl: "5vh 2.5vw"}}
      w={{xs: "80vw", md: "50vw", xl: "40vw"}}
    >
      <form method="post" onSubmit={handleOnSubmit}>
        <Div 
          d="flex" 
          align="center" 
          justify="space-between"
        >
          <label htmlFor="name">İsim</label>
          <Input 
            type="text" 
            name="name" 
            m="1rem 0"
            textAlign="left"
            w={{xs: "50vw", md: "30vw", xl: "25vw"}}
          />
        </Div>
        <Div 
          d="flex" 
          align="center" 
          justify="space-between"
        >
          <label htmlFor="email">E-posta</label>
          <Input
            type="email"
            name="email"
            placeholder="E-posta"
            m="1rem 0"
            w={{xs: "50vw", md: "30vw", xl: "25vw"}}
            p={{ x: "2.5rem" }}
            textAlign="left"
            prefix={
              <Icon
                name="UserSolid"
                color="accentBlue"
                size="16px"
                cursor="pointer"
                pos="absolute"
                top="50%"
                left="0.75rem"
                transform="translateY(-50%)"
              />
            }
            />
        </Div>
        <Div 
          d="flex" 
          align="center" 
          justify="space-between"
        >
          <label htmlFor="phone">Telefon</label>
          <Input
            type="tel"
            name="phone"
            placeholder="+90 05xx xxx xx xx"
            m="1rem 0"
            w={{xs: "50vw", md: "30vw", xl: "25vw"}}
            p={{ x: "2.5rem" }}
            textAlign="left"
            prefix={
              <Icon
                name="EditSolid"
                color="accentBlue"
                size="16px"
                cursor="pointer"
                pos="absolute"
                top="50%"
                left="0.75rem"
                transform="translateY(-50%)"
              />
            }
            />
        </Div>
        <Div 
          d="flex" 
          align="center" 
          justify="space-between"
        >
          <label htmlFor="message">İleti</label>
          <Textarea 
            m="1rem 0"
            name="message" 
            textAlign="left"
            w={{xs: "50vw", md: "30vw", xl: "25vw"}}
            className="text-area"
            placeholder="Randevu almak için talebinizi buraya yazın..." 
          />
        </Div>
        <Button
          suffix={
          <Icon
            name="LongRight"
            size="16px"
            color="alpha"
            hoverColor="white"
            m={{ l: "1rem" }}
          />
          }
          shadow="3"
          hoverShadow="4"
          type="submit"
          m={{xs: "1vw 0 1vw 48.5vw", md: "1vw 0 1vw 36.5vw", lg: "1vw 0 1vw 39.5vw", xl: "1vw 0 1vw 33.5vw"}}
          bg="accentBlue"
          hoverBg="primaryBlue"
          textColor="alpha"
          hoverTextColor="white"
        >
          Gönder
        </Button>
        <Notification
          bg="primaryGreen"
          isOpen={showNotif}
          onClose={() => setShowNotif(false)}
          textSize="smallB"
          w="auto"
          prefix={
            <Icon
              name="Success"
              color="white"
              size="22px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          İletiniz bize ulaşmak üzere gönderilmiştir.
        </Notification>
      </form> 
    </Div>
  )
}

export default Email;
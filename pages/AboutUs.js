import React, { useState, useEffect, useRef } from 'react';
import { Div, Text } from 'atomize';
import Homepage from './Homepage';

const AboutUs = () => {
  const [scroll, setScroll] = useState(false);
  let isRendered = useRef(false);

  useEffect(() => {
    isRendered = true;
    const el = document.querySelector('.header');
    window.addEventListener("scroll", () => {
      if(isRendered)
        setScroll(el.getBoundingClientRect().bottom <= window.innerHeight);
    });

    return () => {
      isRendered = false;
      setScroll(false);
    }
  }, []);
  

  return (
    <Div>
      <Div
        m="10vh auto"
        d="flex"
        flexDir="column"
        w="92.5vw"
        className="quote"
        p="5vh 0"
        align="center"
        style={{backgroundImage: `url(${"./blob.svg"})`}}
      >
        <Text 
          tag="h2"
          textSize="h2"
          textAlign="center"
          w="35%"
        >
          Temizlikten yana endişeniz olmasın.
        </Text>
        <Text
          w="35%"
          tag="p"
          textSize="body"
          m="5vh auto"
          textAlign="center"
        >
          <b>Müzeyyen & Davut Genç</b> , 2013'ten beri sizlerle...
        </Text>
      </Div>
      <Div
        d="flex"
        flexDir="column"
        w="92.5vw"
        m="0 auto"
        className="about-us"
        align="center"
      >
         <Text 
          tag="h2"
          textSize="h2"
          textAlign="center"
          textColor="primaryBlue"
          p="0 10px"
          className={scroll ? "header underline" : "header"}
        >
          Hakkımızda
        </Text>
        <Text
          w="60%"
          tag="p"
          textSize="body"
          m="2vh auto"
          textAlign="justify"
          className="glass"
          p="2vw"
        >
          Samsun Duru Temizlik olarak, sizler için 8 senedir hizmet veriyoruz. Müşteri memnuniyetini her zaman ön planda tutmakla beraber, bütün temizlik hizmetlerini
          bizzat kendi gözetimimiz altında gerçekleştiriyoruz. Ev temizliği ve inşaat sonrası temizlik en çok tercih edilen hizmetler olmakla beraber, 
          müşteriler mülklerini kontrol ettikten sonra ücret teslimi yapabiliyorlar. Ayrıca, iş teslimi yapıldıktan sonraki 1 iş günü içerisinde herhangi bir şikayet 
          çıkması halinde gerekli ilgi gösteriliyor. Bir aile şirketi olarak en büyük hedefimiz müşterilerimizle sağlıklı ve düzenli bir ilişkimizin olmasıdır.
        </Text>
      </Div>
    </Div>
  );
};

export default AboutUs;
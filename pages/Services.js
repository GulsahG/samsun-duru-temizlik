import React, { useState } from 'react';
import { Div, Image, Button, Icon, Text } from 'atomize';
import Magnifier from 'react-magnifier';

const Services = () => {
  const images = [
    {src: require(`../src/images/mirror-min.jpg?webp`), alt: 'Samsun Duru Temizlik, temizlik ürünleri'},
    {src: require(`../src/images/kitchen.jpg?webp`), alt: 'Samsun temizlik şirketi elemanı'},
    {src: require(`../src/images/vacuum.jpg?webp`), alt: 'Temizlik ürünleri dolu vileda sepeti'},
  ]

  const services = [{title: "Ev, Ofis Temizliği", text:"En çok verilen hizmetlerimizden biri olan ev temizliği, şirketimizin evinizin büyüklüğüne ve durumuna göre verdiği fiyat teklifi ardından randevu alınarak gerçekleştiriliyor. Hizmetlerimiz her odanın, banyo ve tuvalet dahil olmak üzere, temizliğini içeriyor. Mutfak dolaplarının temizlenmesi de ek hizmet olarak sunulabiliyor. Ancak halı temizliği ve ütü işleri personellerimizi kapsamıyor. Ofis temizliği hizmetleri de ev temizliğine benzer şekilde işliyor. Ev sahibinin evde bulunması herhangi bir farklılık yaratmamakla birlikte, bulunmaması takdirde gün sonunda anahtar teslimi yapılıyor."},
   {title: "İnşaat sonrası temizliği", text: "İnşaat sonrası temizliği, ev temizliğine benzer olmakla beraber daha fazla uğraş gerektirmesi sebebiyle; şirketimiz tarafından daha yüksek fiyat teklifleri sunulabiliyor. Personellerimiz, gerekli malzemeleri kullanarak , ince işleri mülkünüze zarar gelmeyecek şekilde özenle yapıyorlar. İnce temizlik, camlardaki pinapen bantlarının ve inşaat, boya lekelerinin çıkarılmasını içeriyor. Yapılan inşaatın özen durumuna göre fiyatlarda değişiklik olabiliyor."},
   {title: "Otel, Yurt temizliği", text: "Otel ve yurt gibi birçok oda/daire içeren mülklerin temizliği; diğer hizmetlerimizin aksine bir günden fazla sürebilir. Personellerimizin ve hizmetimizin kalitesinde herhangi bir değişiklik olmaması önceliğimizdir. İş fiyatları, randevu öncesi belirlenen iş bitimi için gereken gün sayısına göre belirlenerek kesinleştirilir. Mülklerin konumunun, merkeze uzaklığının, fiyatlarda ulaşım süresi dolayısıyla etkisi olabilir."},
   {title: "Merdiven temizliği", text: "Çok yaygın tercih edilmemesine rağmen, şirketimiz daha önce merdiven temizliği vermiştir ve müşterilerimiz bu hizmet için kolaylıkla fiyat teklifi alabilir. Fiyatlar kat ve basamak sayısına, temizlik durumuna göre değişiklik gösterir."}
  ];

  const [activeElement, setActiveElement] = useState(0);

  return (
    <Div
      w="90vw"
      m="0 auto"
      d="flex"
      flexDir="column"
      align="center"
      justify="center"
    >
      <Div
        w="100%"
        d="flex"
        align="center" 
        justify="center"
      >
        {images.map((img, idx) => {
          return <Div key={idx} className="services-img" h="20vw" m={`${idx*5}vw 1.25vw 0 1.25vw`}><Magnifier width="auto" height="20vw" src={img.src} alt={img.alt} /></Div>
        })}
      </Div>
      <Div d="flex" m="5vw 0 2.5vw 0">
        {services.map((service, idx) => {
          return <Button 
            key={idx}
            bg="#fff" 
            borderColor="primaryGreen" 
            border="2px solid" 
            textColor="alpha"
            m="0 0.5vw"
            hoverBg="primaryGreen"
            hoverTextColor="white"
            textAlign="center"
            onClick={() => setActiveElement(idx)}
            >
              {service.title}
            </Button>
        })}
      </Div>
      <Div className="activeService" style={{backgroundImage: `url(${"./blob-scatter.svg"})`}}>
      {services.map((service, idx) => {
        return <Text 
          key={idx}
          className={activeElement === idx ? "" : "disabled"}
          w="50vw"
          minH="30vh"
          h="auto"
          tag="p"
          textSize="body"
          m="10vw auto"
          textAlign="justify"
        >
          {service.text}
        </Text>
      })}
      </Div>
    </Div>
  );
};

export default Services;
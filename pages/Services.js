import React, { useState } from "react";
import { Div, Image, Button, Icon, Text } from "atomize";
import Magnifier from "react-magnifier";

const Services = () => {
  const images = [
    {
      src: require(`../src/images/mirror-min.jpg?webp`),
      margin: "3",
      alt: "Samsun Duru Temizlik, temizlik ürünleri",
    },
    {
      src: require(`../src/images/kitchen-min.jpg?webp`),
      margin: "1",
      alt: "Samsun temizlik şirketi elemanı",
    },
    {
      src: require(`../src/images/vacuum2-min.jpg?webp`),
      margin: "4",
      alt: "Temizlik ürünleri dolu vileda sepeti",
    },
  ];

  const services = [
    {
      title: "Ev, Ofis Temizliği",
      text: "En çok verilen hizmetlerimizden biri olan ev temizliği, şirketimizin size verdiği fiyat teklifi ardından randevu talebinde bulunmanız ile gerçekleştiriliyor. Verilen fiyat teklifi, evinizin büyüklüğüne ve durumuna göre değişiklik gösteriyor. Hizmetlerimiz her odanın, banyo ve tuvalet dahil olmak üzere, temizliğini içeriyor. Sunduğumuz temizlik hizmetleri, profosyonel personeller tarafından yapılarak; evinize zarar gelmemesi garantisi ile sağlanıyor. Ofis temizliği hizmetleri de ev temizliğine benzer şekilde işliyor. Ev sahibinin evde bulunması herhangi bir farklılık yaratmamakla birlikte, bulunmaması takdirde gün sonunda anahtar teslimi yapılıyor.",
      name: "Home",
    },
    {
      title: "İnşaat sonrası temizliği",
      text: "İnşaat sonrası temizliği, ev temizliğine benzer olmakla beraber, daha fazla uğraş gerektirmesi sebebiyle; şirketimiz tarafından daha yüksek fiyat teklifleri sunulabiliyor. Personellerimiz, gerekli malzemeleri kullanarak, ince işleri mülkünüze zarar gelmeyecek şekilde özenle yapıyorlar. İnce temizlik, camlardaki pinapen bantlarının ve inşaat, boya lekelerinin çıkarılmasını içeriyor. Yapılan inşaatın özen durumu ince temizliğin gerektirdiği uğraşı arttırabildiği gibi fiyatlarda değişikliğe sonuç açabiliyor. Ayrıca temizlik sırasında, personellerimiz hijyenin ön planda tutulmasına her zaman dikkat ediyorlar.",
      name: "HomeSolid",
    },
    {
      title: "Otel, Yurt temizliği",
      text: "Otel ve yurt gibi birçok oda/daire içeren mülklerin temizliği; diğer hizmetlerimizin aksine bir günden fazla sürebilir. Personellerimizin ve hizmetimizin kalitesinde herhangi bir değişiklik olmaması önceliğimizdir. İş fiyatları, randevu öncesi belirlenen iş bitimi için gereken gün sayısına göre belirlenerek kesinleştirilir. Mülklerin konumunun, merkeze uzaklığının, fiyatlarda ulaşım süresi dolayısıyla etkisi olabilir.",
      name: "Location",
    },
    {
      title: "Restoran, Kafe temizliği",
      text: "Restoran ve kafe temizlikleri, ev ve ofis temizliklerine benzer bir şekilde sunulan hizmetlerimizdendir. Mülkünüzün kat sayısına göre iş süresi değişmekle beraber, genellikle 1 iş günü içerisinde iş teslimini alabilirsiniz. Daha önce birçok ünlü restoran ve kafelerle çalışmış olmamız ve onlardan aldığımız memnuniyet, güvenilirliğimizin belirtisidir. Bu firmalar hakkında daha detaylı bilgi için 𝗥𝗲𝗳𝗲𝗿𝗮𝗻𝘀𝗹𝗮𝗿 bölümümüzü inceleyebilirsiniz.",
      name: "Store",
    },
  ];

  const [activeElement, setActiveElement] = useState(0);

  return (
    <Div
      w="90vw"
      m={{xs: "2.5vh auto", md: "0 auto"}}
      d="flex"
      flexDir="column"
      align="center"
      justify="center"
      id="services"
    >
      <Div w="100%" d="flex" align="center" justify="center">
        {images.map((img, idx) => {
          return (
            <Div
              key={idx}
              className="services-img"
              h={{xs: "25vw", md: "20vw"}}
              m={`${img.margin * 5}vw 1.25vw 0 1.25vw`}
            >
              <Magnifier
                width="auto"
                height="100%"
                mgWidth={75}
                mgHeight={75}
                zoomFactor={2}
                src={img.src}
                alt={img.alt}
              />
            </Div>
          );
        })}
      </Div>
      <Div d="flex" m="5vw 0 2.5vw 0">
        {services.map((service, idx) => {
          return (
            <Div key={idx} d="flex" flexDir="column" align="center">
              <Icon name={service.name} size="20px" m="1vh 0" color="alpha" />
              <Button
                key={idx}
                bg="#fff"
                borderColor="primaryGreen"
                border="2px solid"
                textColor={activeElement === idx ? "white" : "alpha"}
                m={{xs: "0 2vw", md: "0 0.5vw"}}
                p={{ md: "0.25vh 0.5vw", xl: "0.75vh 1.5vw" }}
                bg={activeElement === idx ? "primaryGreen" : "white"}
                hoverBg="primaryGreen"
                hoverTextColor="white"
                textAlign="center"
                onClick={() => setActiveElement(idx)}
                textSize={{xs: "smallB", md: "body"}}
                className="service-title"
                h={{xs: "12.5vh", md: "auto"}}
              >
                {service.title}
              </Button>
            </Div>
          );
        })}
      </Div>
      <Div
        className="activeService"
        //style={{ backgroundImage: `url(${"./blob-scatter.svg"})` }}
      >
        {services.map((service, idx) => {
          return (
            <Text
              key={idx}
              className={activeElement === idx ? "enabled" : "disabled"}
              w="50vw"
              minH={{xs: "50vh", md: "30vh"}}
              h="auto"
              tag="p"
              textSize={{xs: "smallB", md: "body"}}
              m={{ xs: "10vw auto", xl: "7.5vw auto" }}
              textAlign={{xs: "center", md: "justify"}}
            >
              {service.text}
            </Text>
          );
        })}
      </Div>
      <Div className="services" w="100vw" p={{xs: "0.25vh", lg: "0.30vh", xl: "0.5vh"}} m={{xl: "5vh 0 0 0"}}></Div>
    </Div>
  );
};

export default Services;

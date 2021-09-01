import { Anchor, Div, Text, Icon } from "atomize";
import React, { useEffect, useState } from "react";

const References = () => {
  const referenceList1 = [
    {
      name: "Legend Hotel Ayvacık",
      location: "https://goo.gl/maps/odYf2vqaMq6Kh6pH8",
      addr: "Orhangazi, Yolu 17th Km., 55200, Ayvacık/Samsun",
    },
    {
      name: "Starbucks Coffee",
      location: "https://goo.gl/maps/rBkMmEefhRN1dsy87",
      addr: "Cumhuriyet, Adnan Menderes Blv. No:367, 55200 Atakum/Samsun",
    },
    {
      name: "Nisantası Pastanesi",
      location: "https://g.page/nisantasipastanesi?share",
      addr: "Yeni Mahalle, Ali Gaffar Okkan Cd. No:21, 55270 Atakum/Samsun",
    },
    {
      name: "1453 Insaat",
      location: "https://goo.gl/maps/DQf3fGbQoqGSEBMw7",
      addr: "Yenimahalle, 3130. Sk. NO:43, 55270 Atakum/Samsun",
    },
    {
      name: "Baran Plaza",
      location: "https://goo.gl/maps/RHsToZ6ZEXZbnNCg7",
      addr: "Bahçelievler, İstiklal Cd. No: 242/6, 55070 İlkadım/Samsun",
    },
  ];
  const referenceList2 = [
    {
      name: "Legend Hotel Ayvacık2",
      location: "https://goo.gl/maps/odYf2vqaMq6Kh6pH8",
      addr: "Orhangazi, Yolu 17th Km., 55200, Ayvacık/Samsun",
    },
    {
      name: "Starbucks Coffee",
      location: "https://goo.gl/maps/rBkMmEefhRN1dsy87",
      addr: "Cumhuriyet, Adnan Menderes Blv. No:367, 55200 Atakum/Samsun",
    },
    {
      name: "Nisantası Pastanesi",
      location: "https://g.page/nisantasipastanesi?share",
      addr: "Yeni Mahalle, Ali Gaffar Okkan Cd. No:21, 55270 Atakum/Samsun",
    },
    {
      name: "1453 Insaat",
      location: "https://goo.gl/maps/DQf3fGbQoqGSEBMw7",
      addr: "Yenimahalle, 3130. Sk. NO:43, 55270 Atakum/Samsun",
    },
    {
      name: "Baran Plaza",
      location: "https://goo.gl/maps/RHsToZ6ZEXZbnNCg7",
      addr: "Bahçelievler, İstiklal Cd. No: 242/6, 55070 İlkadım/Samsun",
    },
  ];
  const referenceList3 = [
    {
      name: "Legend Hotel Ayvacık3",
      location: "https://goo.gl/maps/odYf2vqaMq6Kh6pH8",
      addr: "Orhangazi, Yolu 17th Km., 55200, Ayvacık/Samsun",
    },
    {
      name: "Starbucks Coffee",
      location: "https://goo.gl/maps/rBkMmEefhRN1dsy87",
      addr: "Cumhuriyet, Adnan Menderes Blv. No:367, 55200 Atakum/Samsun",
    },
    {
      name: "Nisantası Pastanesi",
      location: "https://g.page/nisantasipastanesi?share",
      addr: "Yeni Mahalle, Ali Gaffar Okkan Cd. No:21, 55270 Atakum/Samsun",
    },
    {
      name: "1453 Insaat",
      location: "https://goo.gl/maps/DQf3fGbQoqGSEBMw7",
      addr: "Yenimahalle, 3130. Sk. NO:43, 55270 Atakum/Samsun",
    },
    {
      name: "Baran Plaza",
      location: "https://goo.gl/maps/RHsToZ6ZEXZbnNCg7",
      addr: "Bahçelievler, İstiklal Cd. No: 242/6, 55070 İlkadım/Samsun",
    },
  ];
  const referenceList4 = [
    {
      name: "Legend Hotel Ayvacık4",
      location: "https://goo.gl/maps/odYf2vqaMq6Kh6pH8",
      addr: "Orhangazi, Yolu 17th Km., 55200, Ayvacık/Samsun",
    },
    {
      name: "Starbucks Coffee",
      location: "https://goo.gl/maps/rBkMmEefhRN1dsy87",
      addr: "Cumhuriyet, Adnan Menderes Blv. No:367, 55200 Atakum/Samsun",
    },
    {
      name: "Nisantası Pastanesi",
      location: "https://g.page/nisantasipastanesi?share",
      addr: "Yeni Mahalle, Ali Gaffar Okkan Cd. No:21, 55270 Atakum/Samsun",
    },
    {
      name: "1453 Insaat",
      location: "https://goo.gl/maps/DQf3fGbQoqGSEBMw7",
      addr: "Yenimahalle, 3130. Sk. NO:43, 55270 Atakum/Samsun",
    },
    {
      name: "Baran Plaza",
      location: "https://goo.gl/maps/RHsToZ6ZEXZbnNCg7",
      addr: "Bahçelievler, İstiklal Cd. No: 242/6, 55070 İlkadım/Samsun",
    },
  ];
  const referenceArr = [
    referenceList1,
    referenceList2,
    referenceList3,
    referenceList4,
  ];

  const [currRefList, setCurrRefList] = useState(0);
  const [right, setRight] = useState(true);
  const [left, setLeft] = useState(true);

  const onClickHandler = (isNext) => {
    if (isNext && currRefList === 3) {
      setCurrRefList(0);
    } else if (isNext) {
      setCurrRefList(currRefList + 1);
    } else if (!isNext && currRefList === 0) {
      setCurrRefList(3);
    } else if (!isNext) {
      setCurrRefList(currRefList - 1);
    }
    setRight(isNext);
    setLeft(!isNext);

    setTimeout(() => {
      setRight(true);
      setLeft(true);
    }, 500);

  };
  return (
    <Div
      w="100vw"
      m="0 auto"
      p="5vh 0"
      d="flex"
      flexDir="column"
      align="center"
      justify="center"
      className="references"
    >
      <Text tag="h2" textSize="h2" textColor="primaryGreen">
        En Büyük Destekçilerimiz
      </Text>
      <Div
        m="5vh auto"
        p="0 2.5vw"
        w="100vw"
        d="flex"
        align="center"
        justify="center"
      >
        <button
          type="button"
          onClick={() => onClickHandler(false)}
          title="Önceki resim"
          className="left glass"
        >
          <Icon name="LeftArrow" size="3.5vw" color="primaryGreen" />
        </button>
            <Div
              p="0 2.5vw"
              w="80vw"
              d="flex"
              align="flex-start"
              justify="center"
            >
              {referenceArr[currRefList].map((ref, idx) => {
                return (
                  <Div
                    className="reference"
                    w="17.5vw"
                    h="15vh"
                    m="5vh -0.75vw"
                    p="2.5%"
                    d="flex"
                    key={idx}
                    align="center"
                    justify="space-between"
                    style={{ backgroundImage: `url(${"./gradient-bg.jpg"})`, transform: `translateX(${(right && left) ? 0 : !right ? -15 : 15}%)`, transition: "all 0.75s"}}
                  >
                    <Div>
                      <Text
                        tag="h3"
                        textSize="h3"
                        textColor="alpha"
                        m="1.5% 0"
                        fontFamily="secondary"
                      >
                        {ref.name.toLowerCase()}
                      </Text>
                    </Div>
                    <Anchor href={ref.location} target="_blank">
                      <Icon name="LocationSolid" size="30px" color="primaryGreen" />
                    </Anchor>
                  </Div>
                );
                })
              }
            </Div>
        <button
          type="button"
          onClick={() => onClickHandler(true)}
          title="Sonraki resim"
          className="right glass"
        >
          <Icon name="RightArrow" size="3.5vw" color="primaryGreen" />
        </button>
      </Div>
      </Div>
  );
};

export default References;

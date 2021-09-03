import { Anchor, Div, Text, Icon } from "atomize";
import React, { useEffect, useState } from "react";

const References = () => {
  const referenceList1 = [
    {
      name: "Legend Hotel Ayvacık",
      location: "https://goo.gl/maps/odYf2vqaMq6Kh6pH8",
    },
    {
      name: "Starbucks Coffee",
      location: "https://goo.gl/maps/rBkMmEefhRN1dsy87",
    },
    {
      name: "Nisantası Pastanesi",
      location: "https://g.page/nisantasipastanesi?share",
    },
    {
      name: "1453 Insaat",
      location: "https://goo.gl/maps/DQf3fGbQoqGSEBMw7",
    },
    {
      name: "Baran Plaza",
      location: "https://goo.gl/maps/RHsToZ6ZEXZbnNCg7",
    },
    {
      name: "Tac Mahal Estetik",
      location: "https://goo.gl/maps/UQvaJDEfEFsXqovJ6",
    },
    {
      name: "Körfez Marina Evleri",
      location: "https://goo.gl/maps/F314zudrJHkpg31x5",
    },
    {
      name: "Olympia Spor Merkezi",
      location: "https://g.page/nisantasipastanesi?share",
    },
  ];
  const referenceList2 = [
    {
      name: "Borkonut Nis",
      location: "https://g.page/borkonut?share",
    },
    {
      name: "Fevzi'nin Yeri",
      location: "https://goo.gl/maps/GFUprqfBe2L9bxDo6",
    },
    {
      name: "Damla Vadi Sitesi",
      location: "https://goo.gl/maps/8secH3AnfqAYQQTq6",
    },
    {
      name: "Nirvana Evleri",
      location: "https://goo.gl/maps/YkkhPxDY5tsT4dJx7",
    },
    {
      name: "Bakon Sitesi",
      location: "https://goo.gl/maps/BerpNVSCyL9x2FF36",
    },
    {
      name: "Yedas A.S.",
      location: "https://goo.gl/maps/RLhEYSGhWeNeKpcD8",
    },
    {
      name: "Fatma Hatun Evleri",
      location: "https://goo.gl/maps/hJeMSvjwHnzUB7Hk7",
    },
    {
      name: "Nu Teras Evleri",
      location: "https://goo.gl/maps/k73XbEtdVnfhkmno7",
    },
  ];
  const referenceArr = [
    referenceList1,
    referenceList2,
  ];

  const [currRefList, setCurrRefList] = useState(0);
  const [right, setRight] = useState(true);
  const [left, setLeft] = useState(true);

  const onClickHandler = (isNext) => {
    if (isNext && currRefList === 1) {
      setCurrRefList(0);
    } else if (isNext) {
      setCurrRefList(currRefList + 1);
    } else if (!isNext && currRefList === 0) {
      setCurrRefList(1);
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
        Referanslarımız
      </Text>
      <Div
        m="5vh auto 0 auto"
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
          <Icon name="LeftArrow" size={{sm: "7.5vw", xl: "3.5vw"}} color="primaryGreen" />
        </button>
            <Div
              p="0 2.5vw"
              w="70vw"
              d="flex"
              align={{xs: "center", xl: "flex-start"}}
              justify="center"
              flexWrap="wrap"
              flexDir={{xs: "column", xl: "row"}}
            >
              {referenceArr[currRefList].map((ref, idx) => {
                return (
                  <Div
                    className="reference"
                    minW={{md: "60vw", xl: "15vw"}}
                    h="15vh"
                    m={{md: "2vh 0", xl: "5vh -0.75vw"}}
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
          <Icon name="RightArrow" size={{sm: "7.5vw", xl: "3.5vw"}} color="primaryGreen" />
        </button>
      </Div>
      </Div>
  );
};

export default References;

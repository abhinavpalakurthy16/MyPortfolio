import React from "react";

import {
  Section,
  SectionText,
  SectionSubText,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { Img } from "../Projects/ProjectsStyles";

const data = [
  {
    text: "CVS pharmacy",
    img: "/images/unnamed.png"
  },
  {
    text: "American Express",
    img: "/images/amex.png"
  },
  {
    text: "Onetrust",
    img: "/images/onetrust.png"
  },
  {
    text: "Principal Financial Group",
    img: "/images/principal.png"
  },
  {
    text: "Massmutual",
    img: "/images/mm.png"
  }
];

const Acomplishments = () => (
  <>
    <Section>
    </Section>
    <Section>
      <SectionTitle>Client's that i worked with</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <Img src={card.img} />
          </Box>
        ))}
      </Boxes>
    </Section></>

);

export default Acomplishments;

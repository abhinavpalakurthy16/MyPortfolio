import React, { Component, useEffect, useRef } from "react";
import { init } from "ityped";
import {
  Section,
  SectionText,
  SectionTitle,
  SectionText2,
} from "../../styles/GlobalComponents";
import { LeftSection, Span, Span2 } from "./HeroStyles";

function Hero() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 140,
      backSpeed: 30,
      loop: false,
      strings: ["I'm a Front End Developer...!"],
    });
  }, []);
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <Span> Hi there, I'm Abhinav</Span> <br />
          <Span2 ref={textRef}></Span2>
        </SectionTitle>
        <SectionText2>
           Passionate Front end Software engineer with 7+ years of experience and broad perspective in both creative and front-end development.
           Adept in working both in micro- and multi-departmental team structures.
          <br />
        </SectionText2>
      </LeftSection>
    </Section>
  );
}

export default Hero;

import React, { Component, useEffect, useRef } from "react";
import { init } from "ityped";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  SectionSubText,
  Btn3

} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { FaSmile } from "react-icons/fa";
import { SecondaryBtn } from "../../styles/GlobalComponents/index";
import { CgChevronDoubleDownO } from "react-icons/cg";
import Link from "next/link";
import { IoSchool } from "react-icons/io5";

const Timeline = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 120,
      backSpeed: 30,
      loop: true,
      strings: [`(I go by "ABHI").`],
    });
  }, []);
  return (
    <Section id="about">
       <Btn3>
      <Link href="#about">
        <CgChevronDoubleDownO />
      </Link>
    </Btn3>
    <SectionDivider style={{ marginBottom: "3%" }} />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
       Hello <FaSmile color="#ffdd00"/> I'm Abhinav <span ref={textRef}></span>
      </SectionText>
      <SectionSubText> 
        I hold a Masters Degree in the field of Computer Science from University of the Central Missouri. 
        I'm interested about bringing digital products' technical and visual features to life. 
        User experience, pixels perfection, and developing clean, human-readable code are all important to me.
        Fast-forward to today, and I’ve had the privilege of working at many companies, a start-up, and a huge corporations. 
        <br />
        When I'm not pushing pixels or logics, you'll find me cooking, chilling or go out with my friends.
      </SectionSubText>
      <br />
      <SectionTitle>Education</SectionTitle>
      <SectionText>
        <IoSchool
          style={{
            marginRight: "2%",
          }}
          size="3rem"
        />
        Masters In computer Science, University Of The Central Missouri.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;

import React, { useState } from "react";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Footer from "../components/Footer/Footer";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <>      
    <BgAnimation />
     <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Timeline />
      <Technologies />
      <Projects />
      <Acomplishments />
      <Footer />
    </Layout>
    </>
   
  );
};

export default Home;

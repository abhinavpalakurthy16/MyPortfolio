import React from "react";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import Testimonials from "../Testimonials/Testimonials";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "../Header/HeaderStyles";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineContacts,
} from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Footer = () => {
  return (
    <Section nopadding id="footer">
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>LET'S WORK TOGETHER</LinkTitle>
          <LinkItem href="mailto:Abhinav.palakurthy@gmail.com">
            Abhinav.palakurthy@gmail.com
          </LinkItem>
          <LinkItem>
            937-802-8285
          </LinkItem>
          <LinkItem>
            <SocialIcons href="https://github.com/abhinavpalakurthy16">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/abhinav0116" target="_blank">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <p>
        People I've worked with have said some nice things...
      </p>
      <Testimonials />
    </FooterWrapper>
    </Section>
  );
};

export default Footer;

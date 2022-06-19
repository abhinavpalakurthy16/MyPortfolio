import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineContacts,
} from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";
import { Dropdown } from "react-bootstrap";

const Abhi = () => <img src="/images/ap.png"  style={{height: 60, width: 60, marginTop: -10}}/>;

const Themes = [
  { key: 1, title: "Pink", name: "light" },
  { key: 2, title: "Black", name: "dark" },
  { key: 3, title: "Blue", name: "cupcake" },
  { key: 4, title: "Green", name: "bumblebee" },
]

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "16px",
          }}
        >
          <Abhi />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#footer">
          <NavLink>Testimonials</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;

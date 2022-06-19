import Link from "next/link";
import React from "react";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Abhi = () => <img src="/images/ap.png"  style={{height: 60, width: 60}}/>;

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
          <Span><Abhi /></Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;

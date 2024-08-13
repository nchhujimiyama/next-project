"use client"

import styled from "styled-components";
import { NavLinks } from "./navLinks";

const SideNav = () => {
  return (
    <Wrapper>
      <NavLinks />
    </Wrapper>
  );
}

export default SideNav;

const Wrapper = styled.aside`
  width: 240px;
  border-right: 1px solid #aaa;
`
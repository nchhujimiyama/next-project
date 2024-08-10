"use client"

import React from "react";
import styled from "styled-components";
import { SideNav } from "../organisms/SideNav";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <SideNav />
      <MainContent>
        {children}
      </MainContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
`
const MainContent = styled.div`
  flex: 1;
`
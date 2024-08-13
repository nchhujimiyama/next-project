"use client"

import React from "react";
import styled from "styled-components";
import SideNav from "@/app/ui/dashboard/sidenav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <SideNav />
      <Main>
        {children}
      </Main>
    </Wrapper>
  );
}

export default DashboardLayout;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`
const Main = styled.main`
  flex: 1;
`
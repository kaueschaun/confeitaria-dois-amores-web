'use client';
import styled from "styled-components";
import Header from "../../components/_UI/Header";
import colors from "../../theme/colors";
import Text from "../../components/_UI/Text";
import breakpoints from "../../theme/breakpoints";
import { type ReactNode } from "react";


export default function Home({ text, children}: { text?: string, children?: ReactNode;}) {
  return (
    <Container>
      <Header />
      <Content>
        <Text name="subtitle">{text}</Text>
        <StyledMain>
          {children}
        </StyledMain>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background: ${colors.background};
  height: 100vh;
  overflow-y: auto;
  
`;

const Content = styled.div`
  padding: 120px 1rem;
  max-width: 80rem;      
  margin: 0px auto;     
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.md}){
    padding: 120px 1.5rem;
  }

   @media screen and (min-width: ${breakpoints.lg}){
    padding: 120px 2rem;
  }
`;


const StyledMain = styled.main`
  margin-top: 40px;
`
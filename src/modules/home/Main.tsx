import styled from "styled-components";
import Header from "../../components/_UI/Header";
import colors from "../../theme/colors";
import Text from "../../components/_UI/Text";
import breakpoints from "../../theme/breakpoints";


export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Text name="subtitle">Escolha o que buscar</Text>
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

  @media screen and (min-width: ${breakpoints.md}){
    padding: 120px 1.5rem;
  }

   @media screen and (min-width: ${breakpoints.lg}){
    padding: 120px 2rem;
  }
`;
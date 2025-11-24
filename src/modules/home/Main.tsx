import styled from "styled-components";
import Header from "../../components/_UI/Header";
import colors from "../../theme/colors";
import Text from "../../components/_UI/Text";


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
`

const Content = styled.div`
  padding: 140px 40px;
  
`
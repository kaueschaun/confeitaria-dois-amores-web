import styled from "styled-components"
import { Row } from "../../styled/alignment/Row"
import colors from "../../theme/colors"
import Text from "./Text"
import { ShoppingCart, User } from "lucide-react"
import breakpoints from "../../theme/breakpoints"
import Button from "./Button"


export default function Header() {
  return (
    <>
      <Container>
        <Row verticalCenter>
          <ContentImage>
            <img src="/assets/svg/icons/logo2.svg" />
          </ContentImage>
          
          <Text marginLeft='5px' type="bold">Confeitaria Dois Amores</Text>

        </Row>

        <Row>
          <input />
        </Row>

        <ContentAccountKart>
          <Row>
            <User color={colors.primary} size={35} />
            <Button variant="outline"  category="primary">Entrar</Button>
          </Row>

          <ContentKar>
            <ShoppingCart color={colors.white} size={20} />
          </ContentKar>
        </ContentAccountKart>
        
      </Container>
    </>
  )
}

const Container = styled.header`
  padding: 10px 40px; 
  width: 100%;
  background: ${colors.white};
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  position: fixed;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
  }

`

const ContentImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > img {
    width: 64px;
    height: 64px;
  }
`

const ContentKar = styled.div`

  border-radius: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.backgroundPrimary};
  transition: all ease-in-out .25s;

  &:hover {
    transform: scale(1.05);
    background: ${colors.purple}
  }
`

const ContentAccountKart = styled(Row)`
  gap: 10px;
  align-items: center;
  cursor: pointer;

  
  
`
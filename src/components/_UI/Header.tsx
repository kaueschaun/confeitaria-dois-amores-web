import styled, { keyframes } from "styled-components"
import { Row } from "../../styled/alignment/Row"
import colors from "../../theme/colors"
import Text from "./Text"
import { ShoppingCart, SlidersHorizontal, User } from "lucide-react"
import breakpoints from "../../theme/breakpoints"
import Button from "./Button"
import { useState } from "react"
import { Column } from "../../styled/alignment/Column"


  const moveToRight = keyframes`
      from {
        transform: translateX(-300px);
      }
      to {
        transform: translateX(0px);
      }
  `;
export default function Header() {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(true);
  console.log(visibleMenu)
  return (
    <>
      <MenuMobile $visible={visibleMenu}>

        <Close onClick={() => setVisibleMenu(!visibleMenu)}/>
        <ContentMenuMobile>
          <ContentImage>
            <img src="/assets/svg/icons/logo2.svg" />
          </ContentImage>
          <Text marginLeft='5px' type="bold" color={colors.white}>Confeitaria Dois Amores</Text>
        </ContentMenuMobile>
         
      </MenuMobile>
      <Container>
        <Content>
          <ContentMobile $visible={visibleMenu}>
            <ActionMenuMobile onClick={() => setVisibleMenu(!visibleMenu)} />
          </ContentMobile>


         

          <StyledRight>
            <Row verticalCenter>

              <ContentImage>
                <img src="/assets/svg/icons/logo2.svg" />
              </ContentImage>
              
              <Text marginLeft='5px' type="bold">Confeitaria Dois Amores</Text>
            </Row>

            <ContentFilters>
             
              <FieldSet type="text" placeholder="Pesquisar"/>
              <Button variant="borded">
                <SlidersHorizontal size={16}/>
                Filtrar
              </Button>
            </ContentFilters>


          </StyledRight>

        

          <StyledSection>
            <ContentAccountKart>
              <Row>
                <User color={colors.primary} size={35} />
                <Button variant="outline"  category="primary">Entrar</Button>
              </Row>

              <ContentKar>
                <ShoppingCart color={colors.white} size={20} />
              </ContentKar>
            </ContentAccountKart>
          </StyledSection>
        </Content>
        
      </Container>
    </>
  )
}

const Container = styled.header`
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background: ${colors.white};
  position: fixed;
  width: 100%;
  padding: 5px 0px;
  border-color: #e5e7eb;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 80rem;      
  margin: 0px auto;     
  padding: 0 1rem;

  @media screen and (min-width: ${breakpoints.sm}){
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    justify-content: flex-start;
  }

   @media screen and (min-width: ${breakpoints.lg}){
    padding-left: 2rem;
    padding-right: 2rem;
    justify-content: space-between;
  }
`;

const StyledRight = styled(Row)`
  width: 80%;
  justify-content: space-between;
`;

const ContentImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > img {
    width: 64px;
    height: 64px;
  }
`;

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
`;

const ContentAccountKart = styled(Row)`
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

const StyledSection = styled.section`
  display: none;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
    flex-direction: row;
  }
`;

const ContentMobile = styled.div<{ $visible: boolean }>`
  display: flex;
  padding: 0 15px 10px 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 10px;
   ${({ $visible }) => $visible === true && `
      display: flex;
  `}
   ${({ $visible }) => $visible === false && `
      display: none;
  `}
  @media screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`;


const ActionMenuMobile = styled.div`
 
  width: 18px;
  height: 3px;
  position: absolute;
  /* top: 5px; */
  left: 0;
  background: ${colors.backgroundPrimary};
  &::before {
    content: '';
    position: absolute;
    top: 7px;
    left: 0;
    width: 18px;
    height: 3px;
    background: ${colors.backgroundPrimary};
  }
  &::after {
    content: '';
    position: absolute;
    top: 14px;
    left: 0;
    width: 18px;
    height: 3px;
    background: ${colors.backgroundPrimary};
  }
`;

const FieldSet = styled.input`
  width: 70%;
  height: 42px;
  border-radius: 50px;
  padding: 15px;
  background: ${colors.background};
  border: 1px solid ${colors.primaryBorder};
`;

const ContentFilters = styled(Row)`
  width: 70%;
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  & > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 50px;
    height: 42px;
    width: 100px;
    font-weight: 600;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }
`;

const MenuMobile = styled(Column)<{ $visible: boolean }>`
    transition: ease-in  0.3s;
    animation: ${moveToRight} .4s ease forwards;
    width: 100%;
  ${({ $visible }) => !$visible && `
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;   /* 👉 faz o X ir pra direita */
    gap: 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: ${colors.backgroundPrimary};
    width: 100%;
    height: 100vh;
  `}

  ${({ $visible }) => $visible && `
    display: none;
  `}
`;


 const Close = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;          /* 👉 alinhar à direita */
    width: 18px;
    height: 3px;
    background: ${colors.white};
    transform: translateY(-50%);
  }

  &::before {
    transform: translateY(-50%) rotate(45deg);
  }

  &::after {
    transform: translateY(-50%) rotate(-45deg);
  }
`;

const ContentMenuMobile = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
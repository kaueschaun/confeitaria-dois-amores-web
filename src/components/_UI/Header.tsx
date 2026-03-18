'use client';
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
        transform: translateX(-100%);
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
        <ContentMenuMobile>
          <Row verticalCenter>
            <ContentImage>
              <img src="/assets/svg/icons/logo2.svg" />
            </ContentImage>
            <Text marginLeft='5px' type="bold" color={colors.white}>Confeitaria Dois Amores</Text>
          </Row>
          <Close onClick={() => setVisibleMenu(!visibleMenu)}>
            <span />
          </Close>
        </ContentMenuMobile>

        <MainMenu>
          <CardRoute>
            <IconRoute>
              <User size={16} color={colors.white} />
            </IconRoute>


            <Button variant="outline" path="/login">
              <Text marginLeft={'20px'} type="bold" color={colors.secondary}>Entrar</Text>
            </Button>
          </CardRoute>
          <CardRoute>
            <IconRoute>
              <SlidersHorizontal size={20} color={colors.white} />
            </IconRoute>
            <Text marginLeft='20px' type="bold" color={colors.white}>Filtros</Text>
          </CardRoute>

        </MainMenu>
      </MenuMobile>
      <Container>
        <Content>
          <StyledRight>
            <Row verticalCenter>

              <ContentImage>
                <img src="/assets/svg/icons/logo2.svg" />
              </ContentImage>

              <Text marginLeft='5px' type="bold">Confeitaria Dois Amores</Text>
            </Row>

            <ContentFilters>

              <FieldSet type="text" placeholder="Pesquisar" />
              <Button variant="borded">
                <SlidersHorizontal size={16} />
                Filtrar
              </Button>
            </ContentFilters>


          </StyledRight>
          <StyledSection>
            <ContentAccountKart>
              <ContentButtonLogin>
                <User color={colors.secondary} size={20} />
                <Button variant="outline" path="/login">Entrar</Button>
              </ContentButtonLogin>

              <ContentKar>
                <ShoppingCart color={colors.white} size={20} />
              </ContentKar>
            </ContentAccountKart>
          </StyledSection>

          <ContentMobile $visible={visibleMenu}>
            <MenuButton onClick={() => setVisibleMenu(!visibleMenu)}>
              <ActionMenuMobile />
            </MenuButton>
          </ContentMobile>


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
  justify-content: space-between;
  max-width: 80rem;      
  margin: 0px auto;     
  padding: 0 1rem;
  align-items: center;
  @media screen and (min-width: ${breakpoints.sm}){
    padding-left: 1.5rem;
    padding-right: 1.5rem;
   justify-content: space-between;
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
  background: ${colors.secondary};
  transition: all ease-in-out .25s;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
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
  width: 15px;
  height: 2px;
  background: ${colors.backgroundPrimary};
  position: relative;

  &::before,
  &::after {
    content: '';
    width: 15px;
    height: 2px;
    background: ${colors.backgroundPrimary};
    position: absolute;
    left: 0;
  }

  &::before { top: -5px; }
  &::after { top: 5px; }
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

const MenuMobile = styled(Column) <{ $visible: boolean }>`
    transition: ease-in  0.3s;
    animation: ${moveToRight} .4s ease forwards;
    width: 100%;
   

  ${({ $visible }) => !$visible && `
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;  
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
  width: 45px;
  height: 45px;
  cursor: pointer;
  background: rgb(255 255 255 / 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .25s ease;

  span {
    position: relative;
    width: 18px;
    height: 18px;
    display: block;
    transition: transform .25s ease;
  }

  span::before,
  span::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 18px;
    height: 3px;
    background: ${colors.white};
    transform: translateY(-50%);
  }
  span::before {
    transform: translateY(-50%) rotate(45deg);
  }

  span::after {
    transform: translateY(-50%) rotate(-45deg);
  }

  &:hover span {
    transform: rotate(90deg);
  }
`;


const ContentMenuMobile = styled(Row)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const MenuButton = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ease-in  .25s;
  background: ${colors.background};

  &:hover {
    transform: scale(1.01);
  }
`;

const MainMenu = styled(Column)`
  width: 100%;
  gap: 10px;

  & > div > a > button > p {
    font-size: 16px;
    /* background:red; */
  }
`

const CardRoute = styled(Row)`
  height: 95px;
  width: 100%;
  padding: 20px;
  background: rgb(255 255 255 / 0.1);
  border-radius: 20px;
  align-items: center;
  transition: all ease-in-out .25s;

  &:hover {
    transform: scale(1.01);
    background: rgb(255 255 255 / 0.2);
    cursor: pointer;
  }
`;

const IconRoute = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255 255 255 / 0.1);
  border-radius: 10px;
`

const ContentButtonLogin = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 30px;
  transition: all ease-in-out .25s;
  &:hover {
    background: ${colors.secondary};
    border-radius: 10px;
    transform: scale(1.05);
    opacity: 0.9;
    & > a > button {
      color: ${colors.white};
    }
    & > svg {
      stroke: ${colors.white};
    }
  }
`
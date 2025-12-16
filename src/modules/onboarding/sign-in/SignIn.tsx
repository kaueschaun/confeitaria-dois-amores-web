import styled from "styled-components"
import { Column } from "../../../styled/alignment/Column"
import colors from "../../../theme/colors"
import { FullyCentered } from "../../../styled/alignment/Center";
import breakpoints from "../../../theme/breakpoints";
import Text from "../../../components/_UI/Text";


export default function SignIn() {
  return (
    <Container>
      <CardContainer>
          <StyledHeader>
            <ContentImage>
              <img src="/assets/svg/icons/logo2.svg" />
            </ContentImage>
            <Text marginTop={'10px'} name='personalized' weight='700' size='1.5rem' color={colors.night}>Bem-vindo de volta!</Text>
            <Text marginTop={'10px'} size="0.875rem" name='personalized' weight='300' color={colors.nightLight} line="2rem">Entre na sua conta para continuar</Text>
          </StyledHeader>
      </CardContainer>
    </Container>
  )
}

const Container = styled(FullyCentered)`
  width: 100%;
  height: 100vh;
  padding: 10px 20px;
  background: ${colors.backgroundPrimary};

 
`;

const CardContainer = styled(Column)`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: ${colors.white};
  padding: 20px 10px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  @media screen and (min-width: 375px) {
    width: 340px;
    padding: 10px;
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    width: 448px;
    padding: 20px;
  }

`
const StyledHeader = styled(Column)`
  width: 100%;
  padding: 20px 0px;
  align-items: center;
`;
const ContentImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > img {
    width: 90px;
    height: 90px;
  }
`;
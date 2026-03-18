'use client';
import styled from "styled-components"
import { Column } from "../../../styled/alignment/Column"
import colors from "../../../theme/colors"
import { FullyCentered } from "../../../styled/alignment/Center";
import breakpoints from "../../../theme/breakpoints";
import Text from "../../../components/_UI/Text";
import FieldSet from "../../../components/_UI/FieldSet";
import { Row } from "../../../styled/alignment/Row";
import Button from "../../../components/_UI/Button";
import Icon from "../../../components/_UI/Icon";


export default function SignIn() {
  return (
    <Container>
      <Content>
        <CardContainer>
          <StyledHeader>
            <Text weight='700' color={colors.night}>Bem-vindo de volta!</Text>
            <Text marginTop={'10px'} size="0.875rem" name='personalized' weight='300' color={colors.nightLight}>
              Não tem uma conta? <a href="#">Crie a sua agora!</a>
            </Text>
          </StyledHeader>
          <SectionForm>
            <FieldSet variant="squared" label="E-mail" />
            <FieldSet marginTop={'10px'} variant="squared" label="Senha" />

            <Row width="100%" marginTop="20px">
              <Row >
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">
                  <Text marginLeft="5px" name="small">Lembrar</Text>
                </label>
              </Row>
              <a href="#">
                <Text name="small">Esqueceu a senha?</Text>
              </a>
            </Row>
            <Button fullWidth marginTop="20px">
              Entrar
            </Button>
          </SectionForm>

          <OrDivider>
            <div />
            <Text>Ou continue com</Text>
            <div />
          </OrDivider>

          <SocialLogin>
            <Button variant="secondary" fullWidth>
              <Icon name="google" />
              <Text marginLeft="10px">Google</Text>
            </Button>
            <Button variant="secondary" fullWidth>
              <Icon name="github" />
              <Text marginLeft="10px">GitHub</Text>
            </Button>
          </SocialLogin>

        </CardContainer>
      </Content>
    </Container>
  )
}

const Container = styled(FullyCentered)`
  width: 100%;
  height: 100vh;
  background: ${colors.backgroundPrimary};
`;

const Content = styled(FullyCentered)`
  width: 100%;
  height: 100%;
  padding: 20px 10px;
`

const CardContainer = styled(Column)`
  width: 100%;
  max-width: 448px;
  background: ${colors.white};
  padding: 40px 30px;
  border-radius: 30px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`
const StyledHeader = styled(Column)`
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
`;

const SectionForm = styled(Column)`
  width: 100%;
  align-items: center;
`;

const OrDivider = styled(Row)`
  align-items: center;
  width: 100%;
  margin: 30px 0;
  
  & > div {
    flex: 1;
    height: 1px;
    background: ${colors.grayLight};
  }

  & > p {
    margin: 0 10px;
  }
`;

const SocialLogin = styled(Row)`
  gap: 15px;
`;
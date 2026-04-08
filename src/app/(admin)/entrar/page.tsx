'use client';
import { Column } from "../../../styled/alignment/Column"
import colors from "../../../theme/colors"
import { FullyCentered } from "../../../styled/alignment/Center";
import Text from "../../../components/_UI/Text";
import FieldSet from "../../../components/_UI/FieldSet";
import { Row } from "../../../styled/alignment/Row";
import Button from "../../../components/_UI/Button";
import Icon from "../../../components/_UI/Icon";

import styles from "./SignIn.module.scss";

export default function SignIn() {
  return (
    <FullyCentered className={styles.container} style={{ background: colors.backgroundPrimary }}>
      <FullyCentered className={styles.content}>
        <Column className={styles.cardContainer} style={{ background: colors.white }}>
          <Column className={styles.styledHeader}>
            <img src="/assets/svg/logo.png" alt="Logo Confeitaria Dois Amores" style={{ width: '80px', marginBottom: '12px' }} />
            <Text weight='700' color={colors.night}>Bem-vindo de volta!</Text>
            <Text marginTop={'10px'} size="0.875rem" name='personalized' weight='300' color={colors.nightLight}>
              Não tem uma conta? <a href="#">Crie a sua agora!</a>
            </Text>
          </Column>
          <Column className={styles.sectionForm}>
            <FieldSet variant="squared" label="E-mail" />
            <FieldSet marginTop={'10px'} variant="squared" label="Senha" />

            <Row width="100%" style={{ marginTop: '20px', justifyContent: 'space-between' }}>
              <Row width="auto" verticalCenter>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">
                  <Text marginLeft="5px" name="small">Lembrar</Text>
                </label>
              </Row>
              <a href="#">
                <Text name="small">Esqueceu a senha?</Text>
              </a>
            </Row>
            <Button fullWidth marginTop="20px" path="/inicial">
              Entrar
            </Button>
          </Column>

          <Row className={styles.orDivider}>
            <div style={{ background: colors.grayLight }} />
            <Text>ou continue com</Text>
            <div style={{ background: colors.grayLight }} />
          </Row>

          <Row className={styles.socialLogin}>
            <Button variant="secondary" fullWidth>
              <Icon name="google" />
              <Text marginLeft="10px">Google</Text>
            </Button>
            <Button variant="secondary" fullWidth>
              <Icon name="github" />
              <Text marginLeft="10px">GitHub</Text>
            </Button>
          </Row>

        </Column>
      </FullyCentered>
    </FullyCentered>
  )
}
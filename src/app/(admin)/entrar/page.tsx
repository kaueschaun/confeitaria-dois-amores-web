'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('http://localhost:3001/auth/admin/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Erro ao realizar login.');
      }

      localStorage.setItem('token', data.accessToken);
      router.push('/inicial');
    } catch (err: any) {
      setError(err.message || 'Erro inesperado.');
    } finally {
      setLoading(false);
    }
  };

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
          
          <form onSubmit={handleLogin} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Column className={styles.sectionForm}>
              <FieldSet 
                variant="squared" 
                label="E-mail" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FieldSet 
                marginTop={'10px'} 
                variant="squared" 
                label="Senha" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && (
                <Text name="small" color={colors.danger} marginTop="10px">
                  {error}
                </Text>
              )}

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
              <Button type="submit" fullWidth marginTop="20px" disabled={loading}>
                {loading ? 'Entrando...' : 'Entrar'}
              </Button>
            </Column>
          </form>

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
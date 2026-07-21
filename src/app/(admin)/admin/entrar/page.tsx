'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Column } from "../../../../styled/alignment/Column"
import colors from "../../../../theme/colors"
import { FullyCentered } from "../../../../styled/alignment/Center";
import Text from "../../../../components/_UI/Text";
import FieldSet from "../../../../components/_UI/FieldSet";
import { Row } from "../../../../styled/alignment/Row";
import Button from "../../../../components/_UI/Button";
import Icon from "../../../../components/_UI/Icon";
import { login } from "../../../../services/requests/login";
import { Outfit, Inter } from 'next/font/google';

import styles from "./SignIn.module.scss";

const outfitFont = Outfit({ subsets: ['latin'], weight: ['700'] });
const interFont = Inter({ subsets: ['latin'], weight: ['400'] });

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
      const response = await login.signInAdmin({ email, password });
      localStorage.setItem('token', response.data.accessToken);
      document.cookie = `token=${response.data.accessToken}; path=/; max-age=604800`; // 7 days
      router.push('/inicial');
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Erro inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}></div>
      <div className={styles.content}>
        <Column className={styles.cardContainer}>
          <Column className={styles.styledHeader}>
            <img src="/assets/svg/logo.png" alt="Logo Confeitaria Dois Amores" style={{ width: '80px', marginBottom: '12px' }} />
            <Text name="personalized" size="1.6rem" weight="700" color={colors.night} className={outfitFont.className}>
              Área Administrativa
            </Text>
            <Text name="personalized" size="0.95rem" weight="400" color={colors.nightLight} marginTop="4px" marginBottom="16px" className={interFont.className}>
              Acesso exclusivo para gestão da loja
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
                  <label htmlFor="remember" style={{ cursor: 'pointer' }}>
                    <Text marginLeft="8px" name="personalized" size="0.875rem" weight="400" color={colors.night}>Lembrar</Text>
                  </label>
                </Row>
                <a href="#">
                  <Text name="personalized" size="0.875rem" weight="400" color={colors.night}>Esqueceu a senha?</Text>
                </a>
              </Row>
              <Button type="submit" fullWidth marginTop="20px" disabled={loading}>
                {loading ? 'Entrando...' : 'Entrar'}
              </Button>
            </Column>
          </form>

        </Column>
      </div>
    </div>
  )
}
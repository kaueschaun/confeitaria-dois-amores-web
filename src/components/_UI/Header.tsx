'use client';

import colors from "../../theme/colors"
import Text from "./Text"
import { ShoppingCart, SlidersHorizontal, User } from "lucide-react"
import Button from "./Button"
import { useState } from "react"
import styles from './Header.module.scss';
import { Row } from "../../styled/alignment/Row";
import { Column } from "../../styled/alignment/Column";

export default function Header() {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(true);

  return (
    <>
      <div className={`${styles.header__menuMobile} ${visibleMenu ? styles['header__menuMobile--hidden'] : styles['header__menuMobile--visible']}`}>
        <div className={styles.header__contentMenuMobile}>
          <div className={styles.header__logoRow}>
            <div className={styles.header__contentImage}>
              <img src="/assets/svg/icons/logo2.svg" alt="Logo" />
            </div>
            <Text marginLeft='5px' type="bold" color={colors.night}>Confeitaria Dois Amores</Text>
          </div>
          <div className={styles.header__close} onClick={() => setVisibleMenu(!visibleMenu)}>
            <span />
          </div>
        </div>

        <div className={styles.header__mainMenu}>
          <div className={styles.header__cardRoute}>
            <div className={styles.header__iconRoute}>
              <User size={16} color={colors.secondary} />
            </div>
            <Button variant="outline" path="/entrar">
              <Text marginLeft={'10px'} type="bold" className={styles.header__textButton}>Entrar</Text>
            </Button>
          </div>
          <div className={styles.header__cardRoute}>
            <div className={styles.header__iconRoute}>
              <SlidersHorizontal size={20} color={colors.secondary} />
            </div>
            <Text marginLeft='10px' type="bold" color={colors.secondary}>Filtros</Text>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.header__right}>
            <div className={styles.header__logoRow}>
              <div className={styles.header__contentImage}>
                <img src="/assets/svg/icons/logo2.svg" alt="Logo" />
              </div>
              <Text marginLeft='5px' type="bold">Confeitaria Dois Amores</Text>
            </div>

            <div className={styles.header__filters}>
              <input className={styles.header__fieldSet} type="text" placeholder="Pesquisar" />
              <Button variant="borded">
                <SlidersHorizontal size={16} />
                Filtrar
              </Button>
            </div>
          </div>

          <section className={styles.header__section}>
            <div className={styles.header__accountKart}>
              <div className={styles.header__buttonLogin}>
                <User color={colors.secondary} size={20} />
                <Button variant="outline" path="/entrar">Entrar</Button>
              </div>

              <div className={styles.header__kar}>
                <ShoppingCart color={colors.white} size={20} />
              </div>
            </div>
          </section>

          <div className={`${styles.header__mobile} ${visibleMenu ? '' : styles['header__mobile--hidden']}`}>
            <div className={styles.header__menuButton} onClick={() => setVisibleMenu(!visibleMenu)}>
              <div className={styles.header__actionMenuMobile} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
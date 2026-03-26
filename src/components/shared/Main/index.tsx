'use client';
import Header from "../../_UI/Header";
import Text from "../../_UI/Text";
import { type ReactNode } from "react";
import styles from './Main.module.scss';



export default function Home({ text, children }: { text?: string, children?: ReactNode; }) {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.main__content}>
        <Text textAlign="left" name="subtitle">{text}</Text>
        <main className={styles.main__styledMain}>
          {children}
        </main>
      </div>
    </div>
  )
}
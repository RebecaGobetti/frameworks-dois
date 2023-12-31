import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Boca web</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className={styles.App}>
        <h1>Boca Web</h1><hr></hr>
        <p>O BocaWeb foi criado com o propósito de permitir que pessoas com deficiência visual tenham acesso a informações visuais através de audiodescrição. Estamos atualmente reunindo uma comunidade robusta de voluntários dispostos a criar descrições auditivas para uma variedade de objetos.</p>
        <p>Se você se interessou, faça o seu cadastro, explore o portal e, caso queira se juntar a nós como colaborador voluntário, não hesite em nos contatar. Estamos ansiosos para receber a sua contribuição!</p>
      </div>
      <Footer></Footer>
    </>
  )
}

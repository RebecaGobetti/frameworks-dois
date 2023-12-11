import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from './components/Header'
import Footer from './components/Footer'

import styles from '../styles/Objetos.module.css';

function Users({ obj }) {
    return (
        <div>
            <Head>
                <title>Objetos</title>
            </Head>
            <Header></Header>
            <div id={styles.objeto}>
                <h1> Descricao de objetos </h1><br></br>

                {obj.map((user, index) => (
                    <div key={index}>
                        <h2>{user.nome}</h2>
                        <hr></hr>
                        <p>{user.descricao}</p>
                        <br></br>
                    </div>
                ))}

            </div>
            <Footer></Footer>
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=escola')
    const repo = await res.json()
    const obj = await repo;
    return {
        props: { obj }
    }
})
export default Users;
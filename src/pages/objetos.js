import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from './components/Header'
import Footer from './components/Footer'

import styles from '../styles/Objetos.module.css';

function Users({ users }) {
    return (
        <div>
            <Head>
                <title>Objetos</title>
            </Head>
            <Header></Header>
            <div id={styles.objetos}>
                <h1> Listade objetos </h1><br></br>

                {users.map((user, index) => (
                    <Link href='/profile/[id]' as={`/profile/${index}`}>
                        <div key={user._id}> <p> {user.nome} </p> </div>
                    </Link>
                ))}
                
            </div>
            <Footer></Footer>
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=escola')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})
export default Users;
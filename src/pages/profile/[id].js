import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

import styles from '../../styles/Objetos.module.css';

function Profile({ obj = {} }) {
    return (
        <div>
            <Head>
                <title>Descricao</title>
            </Head>
            <Header></Header>
            <div id={styles.objetos}>
                <h1>{obj.nome}</h1><hr></hr>
                <p>{obj.usuario}</p><br></br>
                <p>{obj.descricao}</p>
            </div>
            <Footer></Footer>
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=escola')
    const repo = await res.json()
    const obj = await repo[context.params.id];
    return {
        props: { obj }
    }
})

export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=escola')
    const repo = await res.json()
    const users = await repo;
    const paths = users.map((obj, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}

export default Profile;
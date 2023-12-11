import styles from '../../styles/Components.module.css'


export default function Header({ obj }) {
    return (
        <div className={styles.header}>
            <nav id={styles.nav}>
                <h1>Rebeca noticias</h1>
                <a href='/'>Home</a>
                <a href='/objetos'>Objetos</a>
                <a href='/descricao'>Descricao</a>
            </nav>

        </div>
    )
}

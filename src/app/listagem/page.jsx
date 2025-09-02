import styles from './listagem.module.css';

export default function Listagem() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Listagem de Endereços</h1>
                <p className={styles.description}>
                    Aqui você pode visualizar a listagem de endereços disponíveis na API.
                </p>
            </div>
        </div>
    )
}
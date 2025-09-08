import Link from "next/link";
import styles from "./page.module.css";


export default function Descricao() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Valorant API</h1>
                
                <div className={styles.apiInfo}>
                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Documentação Oficial</h3>
                        <a href="https://dash.valorant-api.com/" target="_blank" className={styles.link}>
                            https://dash.valorant-api.com/
                        </a>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>URL Base</h3>
                        <code className={styles.code}>https://valorant-api.com/v1</code>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Endpoint Escolhido</h3>
                        <code className={styles.code}>/agents</code>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Atributos da Resposta</h3>
                        <ul className={styles.attributesList}>
                            <li><code>uuid</code> - Identificador único do agente</li>
                            <li><code>displayName</code> - Nome de exibição do agente</li>
                            <li><code>description</code> - Descrição do agente</li>
                            <li><code>displayIcon</code> - URL do ícone do agente</li>
                            <li><code>role</code> - Função do agente (Duelist, Controller, etc.)</li>
                            <li><code>abilities</code> - Habilidades do agente</li>
                            <li><code>isPlayableCharacter</code> - Se o agente é jogável</li>
                        </ul>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Descrição</h3>
                        <p className={styles.description}>
                            A <span className={styles.highlight}>Valorant API</span> é uma API não oficial gratuita que fornece dados completos 
                            sobre o jogo Valorant da Riot Games. Ela oferece endpoints para consulta de agentes, armas, mapas, 
                            cartas de jogador e muito mais. O endpoint de agentes permite buscar informações detalhadas de todos 
                            os personagens jogáveis do Valorant, incluindo suas habilidades, roles, ícones e descrições de forma 
                            rápida e organizada.
                        </p>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/home" className={styles.buttonSecondary}>
                        Voltar para o início
                    </Link>
                    <Link href="/listagem" target="_blank" className={styles.buttonPrimary}>
                        Listagem
                    </Link> 
                </div>
            </div>
        </div>
    )
}
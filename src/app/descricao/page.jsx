import Link from "next/link";
import styles from "./page.module.css";

export default function Descricao() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>BrasilAPI</h1>
                
                <div className={styles.apiInfo}>
                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Documentação Oficial</h3>
                        <a href="https://brasilapi.com.br/docs" target="_blank" className={styles.link}>
                            https://brasilapi.com.br/docs
                        </a>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>URL Base</h3>
                        <code className={styles.code}>https://brasilapi.com.br/api</code>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Endpoint Escolhido</h3>
                        <code className={styles.code}>/cep/v1/{"{cep}"}</code>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Atributos da Resposta</h3>
                        <ul className={styles.attributesList}>
                            <li><code>cep</code> - Código de Endereçamento Postal</li>
                            <li><code>state</code> - Estado (sigla)</li>
                            <li><code>city</code> - Cidade</li>
                            <li><code>neighborhood</code> - Bairro</li>
                            <li><code>street</code> - Logradouro</li>
                            <li><code>service</code> - Serviço utilizado na consulta</li>
                        </ul>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Descrição</h3>
                        <p className={styles.description}>
                            A <span className={styles.highlight}>BrasilAPI</span> é uma API gratuita que centraliza dados públicos brasileiros. 
                            Ela oferece endpoints para consulta de CEP, CNPJ, bancos, códigos DDD, feriados nacionais e muito mais. 
                            O endpoint de CEP permite buscar informações completas de endereço a partir de qualquer CEP válido do Brasil, 
                            fornecendo dados como cidade, estado, bairro e logradouro de forma rápida e confiável.
                        </p>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="https://brasilapi.com.br/docs" target="_blank" className={styles.buttonPrimary}>
                        Ver a documentação da API
                    </Link>
                    <Link href="/home" className={styles.buttonSecondary}>
                        Voltar para o início
                    </Link>
                </div>
            </div>
        </div>
    )
}
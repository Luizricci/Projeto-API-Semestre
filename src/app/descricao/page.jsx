"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useState } from "react";

export default function Descricao() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleNavigateToListagem = () => {
        setLoading(true);
        router.push('/listagem');
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Jikan API (MyAnimeList)</h1>
                
                <div className={styles.apiInfo}>
                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Documentação Oficial</h3>
                        <a href="https://docs.api.jikan.moe/" target="_blank" className={styles.link}>
                            https://docs.api.jikan.moe/
                        </a>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>URL Base</h3>
                        <code className={styles.code}>https://api.jikan.moe/v4</code>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Endpoint Escolhido</h3>
                        <code className={styles.code}>/anime</code>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Atributos da Resposta</h3>
                        <ul className={styles.attributesList}>
                            <li><code>mal_id</code> - Identificador único do anime no MyAnimeList</li>
                            <li><code>title</code> - Título principal do anime</li>
                            <li><code>title_japanese</code> - Título em japonês</li>
                            <li><code>synopsis</code> - Sinopse/descrição do anime</li>
                            <li><code>images</code> - URLs das imagens (poster, capas)</li>
                            <li><code>score</code> - Avaliação média dos usuários</li>
                            <li><code>episodes</code> - Número total de episódios</li>
                            <li><code>status</code> - Status de exibição (Em exibição, Finalizado, etc.)</li>
                            <li><code>type</code> - Tipo do anime (TV, Movie, OVA, etc.)</li>
                            <li><code>genres</code> - Gêneros do anime</li>
                            <li><code>studios</code> - Estúdios de animação</li>
                            <li><code>year</code> - Ano de lançamento</li>
                            <li><code>season</code> - Temporada de lançamento</li>
                            <li><code>duration</code> - Duração por episódio</li>
                        </ul>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Descrição</h3>
                        <p className={styles.description}>
                            A <span className={styles.highlight}>Jikan API</span> é uma API REST não oficial e gratuita que fornece 
                            dados completos do MyAnimeList (MAL). Ela oferece endpoints para consulta de animes, mangás, 
                            personagens, usuários e muito mais. O endpoint de animes permite buscar informações detalhadas 
                            de milhares de animes, incluindo sinopses, avaliações, gêneros, estúdios e imagens de alta 
                            qualidade de forma rápida e organizada. É amplamente utilizada por desenvolvedores para criar 
                            aplicações relacionadas ao mundo dos animes.
                        </p>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Recursos Principais</h3>
                        <ul className={styles.attributesList}>
                            <li>📊 <strong>Paginação:</strong> Suporte a navegação por páginas com 25 itens cada</li>
                            <li>🔍 <strong>Busca:</strong> Filtros por gênero, ano, status e tipo</li>
                            <li>🖼️ <strong>Imagens:</strong> URLs para posters e capas em diferentes resoluções</li>
                            <li>⭐ <strong>Avaliações:</strong> Scores e rankings baseados na comunidade MAL</li>
                            <li>📺 <strong>Detalhes:</strong> Informações completas sobre episódios, estúdios e staff</li>
                            <li>🆓 <strong>Gratuita:</strong> Sem necessidade de autenticação ou chaves de API</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link href="/home" className={styles.buttonSecondary}>
                        Voltar para o início
                    </Link>
                    <button 
                        onClick={handleNavigateToListagem}
                        disabled={loading}
                        className={`${styles.buttonPrimary} ${loading ? styles.buttonLoading : ''}`}
                    >
                        {loading ? (
                            <>
                                <span className={styles.spinner}></span>
                                Carregando...
                            </>
                        ) : (
                            'Listagem de Animes'
                        )}
                    </button> 
                </div>
            </div>
        </div>
    )
}
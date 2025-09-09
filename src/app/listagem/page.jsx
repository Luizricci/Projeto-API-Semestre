"use client";
import styles from "./listagem.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Listagem() {
    const [animes, setAnimes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetchAnimes(currentPage);
    }, [currentPage]);

    

    async function fetchAnimes(page) {
        setLoading(true);
        try {
            const cache = sessionStorage.getItem(`Animes_${page}`);
            if (cache) {
                const parsed = JSON.parse(cache);
                setAnimes(parsed.data);
                setTotalItems(parsed.pagination.items.total);
                return;
            }
            const { data } = await axios.get(`https://api.jikan.moe/v4/anime?page=${page}`);
            setAnimes(data.data);
            setTotalItems(data.pagination.items.total);
            sessionStorage.setItem(`Animes_${page}`, JSON.stringify(data));

            const keys = Object.keys(sessionStorage).filter(key => key.startsWith('Animes_'));
            
            if (keys.length > 6) {
                // Ordena as chaves para pegar a mais antiga (menor número de página)
                const sortedKeys = keys.sort((a, b) => {
                    const pageA = parseInt(a.replace('Animes_', ''));
                    const pageB = parseInt(b.replace('Animes_', ''));
                    return pageA - pageB;
                });
                
                // Remove a mais antiga (primeira da lista ordenada)
                sessionStorage.removeItem(sortedKeys[0]);
                console.log(`🗑️ Removido do cache: ${sortedKeys[0]}`);
            }
        } catch (err) {
            console.error("Erro ao buscar animes:", err);
        } finally {
            setLoading(false);
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    const handleAnimeClick = (animeId) => {
        router.push(`/listagem/${animeId}`);
    };

    return (
        <div className={styles.container}>
            <Link href="/descricao" className={styles.backButton}>
                <ArrowLeftOutlined />
            </Link>

            <div className={styles.card}>
                <h1 className={styles.title}>Listagem de Animes</h1>
                <p className={styles.description}>
                    Aqui você pode visualizar a listagem de animes disponíveis na API.
                </p>

                {loading ? (
                    <div className={styles.loading}>Carregando...</div>
                ) : (
                    <>
                        <div className={styles.grid}>
                            {animes.map((anime) => (
                                <div
                                    key={anime.mal_id}
                                    className={styles.animeCard}
                                    onClick={() => handleAnimeClick(anime.mal_id)}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src={anime.images.jpg.image_url}
                                            alt={anime.title}
                                            className={styles.animeImage}
                                        />
                                    </div>
                                    <h2 className={styles.animeTitle}>{anime.title}</h2>
                                    <p>Nota: {anime.score}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.paginationContainer}>
                            <Pagination
                                current={currentPage}
                                total={totalItems}
                                pageSize={25}
                                onChange={handlePageChange}
                                showSizeChanger={false}
                                showQuickJumper
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}


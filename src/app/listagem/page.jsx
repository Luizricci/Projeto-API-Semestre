"use client";
import styles from './listagem.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Pagination } from "antd";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
            const response = await axios.get(`https://api.jikan.moe/v4/anime?page=${page}`);
            setAnimes(response.data.data);
            setTotalItems(response.data.pagination.items.total);
            console.log(response.data.data);
        } catch (error) {
            console.error('Erro ao buscar os animes:', error);
        } finally {
            setLoading(false);
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleAnimeClick = (animeId) => {
        router.push(`/listagem/${animeId}`);
    };

    return (
        <div className={styles.container}>
            <Link href="/descricao" className={styles.backButton} >
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
                                    onClick={() => handleAnimeClick(anime.mal_id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className={styles.imageContainer}>
                                        <img 
                                            src={anime.images.jpg.image_url} 
                                            alt={anime.title} 
                                            className={styles.animeImage} 
                                        />
                                    </div>
                                    <h2 className={styles.animeTitle}>{anime.title}</h2>
                                    <p>Score: {anime.score}</p>
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
                                showQuickJumper={true}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
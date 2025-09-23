"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from 'next/link';
import { ArrowLeftOutlined } from '@ant-design/icons';
import axios from "axios";
import styles from './[id].module.css';

export default function AnimeDetails() {
    const params = useParams();
    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnime = async () => {
            if (!params.id) return;

            setLoading(true);
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/anime/${params.id}`);
                setAnime(response.data.data);
            } catch (error) {
                console.error("Erro ao buscar anime:", error);
                setError("Anime não encontrado");
            } finally {
                setLoading(false);
            }
        };

        fetchAnime();
    }, [params.id]);

    if (loading) {
        return (
            <div className={styles.container}>
                <Link href="/listagem" className={styles.backButton}>
                    <ArrowLeftOutlined />
                </Link>
                <div className={styles.loading}>Carregando...</div>
            </div>
        );
    }

    if (error || !anime) {
        return (
            <div className={styles.container}>
                <Link href="/listagem" className={styles.backButton}>
                    <ArrowLeftOutlined />
                </Link>
                <div className={styles.error}>
                    <h2>Erro</h2>
                    <p>{error || "Anime não encontrado"}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Link href="/listagem" className={styles.backButton}>
                <ArrowLeftOutlined />
            </Link>
            
            <div className={styles.animeDetail}>
                <div className={styles.animeHeader}>
                    <img 
                        src={anime.images.jpg.large_image_url || anime.images.jpg.image_url}
                        alt={anime.title}
                        className={styles.animeImage}
                    />
                    
                    <div className={styles.animeInfo}>
                        <h1 className={styles.animeTitle}>{anime.title}</h1>
                        
                        <div className={styles.animeScore}>
                            ⭐ Nota: {anime.score || 'N/A'}
                        </div>
                        
                        <div className={styles.animeGenres}>
                            {anime.genres?.map((genre, index) => (
                                <span key={index} className={styles.genre}>
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                        
                        <div className={styles.animeStatus}>Status: {anime.status}</div>
                        <div className={styles.animeEpisodes}>Episódios: {anime.episodes || 'N/A'}</div>
                        <div className={styles.animeDuration}>Duração: {anime.duration}</div>
                        <div className={styles.animeYear}>Ano: {anime.year || 'N/A'}</div>
                    </div>
                </div>
                
                <div className={styles.animeSynopsis}>
                    <h2 className={styles.synopsisTitle}>Sinopse</h2>
                    <p className={styles.synopsisText}>
                        {anime.synopsis || 'Sinopse não disponível.'}
                    </p>
                </div>
            </div>
        </div>
    );
}
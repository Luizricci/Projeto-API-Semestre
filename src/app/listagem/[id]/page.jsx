"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import styles from './[id].module.css';

export default function AnimeDetail() {
    const params = useParams();
    const router = useRouter();
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

    const handleBackClick = () => {
        router.back();
    };

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                    <p>Carregando...</p>
                </div>
            </div>
        );
    }

    if (error || !anime) {
        return (
            <div className={styles.container}>
                <div className={styles.error}>
                    <h2>Erro</h2>
                    <p>{error || "Anime não encontrado"}</p>
                    <button onClick={handleBackClick} className={styles.backButton}>
                        Voltar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <button onClick={handleBackClick} className={styles.backButton}>
                    ← Voltar
                </button>
                
                <div className={styles.animeDetails}>
                    <div className={styles.imageSection}>
                        <img
                            src={anime.images.jpg.large_image_url}
                            alt={anime.title}
                            width={400}
                            height={600}
                            className={styles.animeImage}
                        />
                    </div>
                    
                    <div className={styles.infoSection}>
                        <h1 className={styles.title}>{anime.title}</h1>
                        
                        <div className={styles.basicInfo}>
                            <p><strong>Título em Japonês:</strong> {anime.title_japanese || 'N/A'}</p>
                            <p><strong>Tipo:</strong> {anime.type}</p>
                            <p><strong>Status:</strong> {anime.status}</p>
                            <p><strong>Episódios:</strong> {anime.episodes || 'N/A'}</p>
                            <p><strong>Duração:</strong> {anime.duration}</p>
                            <p><strong>Avaliação:</strong> {anime.score || 'N/A'}</p>
                            <p><strong>Ano:</strong> {anime.year || 'N/A'}</p>
                            <p><strong>Temporada:</strong> {anime.season || 'N/A'}</p>
                        </div>

                        <div className={styles.genres}>
                            <strong>Gêneros:</strong>
                            <div className={styles.genresList}>
                                {anime.genres?.map((genre) => (
                                    <span key={genre.mal_id} className={styles.genre}>
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.synopsis}>
                            <h3>Sinopse</h3>
                            <p>{anime.synopsis || 'Sinopse não disponível'}</p>
                        </div>

                        {anime.studios && anime.studios.length > 0 && (
                            <div className={styles.studios}>
                                <strong>Estúdios:</strong>
                                <div className={styles.studiosList}>
                                    {anime.studios.map((studio) => (
                                        <span key={studio.mal_id} className={styles.studio}>
                                            {studio.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
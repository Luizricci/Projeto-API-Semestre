"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from 'next/link';
import { ArrowLeftOutlined, EditOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons';
import axios from "axios";
import styles from './[id].module.css';

export default function AnimeDetails() {
    const params = useParams();
    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({});

    useEffect(() => {
        const fetchAnime = async () => {
            if (!params.id) return;

            setLoading(true);
            try {
                // Primeiro tenta buscar do localStorage
                const localAnimes = JSON.parse(localStorage.getItem('editedAnimes') || '{}');
                const localAnime = localAnimes[params.id];
                
                if (localAnime) {
                    setAnime(localAnime);
                    setEditForm(localAnime);
                } else {
                    // Busca da API se não estiver no localStorage
                    const response = await axios.get(`https://api.jikan.moe/v4/anime/${params.id}`);
                    setAnime(response.data.data);
                    setEditForm(response.data.data);
                }
            } catch (error) {
                console.error("Erro ao buscar anime:", error);
                setError("Anime não encontrado");
            } finally {
                setLoading(false);
            }
        };

        fetchAnime();
    }, [params.id]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditForm(anime); // Restaura os dados originais
    };

    const handleSaveEdit = () => {
        // Salva no localStorage
        const localAnimes = JSON.parse(localStorage.getItem('editedAnimes') || '{}');
        localAnimes[params.id] = editForm;
        localStorage.setItem('editedAnimes', JSON.stringify(localAnimes));
        
        // Atualiza o estado
        setAnime(editForm);
        setIsEditing(false);
        
        // Feedback visual (aqui você pode adicionar toast depois)
        alert('Anime editado com sucesso!');
    };

    const handleInputChange = (field, value) => {
        setEditForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

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
            <div className={styles.header}>
                <Link href="/listagem" className={styles.backButton}>
                    <ArrowLeftOutlined />
                </Link>
                
                {!isEditing ? (
                    <button onClick={handleEdit} className={styles.editButton}>
                        <EditOutlined /> Editar
                    </button>
                ) : (
                    <div className={styles.editActions}>
                        <button onClick={handleSaveEdit} className={styles.saveButton}>
                            <SaveOutlined /> Salvar
                        </button>
                        <button onClick={handleCancelEdit} className={styles.cancelButton}>
                            <CloseOutlined /> Cancelar
                        </button>
                    </div>
                )}
            </div>
            
            <div className={styles.animeDetail}>
                <div className={styles.animeHeader}>
                    <img 
                        src={anime.images.jpg.large_image_url || anime.images.jpg.image_url}
                        alt={anime.title}
                        className={styles.animeImage}
                    />
                    
                    <div className={styles.animeInfo}>
                        {isEditing ? (
                            <div className={styles.editForm}>
                                <input
                                    type="text"
                                    value={editForm.title || ''}
                                    onChange={(e) => handleInputChange('title', e.target.value)}
                                    className={styles.editInput}
                                    placeholder="Título do anime"
                                />
                                
                                <input
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="10"
                                    value={editForm.score || ''}
                                    onChange={(e) => handleInputChange('score', parseFloat(e.target.value))}
                                    className={styles.editInput}
                                    placeholder="Nota (0-10)"
                                />
                                
                                <input
                                    type="text"
                                    value={editForm.status || ''}
                                    onChange={(e) => handleInputChange('status', e.target.value)}
                                    className={styles.editInput}
                                    placeholder="Status"
                                />
                                
                                <input
                                    type="number"
                                    value={editForm.episodes || ''}
                                    onChange={(e) => handleInputChange('episodes', parseInt(e.target.value))}
                                    className={styles.editInput}
                                    placeholder="Número de episódios"
                                />
                                
                                <input
                                    type="text"
                                    value={editForm.duration || ''}
                                    onChange={(e) => handleInputChange('duration', e.target.value)}
                                    className={styles.editInput}
                                    placeholder="Duração"
                                />
                                
                                <input
                                    type="number"
                                    value={editForm.year || ''}
                                    onChange={(e) => handleInputChange('year', parseInt(e.target.value))}
                                    className={styles.editInput}
                                    placeholder="Ano"
                                />
                            </div>
                        ) : (
                            <>
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
                            </>
                        )}
                    </div>
                </div>
                
                <div className={styles.animeSynopsis}>
                    <h2 className={styles.synopsisTitle}>Sinopse</h2>
                    {isEditing ? (
                        <textarea
                            value={editForm.synopsis || ''}
                            onChange={(e) => handleInputChange('synopsis', e.target.value)}
                            className={styles.editTextarea}
                            placeholder="Sinopse do anime"
                            rows={6}
                        />
                    ) : (
                        <p className={styles.synopsisText}>
                            {anime.synopsis || 'Sinopse não disponível.'}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
import styles from '../styles/AnimeCard.module.css';
import { DeleteOutlined } from '@ant-design/icons';

const AnimeCard = ({ anime, onAnimeClick }) => {
    const handleClick = () => {
        onAnimeClick(anime.mal_id);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        console.log(`Delete ${anime.title}`);
    };

    return (
        <div className={styles.animeCard}>
            <div className={styles.imageContainer} onClick={handleClick}>
                <img
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    className={styles.animeImage}
                />
            </div>
            <div className={styles.cardContent} onClick={handleClick}>
                <h2 className={styles.animeTitle}>{anime.title}</h2>
                <div className={styles.cardFooter}>
                    <p className={styles.animeScore}>Nota: {anime.score || 'N/A'}</p>
                    <div className={styles.iconContainer}>
                        <DeleteOutlined 
                            className={styles.deleteIcon} 
                            onClick={handleDelete}
                            title="Remover anime"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeCard;
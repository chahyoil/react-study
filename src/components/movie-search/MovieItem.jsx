import styles from './MovieItem.module.css';

export default function MovieItem({movie}) {
  return (
    <li className={styles.movie_item}>
        <span className={styles.year}>{movie.Year}</span>
        <div className={styles.img_wrap}>
            <img src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/400' : movie.Poster} alt={movie.Title} />
        </div>
        <div className={styles.txt_wrap}>
            <em className={styles.movie_type}>{movie.Type}</em>
            <strong className={styles.movie_title}>{movie.Title}</strong>
        </div>
    </li>
  )
}

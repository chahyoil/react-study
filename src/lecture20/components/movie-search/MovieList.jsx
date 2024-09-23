import styles from './MovieList.module.css';
import MovieItem from './MovieItem';

export default function MovieList({movies}) {
  return (
    <ul className={styles.movie_list}>
        {movies? movies.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
        )) : <p>영화정보가 없습니다.</p>}
    </ul>
  )
}

import styles from './MovieType.module.css';

const initTypes = ['All', 'Movie', 'Series', 'Episode'];

export default function MovieType({activeType, setType}) {

    function handleType(e) {
        setType(e.target.textContent);
    }

    return (
        <div className={styles.movie_type}>
            {initTypes.map((t) => (
                // activeType과 버튼의 고유값을 비교하여 active 클래스 걸기
                <button key={t}
                        type='button' 
                        onClick={handleType}
                        className={activeType === t ? styles.active : ''}>{t}</button>
            ))}
        </div>
    )
}

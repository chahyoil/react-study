import styles from './MovieSearch.module.css';

import { useRef } from 'react';

export default function MovieSearch({ setTitle, setType }) {
    const inputRef = useRef(null);

    const handleSearch = () => {
        // const title = document.querySelector('input[type="search"]').value;
        const title = inputRef.current.value;
        if (!title || title.trim() === '') {
            return;
        }
        setTitle(title);
        setType('All');
    }

    return (
        <div className={styles.movie_search}>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="search" ref={inputRef} placeholder="영화제목 검색" />
                <button type="submit" onClick={handleSearch}>검색</button>
            </form>
        </div>
    )
}

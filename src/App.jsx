import './App.css';
import React, {useEffect, useState, useRef } from 'react';

import MovieList from './components/movie-search/MovieList';
import MovieSearch from './components/movie-search/MovieSearch';
import MovieType from './components/movie-search/MovieType';
import Pagination from './components/Pagination';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=fa1b6361'

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('bbc');
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [type, setType] = useState('All');

  // 외부데이터 가져오기(fetch)
  // fetch()
  // -then으로 연결하는 방식
  // -async/await 사용
  useEffect(() => {
    //비동기 동작을 동기화 하겠다!
    const fetchMovies = async (title) => {
      // Promise 객체를 리턴하는 함수앞에 await 사용하여 해당 함수가 리턴할때까지 기다리게 함
      const response = await fetch(`${API_URL}&s=${title}&page=${page}${type !== 'All' ? `&type=${type}` : ''}`);
      // json 객체 -> js 객체로 변환
      const data = await response.json();
      
      // 년도기준 내림차순 정렬
      const sortedData = data.Search?.sort((a, b) => a.Year < b.Year ? 1 : -1);
      
      setMovies(sortedData);
      setTotalPage(Math.ceil(data.totalResults / 10));
    };
    fetchMovies(title);
  }, [title, page, type]);
  
  return (
    <div className='app'>
      <h2>MovieLand</h2>
      <MovieSearch setTitle={setTitle} setType={setType} />
      <MovieType setType={setType} activeType={type} />
      <MovieList movies={movies} />
      <Pagination page={page} totalPage={totalPage} setPage={setPage} />
    </div>
  );
}
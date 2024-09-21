// App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/home/Layout';
import Home from './pages/Home';
import ReactQuery from './pages/ReactQuery';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css';

export default function App() {
  return (
  <>
    <Routes>
      {/* 루트 공통 레이아웃 */}
      <Route path="/" element={<Layout />}>
        {/* 인덱스 라우트 */}
        <Route index element={<Home />} />
        <Route path="/react-query" element={<ReactQuery />} />
      </Route>
    </Routes>
    <ReactQueryDevtools initialIsOpen={false} />
  </>
  );
}





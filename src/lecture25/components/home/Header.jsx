// components/Header.jsx
// 라우터 링크 컴포넌트
import { Link } from 'react-router-dom';
import Gnb from './Gnb';

export default function Header() {
  return (
    <nav className="gnb_wrap">
      <Gnb />
    </nav>
  );
}
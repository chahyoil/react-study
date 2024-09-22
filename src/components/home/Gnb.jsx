import { Link } from 'react-router-dom';
const menus = [
    {
        menu: 'Home',
        path: '/',
    },
    {
        menu: 'React Query',
        path: '/react-query',
    },
    {
        menu: 'Parallel Query',
        path: '/parallel-query',
    },
]


export default function Gnb() {
  return (
    <ul className='gnb'>
        {menus.map((item) => (
            <li key={item.menu}>
                <Link to={item.path}>{item.menu}</Link>
            </li>
        ))}
    </ul>
  )
}


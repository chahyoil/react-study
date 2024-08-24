import './App.css';
import Profile from './components/Profile.jsx';

export default function App() {
  return (
    <Profile
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
        size={'b'}
        border={'5px solid red'}
      />
  )
}
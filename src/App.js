import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import Mission from './pages/Mission';
import Dragon from './pages/Dragon';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="/" element={<Rockets />} />
        <Route path="mission" element={<Mission />} />
        <Route path="dragon" element={<Dragon />} />
      </Routes>
    </div>
  );
}

export default App;

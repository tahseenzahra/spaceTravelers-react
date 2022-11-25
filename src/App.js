import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Redux/configureStore';

import Header from './component/Header';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import Mission from './pages/Mission';
import Dragon from './pages/Dragon';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="/" element={<Rockets />} />
          <Route path="mission" element={<Mission />} />
          <Route path="dragon" element={<Dragon />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

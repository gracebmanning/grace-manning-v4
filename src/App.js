import './App.css';
import Home from './components/Home';
import Research from './components/Research/research';
import Cowculator from './components/Cowculator/cowculator';
import PrivacyPolicy from './components/Cowculator/privacypolicy';
import Support from './components/Cowculator/support';
import Photography from './components/Photography/photography';
import Design from './components/Design/design';
import PageDoesNotExist from './components/404';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/undergrad-research' element={<Research/>} />
          <Route path='/cowculator' element={<Cowculator/>} />
          <Route path='cowculator/privacy' element={<PrivacyPolicy/>} />
            <Route path='cowculator/support' element={<Support/>} />
          <Route path='/photography' element={<Photography/>} />
          <Route path='/design' element={<Design/>} />
          <Route path='*' element={<PageDoesNotExist/>} />
        </Routes>
    </div>
  );
}

export default App;

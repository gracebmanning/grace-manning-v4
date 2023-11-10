import './App.css';
import Home from './components/Home';
import Research from './components/Research/research';
import Cowculator from './components/Cowculator/cowculator';
import Photography from './components/Photography/photography';
import Design from './components/Design/design';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/undergrad-research' element={<Research/>} />
          <Route path='/cowculator' element={<Cowculator/>} />
          <Route path='/photography' element={<Photography/>} />
          <Route path='/design' element={<Design/>} />
          <Route path='*' element={<Home/>} />
        </Routes>
    </div>
  );
}

export default App;

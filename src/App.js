import './App.css';
import Home from './components/Home';
import Research from './components/Research/research';
import Cowculator from './components/Cowculator/cowculator';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/undergrad-research' element={<Research/>} />
          <Route path='/cowculator' element={<Cowculator/>} />
        </Routes>
    </div>
  );
}

export default App;

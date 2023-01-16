import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import PokemonPage from './components/PokemonPage';

function App() {

  return (
    <div>
      <Header />
      <nav>
        <NavLink to="/">PokemonList</NavLink>
        <NavLink to="/pokemon/:name">PokemonPage</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<PokemonList />}></Route>
        <Route path='/pokemon/:name' element={<PokemonPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

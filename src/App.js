import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import Contacto from './pages/contacto/contacto';
import Pokemones from './pages/pokemones/pokemones';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='body'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<h1>Page not Found</h1>} />
        </Routes>
        </div>
      </Router>
        
    </div>
  );
}

export default App;

import {BrowserRouter, Routes, Route, Link} from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import './App.css';

function App() {


  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/about">Про нас</Link></li>
          <li><Link to="/contact">Контакти</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

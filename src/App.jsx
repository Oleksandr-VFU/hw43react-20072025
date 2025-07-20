import {BrowserRouter, Routes, Route, NavLink} from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <h1 className="project-title">Вступ до маршрутизації в React з використанням React Router</h1>
      <nav>
        <ul>
          <li><NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Головна</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'active-link' : ''}>Про нас</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active-link' : ''}>Контакти</NavLink></li>
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

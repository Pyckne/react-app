import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './style.css';

function NavBar() {
  return (
    <header className="NavBar-header">
        <div className="NavBar-logo-conteiner">
          <Link to="/">Francia's Shop</Link>
        </div>
        <nav className="NavBar-container">
            <ul className="NavBar-list">
                <li className="NavBar-item">
                  <Link to="/">Inicio</Link>
                </li>
                <li className="NavBar-item">
                  <Link to="/category/1">Accesorios</Link>
                </li>
                <li className="NavBar-item">
                  <Link to="/category/2">Muebles</Link>
                </li>
                <li className="NavBar-item">
                <Link to="/cart"><CartWidget /></Link>
                </li>
            </ul>
        </nav>
    </header>
    
  );
}

export default NavBar;
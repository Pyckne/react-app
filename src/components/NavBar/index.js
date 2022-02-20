import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './style.css';

function NavBar() {
  const activeStyle = {
    color: '#000',
    backgroundColor: '#c4bebe',
    borderRadius: '20px',
  };
  
  return (
    <header className="NavBar-header">
        <div className="NavBar-logo-conteiner">
          <Link to="/">Francia's Shop</Link>
        </div>
        <nav className="NavBar-container">
            <ul className="NavBar-list">
                <li className="NavBar-item">
                  <NavLink
                      to="/"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Inicio
                  </NavLink>
                </li>
                <li className="NavBar-item">
                  <NavLink
                      to="/category/1"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Accesorios
                  </NavLink>
                </li>
                <li className="NavBar-item">
                  <NavLink
                      to="/category/2"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Muebles
                  </NavLink>
                </li>
                <li className="NavBar-item">
                  <NavLink
                      to="/cart"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      <CartWidget />
                  </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default NavBar;
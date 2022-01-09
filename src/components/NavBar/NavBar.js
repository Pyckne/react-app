import './NavBar.css';

function NavBar() {
  return (
    <header className="NavBar-header">
        <div className="NavBar-logo-conteiner">
            <a className="NavBar-brand" href="index.html">Francia's Shop</a>
        </div>
        <nav className="NavBar-container">
            <ul className="NavBar-list">
                <li className="NavBar-item"><a href="index.html" className="NavBar-item-active">Inicio</a></li>
                <li className="NavBar-item"><a href="index.html">Destacado</a></li>
                <li className="NavBar-item"><a href="index.html">Ofertas</a></li>
                <li className="NavBar-item"><a href="index.html">Promos</a></li>
                <li className="NavBar-item"><a href="index.html">Otras ofertas</a></li>
            </ul>
        </nav>
    </header>
    
  );
}

export default NavBar;
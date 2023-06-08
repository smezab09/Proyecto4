import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mx-3" style={{ color: 'lightcoral' }}>
          Gosal&apos;s Pizza
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link mx-3" style={{ color: 'lightcoral' }}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reserva" className="nav-link mx-3" style={{ color: 'lightcoral' }}>
                Reserva
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link mx-3" style={{ color: 'lightcoral' }}>
                Menú
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link mx-3" style={{ color: 'lightcoral' }}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

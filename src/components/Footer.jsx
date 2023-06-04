import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px', position: 'relative', bottom: 'auto'  }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h4 style={{ color: 'lightcoral' }}>Gosal&apos;s Pizza</h4>
            <p style={{ color: 'lightcoral' }}>2023 &copy; Todos los derechos reservados</p>
          </div>
          <div className="col-sm-6">
            <h4 style={{ color: 'lightcoral' }}>Síguenos en redes sociales</h4>
            <div>
              <a href="https://twitter.com/gosalspizza" target="_blank" rel="noopener noreferrer" style={{ color: 'lightcoral' }}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              {' | '}
              <a href="https://www.facebook.com/gosalspizza" target="_blank" rel="noopener noreferrer" style={{ color: 'lightcoral' }}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              {' | '}
              <a href="https://www.instagram.com/gosalspizza" target="_blank" rel="noopener noreferrer" style={{ color: 'lightcoral' }}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

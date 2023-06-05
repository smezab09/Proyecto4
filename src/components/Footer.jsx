import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px', position: 'relative', bottom: 'auto' }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h2 style={{ color: 'lightcoral' }}>Legal</h2>
            <p>
              Términos y condiciones<br />
              Política de Tratamiento de Datos<br />
              T&C Promociones<br />
              Cookies<br />
              www.sic.gov.co
            </p>
          </div>
          <div className="col-sm-4">
            <h2 style={{ color: 'lightcoral' }}>Sobre Gosal&apos;s</h2>
            <p>
              Nuestra marca<br />
              Gosal&apos;s Pizza<br />
              Sostenibilidad<br />
              Comunicado sanidad<br />
              Nuestra Masa
            </p>
          </div>
          <div className="col-sm-4">
            <h4 style={{ color: 'lightcoral' }}>Síguenos en redes sociales</h4>
            <div>
              <a href="https://twitter.com/gosalspizza" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '24px' }}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              {' | '}
              <a href="https://www.facebook.com/gosalspizza" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '24px' }}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              {' | '}
              <a href="https://www.instagram.com/gosalspizza" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '24px' }}>
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

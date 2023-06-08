const Home = () => {

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    marginBottom: '2rem',
  };

  const imageStyle = {
    width: '80%',
    height: 'auto',
    borderRadius: '5px',
    float: 'right',
  };

  const textContainerStyle = {
    textAlign: 'justify',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  };

  const containerStyleMobile = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    marginBottom: '2rem',
  };

  const imageStyleMobile = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    display: 'flex',
  };

  const textContainerStyleMobile = {
    textAlign: 'justify',
    height: '100%',
  };

  const isMobile = window.innerWidth <= 768; 
  return (
    <>
      <div className="container" style={{ padding: '2rem' }}>
        <header>
          <h1 style={{ color: 'red', fontSize: '2rem', marginBottom: '1rem' }}>¡Bienvenido a Gosal&apos;s Pizza!</h1>
        </header>
        <div style={isMobile ? containerStyleMobile : containerStyle}>
          <div style={isMobile ? textContainerStyleMobile : textContainerStyle}>
            <p style={{ color: 'black', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              ¡Descubre el sabor auténtico de nuestras deliciosas pizzas hechas con ingredientes frescos y de la mejor calidad!
              Nuestro menú cuenta con una variedad de sabores irresistibles que te harán volver por más.
              ¡Ven y disfruta de una experiencia culinaria única en Gosals Pizza!
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <img src="src\images\gosals1.png" alt="Gosals1" style={isMobile ? imageStyleMobile : imageStyle} />
          </div>
          <div style={{ textAlign: 'right' }}>
            <img src="src\images\gosals2.png" alt="Gosals2" style={isMobile ? imageStyleMobile : imageStyle} />
          </div>
          <div style={isMobile ? textContainerStyleMobile : textContainerStyle}>
            <p style={{ color: 'black', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              ¿Qué esperas para probar nuestras pizzas recién salidas del horno y disfrutar de cada bocado lleno de sabor?
              Contamos con opciones para todos los gustos, desde clásicas margaritas hasta innovadoras pizzas gourmet.
              Ven a Gosals Pizza y déjate sorprender por nuestros exquisitos sabores y atención personalizada.
            </p>
          </div>
          <div style={isMobile ? textContainerStyleMobile : textContainerStyle}>
            <p style={{ color: 'black', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              ¡Promoción especial de junio para los amantes de la pizza!
            </p>
            <p style={{ color: 'black', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              Esta promoción es para ustedes. Por la compra de una pizza mediana familiar, te llevas los bordes de queso gratis.
              ¡Aprovecha esta deliciosa oferta por tiempo limitado!
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <img src="src\images\gosals3.png" alt="Pizza 3" style={isMobile ? imageStyleMobile : imageStyle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
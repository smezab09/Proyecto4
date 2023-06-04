const Menu = () => {
  const cardStyle = {
    height: '25%',
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
  };
  
  const imageStyle = {
    objectFit: 'cover',
    height: '250px',
  };


  const handleOrderButtonMouseEnter = (event) => {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'red';
  };

  const handleOrderButtonMouseLeave = (event) => {
    event.target.style.backgroundColor = 'red';
    event.target.style.color = 'white';
  };

  return (
    <>
    <div className="container" style={{ backgroundColor: 'creme' }}>
      <h2 style={{ color: 'lightcoral' }}>Menú</h2>

      <div className="row">
        <div className="col-sm-6">
          <h3 style={{ color: 'lightcoral' }}>Pizzas Tradicionales</h3>
          <div className="card mb-3" style={cardStyle}>
            <img
              src="src/images/pollo-champiñones.png"
              className="card-img-top"
              alt="Pizza Pollo Champiñones"
              style={imageStyle}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: 'lightcoral'}}>Pizza Pollo Champiñones</h5>
              <p className="card-text">
                Deliciosa pizza con salsa de tomate, queso mozzarella, pollo y champiñones.
              </p>
              <div>
                <label htmlFor="tradicional-size">Tamaño:</label>
                <select id="tradicional-size">
                  <option value="familiar">Mediana Familiar - $25.000</option>
                  <option value="personal">Personal - $15.000</option>
                </select>
              </div>
              <div style={{ marginTop: '25px' }}>
                <button
                  className="btn btn-outline-danger"
                  style={{ marginRight: '5px' }}
                >
                  Personaliza tu pizza
                </button>
                <button
                  className="btn btn-danger"
                  onMouseEnter={handleOrderButtonMouseEnter}
                  onMouseLeave={handleOrderButtonMouseLeave}
                >
                  Ordenar
                </button>
              </div>

            </div>
          </div>

          <div className="card mb-3" style={cardStyle}>
            <img
              src="src/images/napolitana.png"
              className="card-img-top"
              alt="Pizza Napolitana"
              style={imageStyle}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: 'lightcoral'}}>Pizza Napolitana</h5>
              <p className="card-text">
                Sabrosa pizza con salsa de tomate, queso mozzarella, tomate y albahaca.
              </p>
              <div>
                <label htmlFor="tradicional-size">Tamaño:</label>
                <select id="tradicional-size">
                  <option value="familiar">Mediana Familiar - $25.000</option>
                  <option value="personal">Personal - $15.000</option>
                </select>
              </div>
              <div style={{ marginTop: '25px' }}>
                <button
                  className="btn btn-outline-danger"
                  style={{ marginRight: '5px' }}
                >
                  Personaliza tu pizza
                </button>
                <button
                  className="btn btn-danger"
                  onMouseEnter={handleOrderButtonMouseEnter}
                  onMouseLeave={handleOrderButtonMouseLeave}
                >
                  Ordenar
                </button>
              </div>

            </div>
          </div>

          <div className="card mb-3" style={cardStyle}>
            <img
              src="src/images/hawaiana-americana.png"
              className="card-img-top"
              alt="Pizza Hawaiana Americana"
              style={imageStyle}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: 'lightcoral'}}>Pizza Hawaiana Americana</h5>
              <p className="card-text">
                Deliciosa pizza estilo americano con salsa de tomate, queso mozzarella, jamón, piña y pepperoni.
              </p>
              <div>
                <label htmlFor="tradicional-size">Tamaño:</label>
                <select id="tradicional-size">
                  <option value="familiar">Mediana Familiar - $27.000</option>
                  <option value="personal">Personal - $17.000</option>
                </select>
              </div>
              <div style={{ marginTop: '25px' }}>
                <button
                  className="btn btn-outline-danger"
                  style={{ marginRight: '5px' }}
                >
                  Personaliza tu pizza
                </button>
                <button
                  className="btn btn-danger"
                  onMouseEnter={handleOrderButtonMouseEnter}
                  onMouseLeave={handleOrderButtonMouseLeave}
                >
                  Ordenar
                </button>
              </div>

            </div>
          </div>

          <div className="card mb-3" style={cardStyle}>
            <img
              src="src/images/pepperoni-hot.png"
              className="card-img-top"
              alt="Pizza Pepperoni Hot"
              style={imageStyle}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: 'lightcoral'}}>Pizza Pepperoni Hot</h5>
              <p className="card-text">
                Picante y sabrosa pizza con salsa de tomate, queso mozzarella, jalapeño y pepperoni.
              </p>
              <div>
                <label htmlFor="tradicional-size">Tamaño:</label>
                <select id="tradicional-size">
                  <option value="familiar">Mediana Familiar - $26.000</option>
                  <option value="personal">Personal - $16.000</option>
                </select>
              </div>
              <div style={{ marginTop: '25px' }}>
                <button
                  className="btn btn-outline-danger"
                  style={{ marginRight: '5px' }}
                >
                  Personaliza tu pizza
                </button>
                <button
                  className="btn btn-danger"
                  onMouseEnter={handleOrderButtonMouseEnter}
                  onMouseLeave={handleOrderButtonMouseLeave}
                >
                  Ordenar
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <h3 style={{ color: 'lightcoral' }}>Pizzas Gourmet</h3>
          <div className="card mb-3" style={cardStyle}>
            <img
              src="src/images/carnivora.png"
              className="card-img-top"
              alt="Pizza Carnivora"
              style={imageStyle}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: 'lightcoral'}}>Pizza Carnivora</h5>
              <p className="card-text">
                Exquisita pizza gourmet con salsa de tomate, queso mozzarella, jamón, pollo, salami y pepperoni.
              </p>
              <div>
                <label htmlFor="gourmet-size">Tamaño:</label>
                <select id="gourmet-size">
                  <option value="familiar">Mediana Familiar - $32.000</option>
                  <option value="personal">Personal - $22.000</option>
                </select>
              </div>
              <div style={{ marginTop: '25px' }}>
                <button
                  className="btn btn-outline-danger"
                  style={{ marginRight: '5px' }}
                >
                  Personaliza tu pizza
                </button>
                <button
                  className="btn btn-danger"
                  onMouseEnter={handleOrderButtonMouseEnter}
                  onMouseLeave={handleOrderButtonMouseLeave}
                >
                  Ordenar
                </button>
              </div>

            </div>
          </div>

          <div className="card mb-3" style={cardStyle} >
            <img
              src="src/images/cuatro-quesos.png"
              className="card-img-top"
              alt="Pizza Quattro Formaggi"
              style={imageStyle}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: 'lightcoral'}}>Pizza Quattro Formaggi</h5>
              <p className="card-text">
                Irresistible pizza gourmet con cuatro quesos: mozzarella, gorgonzola, parmesano y provolone.
              </p>
              <div>
                <label htmlFor="gourmet-size">Tamaño:</label>
                <select id="gourmet-size">
                  <option value="familiar">Mediana Familiar - $32.000</option>
                  <option value="personal">Personal - $22.000</option>
                </select>
              </div>
              <div style={{ marginTop: '25px' }}>
                <button
                  className="btn btn-outline-danger"
                  style={{ marginRight: '5px' }}
                >
                  Personaliza tu pizza
                </button>
                <button
                  className="btn btn-danger"
                  onMouseEnter={handleOrderButtonMouseEnter}
                  onMouseLeave={handleOrderButtonMouseLeave}
                >
                  Ordenar
                </button>
              </div>

            </div>
          </div>

          <div className="card mb-3" style={cardStyle}>
            <img
              src="src/images/maiz-tocino.png"
              className="card-img-top"
              alt="Corn-Bacon"
              style={imageStyle}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: 'lightcoral'}}>Corn-Bacon</h5>
              <p className="card-text">
                Deliciosa pizza gourmet con salsa de tomate, queso mozzarella, maíz y tocino crujiente.
              </p>
              <div>
                <label htmlFor="gourmet-size">Tamaño:</label>
                <select id="gourmet-size">
                  <option value="familiar">Mediana Familiar - $30.000</option>
                  <option value="personal">Personal - $20.000</option>
                </select>
              </div>
              <div style={{ marginTop: '25px' }}>
                <button
                  className="btn btn-outline-danger"
                  style={{ marginRight: '5px' }}
                >
                  Personaliza tu pizza
                </button>
                <button
                  className="btn btn-danger"
                  onMouseEnter={handleOrderButtonMouseEnter}
                  onMouseLeave={handleOrderButtonMouseLeave}
                >
                  Ordenar
                </button>
              </div>

            </div>
          </div>

          <div className="card mb-3" style={cardStyle}>
            <img
              src="src/images/bocadillo.png"
              className="card-img-top"
              alt="Pizza de Bocadillo"
              style={imageStyle}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: 'lightcoral'}}>Pizza de Bocadillo</h5>
              <p className="card-text">
                Dulce y sabrosa pizza gourmet con salsa de tomate, queso mozzarella y un exquisito dulce de guayaba.
              </p>
              <div>
                <label htmlFor="gourmet-size">Tamaño:</label>
                <select id="gourmet-size">
                  <option value="familiar">Mediana Familiar - $30.000</option>
                  <option value="personal">Personal - $20.000</option>
                </select>
              </div>
              <div style={{ marginTop: '25px'}}>
                <button
                  className="btn btn-outline-danger"
                  style={{ marginRight: '5px' }}
                >
                  Personaliza tu pizza
                </button>
                <button
                  className="btn btn-danger"
                  onMouseEnter={handleOrderButtonMouseEnter}
                  onMouseLeave={handleOrderButtonMouseLeave}
                >
                  Ordenar
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Menu;

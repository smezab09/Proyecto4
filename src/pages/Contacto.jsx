const Contacto = () => {
  return (
    <div className="container">
      <h2 style={{ color: 'lightcoral' }}>Contacto</h2>
      <p style={{ color: 'black' }}>Estamos ubicados en la Cra. 18 #11c-24, Sincelejo, Sucre, Colombia.</p>
      <p style={{ color: 'black' }}>Puedes contactarnos al teléfono: +57 301 6250685 o enviarnos un DM a @gosalspizza en Instagram </p>
      <div>
        <h4 style={{ color: 'lightcoral' }}>Dirección:</h4>
        <p style={{ color: 'black' }}>Cra. 18 #11c-24, Sincelejo, Sucre, Colombia</p>
      </div>
      <div>
        <h4 style={{ color: 'lightcoral' }}>Horario:</h4>
        <table className="table">
          <tbody>
            <tr>
              <td>Lunes</td>
              <td>17:00-21:30</td>
            </tr>
            <tr>
              <td>Martes</td>
              <td>17:00-21:30</td>
            </tr>
            <tr>
              <td>Miércoles</td>
              <td>17:00-21:30</td>
            </tr>
            <tr>
              <td>Jueves</td>
              <td>17:00-21:30</td>
            </tr>
            <tr>
              <td>Viernes</td>
              <td>17:00-23:00</td>
            </tr>
            <tr>
              <td>Sábado</td>
              <td>17:00-23:00</td>
            </tr>
            <tr>
              <td>Domingo</td>
              <td>17:00-21:30</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h4 style={{ color: 'lightcoral' }}>Miniatura del mapa:</h4>
        {/* Agrega aquí el código para mostrar la miniatura del mapa */}
      </div>
    </div>
  );
};

export default Contacto;

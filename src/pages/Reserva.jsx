import { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, onSnapshot, doc } from 'firebase/firestore';
import { db } from '../components/firebase/firebase.js';

const Reserva = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [personas, setPersonas] = useState('1');
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'reservas'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReservas(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleReservaSubmit = async (e) => {
    e.preventDefault();
    console.log('Reserva enviada:', nombre, fecha, hora, personas);

    try {
      const docRef = await addDoc(collection(db, 'reservas'), {
        nombre,
        fecha,
        hora,
        personas,
      });
      console.log('Reserva agregada con ID: ', docRef.id);
    } catch (error) {
      console.error('Error al agregar la reserva: ', error);
    }

    setNombre('');
    setFecha('');
    setHora('');
    setPersonas('1');
  };

  const handleEliminarReserva = async (id) => {
    try {
      await deleteDoc(doc(db, 'reservas', id));
      console.log('Reserva eliminada con ID: ', id);
    } catch (error) {
      console.error('Error al eliminar la reserva: ', error);
    }
  };

  const handleEditarReserva = async (id, nuevaFecha) => {
    try {
      await updateDoc(doc(db, 'reservas', id), { fecha: nuevaFecha });
      console.log('Reserva editada con ID: ', id);
    } catch (error) {
      console.error('Error al editar la reserva: ', error);
    }
  };

  const today = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato 'YYYY-MM-DD'
  const minTime = '17'; // Hora mínima (5 PM)
  const maxTime = '22'; // Hora máxima (10 PM)

  return (
    <>
      <section className="container" style={{ padding: '2rem' }}>
        <h2 style={{ color: 'black', marginBottom: '1rem' }}>Reserva una mesa</h2>
        <form onSubmit={handleReservaSubmit}>
          <article className="form-group">
            <label style={{ color: 'black' }}>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="form-control"
              required
            />
          </article>
          <article className="form-group">
            <label style={{ color: 'black' }}>Fecha:</label>
            <input
              type="date"
              value={fecha}
              min={today}
              onChange={(e) => setFecha(e.target.value)}
              className="form-control"
              required
            />
          </article>
          <article className="form-group">
            <label style={{ color: 'black' }}>Hora:</label>
            <select
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="form-control"
              required
            >
              <option value="">Selecciona una hora</option>
              {Array.from({ length: maxTime - minTime + 1 }, (_, index) => {
                const hour = Number(minTime) + index;
                const label = `${hour}:00 - ${hour + 1}:00`;
                return (
                  <option key={hour} value={hour}>
                    {label}
                  </option>
                );
              })}
            </select>
          </article>
          <article className="form-group">
            <label style={{ color: 'black' }}>Cantidad de personas:</label>
            <select
              value={personas}
              onChange={(e) => setPersonas(e.target.value)}
              className="form-control"
              required
            >
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </article>
          <button
            type="submit"
            className="btn btn-dark"
            style={{ marginTop: '1rem' }}>
             Reservar
              </button>

        </form>
        <p style={{ color: 'black', fontSize: '1.2rem', marginTop: '1rem' }}>
          ¡Aprovecha nuestras promociones de mayo! Por cada reserva realizada, recibirás un descuento del 10% en tu próxima
          visita.
        </p>
      </section>

      <section className="container" style={{ padding: '2rem' }}>
  <h2 style={{ color: 'black', marginBottom: '1rem' }}>Tus reservas activas</h2>
  {reservas.length > 0 ? (
    reservas.map((reserva) => (
      <article key={reserva.id} style={{ marginBottom: '1rem' }}>
        <p>
          Nombre: {reserva.nombre} - Fecha: {reserva.fecha} - Hora: {reserva.hora} - Personas: {reserva.personas}
        </p>
        <button
    className="btn btn-danger"
    onClick={() => {
      const confirmar = window.confirm("¿Estás seguro de cancelar tu reserva?");
      if (confirmar) {
        handleEliminarReserva(reserva.id);
      }
    }}
  >
    Eliminar
  </button>
  {" "}
  <button
    className="btn btn-dark"
    onClick={() => {
      const nuevaFecha = window.prompt("Introduce la nueva fecha:", reserva.fecha);
      if (nuevaFecha) {
        const nuevaHora = window.prompt("Introduce la nueva hora:", reserva.hora);
        const nuevasPersonas = window.prompt("Introduce el número de personas:", reserva.personas);
        handleEditarReserva(reserva.id, nuevaFecha, nuevaHora, nuevasPersonas);
      }
    }}
  >
    Editar
  </button>

      </article>
    ))
  ) : (
    <p>No tienes reservas activas</p>
  )}
</section>

    </>
  );
};

export default Reserva;

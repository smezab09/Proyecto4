import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from '../components/NavBar';
import Home from '../pages/Home';
import Reserva from '../pages/Reserva';
import Contacto from '../pages/Contacto';
import Menu from '../pages/Menu';
import Footer from '../components/Footer';

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container" style={{ paddingBottom: '80px', marginBottom: '60px' }}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserva" element={<Reserva />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
          <Footer />
      </Router>
    </>
  );
};

export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import CustomNavbar from './components/Navbar';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Abogados from './pages/Abogados';
import Telecomunicaciones from './pages/Telecomunicaciones';
import CreditosFinanzas from './pages/CreditosFinanzas';
import Radiodifusion from './pages/Radiodifusion';
import DerechoCorporativo from './pages/DerechoCorporativo';
import Energia from './pages/Energia';
import CompetenciaEconomica from './pages/CompetenciaEconomica';
import AsesoriaLegislativa from './pages/AsesoriaLegislativa';
import Litigio from './pages/Litigio';
import BolsaTrabajo from './pages/BolsaTrabajo';
import Publicaciones from './pages/Publicaciones';
import Contacto from './pages/Contacto';
import Badge from './components/Badge';
import Footer from './components/Footer';
import './css/App.css';
library.add(fas,)

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Badge/>
        <Route exact path="/" component={Home} />
        <Route path="/quienessomos" component={QuienesSomos} />
        <Route path="/abogados" component={Abogados} />
        <Route path="/telecomunicaciones" component={Telecomunicaciones} />
        <Route path="/creditos-finanzas" component={CreditosFinanzas} />
        <Route path="/radiodifusion" component={Radiodifusion} />
        <Route path="/derecho-corporativo" component={DerechoCorporativo} />
        <Route path="/energia" component={Energia} />
        <Route path="/competencia-economica" component={CompetenciaEconomica} />
        <Route path="/asesoria-legislativa" component={AsesoriaLegislativa} />
        <Route path="/litigio" component={Litigio} />
        <Route path="/bolsadetrabajo" component={BolsaTrabajo} />
        <Route path="/publicaciones" component={Publicaciones} />
        <Route path="/contacto" component={Contacto} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

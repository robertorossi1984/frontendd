
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import ServiciosPage from './pages/ServiciosPage';
import GaleriaPage from './pages/GaleriaPage';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
     <Nav/>
     
     <switch>
       <Route path="/" exact component={HomePage}/>
       <Route path="/nosotros" exact component={NosotrosPage} />
       <Route path="/novedades" exact component={NovedadesPage} />
       <Route path="/contacto" exact component={ContactoPage} />
       <Route path="/servicios" exact component={ServiciosPage} />
       <Route path="/galeria" exact component={GaleriaPage} />
      
     </switch>
     

   
       
    
    </div>
    <Footer/>
    </Router>
  );
}

export default App;

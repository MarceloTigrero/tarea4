import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navegation.js'
import Pregunta1 from './components/pregunta1.js'
import Pregunta2 from './components/pregunta2';
import Pregunta3 from './components/pregunta3';
import Inicio from './components/inicio';
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    
     <Navigation/>
     <Route path="/" exact component={Inicio}/>
     <Route path="/pregunta1" exact component={Pregunta1} />
     <Route path="/pregunta2" exact component={Pregunta2}/>
     <Route path="/pregunta3" exact component={Pregunta3}/>
    </Router>
  );
}
export const backend = {
  host: "http://localhost",
  port: 8080
}


export default App;


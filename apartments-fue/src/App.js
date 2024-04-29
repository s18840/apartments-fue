import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import apartment1 from './assets/apartment23/1.webp';
import apartment2 from './assets/apartment27/2.webp';
import Home from './components/Home';
import Apartment from './components/Apartment';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="">
          <Routes>
            <Route path='/' element={<Home image1={apartment1} image2={apartment2}/>}></Route>
            <Route path='/colores_de_fuerteventura_1' element={<Apartment title="Colores de Fuerteventura 1"/>} />
            <Route path='/colores_de_fuerteventura_2' element={<Apartment title="Colores de Fuerteventura 2"/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import apartment1 from "./assets/apartment23/1.webp";
import apartment2 from "./assets/apartment27/2.webp";
import Home from "./components/Home";
import Apartment from "./components/Apartment";
import separator from "./assets/separator-small-1.png";

const apartment23Images = importAll(
  require.context("./assets/apartment23", false, /\.(png|jpe?g|svg|webp)$/)
);

const apartment27Images = importAll(
  require.context("./assets/apartment27", false, /\.(png|jpe?g|svg|webp)$/)
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <div className="title-app">Costa Calma Apartments Fuerteventura</div>
          <img src={separator} />
          <Routes>
            <Route
              path="/"
              element={<Home image1={apartment1} image2={apartment2} />}
            ></Route>
            <Route
              path="/colores_de_fuerteventura_1"
              element={
                <Apartment
                  title="Colores de Fuerteventura 1"
                  images={apartment23Images}
                  number={27}
                  people={4}
                  beds={3}
                  surface={55}
                />
              }
            />
            <Route
              path="/colores_de_fuerteventura_2"
              element={
                <Apartment
                  title="Colores de Fuerteventura 2"
                  images={apartment27Images}
                  number={23}
                  people={4}
                  beds={3}
                  surface={75}
                />
              }
            />
          </Routes>
          <img src={separator} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function importAll(r) {
  let images = [];
  r.keys().forEach((key) => images.push(r(key)));
  return images;
}

export default App;

import "./App.css";
import PokemonLogo from "./pokemon_logo.png";
import PokemonComponent from "./components/pokemon.jsx";
import Footer from "./components/footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="logo-container">
        <img src={PokemonLogo} alt="" className="logo" />
      </div>
      <PokemonComponent />
      <Footer />
    </Fragment>
  );
}

export default App;

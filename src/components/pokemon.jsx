import { Fragment, useState } from "react";
import "./pokemon.css";
const pokemon = require("pokemon");
var _ = require("lodash");

const PokemonComponent = () => {
  const [pmon, setPmon] = useState(pokemon.random().toLowerCase().trim());
  const [img, setImg] = useState();

  fetch(`https://pokeapi.co/api/v2/pokemon/${pmon}`)
    .then((response) => response.json())
    .then((data) => {
      setImg(data.sprites.other["official-artwork"].front_default);
    })
    .catch((error) => {
      console.log("Error!!!!");
      window.location.reload(false);
    });

  const handleClick = () => {
    const randomP = pokemon.random();
    setPmon(randomP.toLowerCase().trim());
    fetch(`https://pokeapi.co/api/v2/pokemon/${pmon}`)
      .then((response) => response.json())
      .then((data) => {
        console.log();
        setImg(data.sprites.other["official-artwork"].front_default);
      })
      .catch((error) => {
        console.log("Error!!!!");
        window.location.reload(false);
      });
  };

  return (
    <Fragment>
      <div>
        <img src={`${img}`} alt="" className="pokemon-image" />
      </div>
      <div>
        <h2>{_.capitalize(pmon)}</h2>
      </div>
      <button onClick={handleClick}>Generate!</button>
    </Fragment>
  );
};

export default PokemonComponent;

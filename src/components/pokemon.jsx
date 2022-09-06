import { Fragment, useState } from "react";
import "./pokemon.css";
var _ = require("lodash");

const PokemonComponent = () => {
  const [pmon, setPmon] = useState();
  const [img, setImg] = useState();

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => response.json())
      .then((data) => {
        const pmonCount = data.results.length;
        //console.log(pmonCount);
        const x = randomInteger(1, pmonCount);
        const pmonName = data.results[x].name;
        const pmonUrl = data.results[x].url;
        setPmon(pmonName);
        console.log(pmonName);
        console.log(pmonUrl);
        fetch(pmonUrl)
          .then((response) => response.json())
          .then((data) => {
            const imgUrl = data.sprites.other["official-artwork"].front_default;
            if (imgUrl !== null) {
              setImg(imgUrl);
            } else {
              handleClick();
            }
          });
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

import { Fragment, useState } from "react";
import "./pokemon.css";
import { Button } from "react-bootstrap";
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
      <div className="poke-container">
        <div className="poke-image">
          <img src={`${img}`} alt="" className="img" />
        </div>
        <div className="poke-text">
          <h2>{_.capitalize(pmon)}</h2>
        </div>
        <Button onClick={handleClick} variant="dark">
          Generate!
        </Button>
      </div>
    </Fragment>
  );
};

export default PokemonComponent;

import React from "react";
import forca0 from "../assets/forca0.png";

function Game() {
    return (
        <section className="c-game">
            <img src={forca0} alt="Forca vazia" className="c-game__img" />
            <button className="c-game__button">Escolher Palavra</button>
        </section>
    );
}

export default Game;

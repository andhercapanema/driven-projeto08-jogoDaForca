import React from "react";

function Game() {
    return (
        <section className="c-game">
            <img
                src="./assets/forca0.png"
                alt="Forca vazia"
                className="c-game__img"
            />
            <button className="c-game__button">Escolher Palavra</button>
        </section>
    );
}

export default Game;

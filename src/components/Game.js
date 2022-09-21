import React, { useState } from "react";
import forca0 from "../assets/forca0.png";
import words from "./words";

function Game({ gameHasStarted, setGameHasStarted }) {
    const [word, setWord] = useState([]);
    const [textStartButton, setTextStartButton] = useState("Escolher Palavra");

    function renderWord() {
        const indexRandomWord = Math.round(Math.random() * words.length);
        const wordArray = words[indexRandomWord].split("");
        setWord(wordArray.map((letter) => "_"));
    }

    function enableButtons() {
        setTextStartButton("Mudar Palavra");
        setGameHasStarted(true);
    }

    function startGame() {
        renderWord();
        enableButtons();
    }

    return (
        <section className="c-game">
            <img src={forca0} alt="Forca vazia" className="c-game__img" />
            <div className="u-column">
                <button className="c-game__button" onClick={startGame}>
                    {textStartButton}
                </button>
                <p className="c-game__word">{word}</p>
            </div>
        </section>
    );
}

export default Game;

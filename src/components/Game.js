import React, { useState } from "react";
import gallows0 from "../assets/forca0.png";
import gallows1 from "../assets/forca1.png";
import gallows2 from "../assets/forca2.png";
import gallows3 from "../assets/forca3.png";
import gallows4 from "../assets/forca4.png";
import gallows5 from "../assets/forca5.png";
import gallows6 from "../assets/forca6.png";
import words from "./words";

function Game({
    gameHasStarted,
    setGameHasStarted,
    alphabet,
    setAlphabet,
    word,
    setWord,
    errorsAmount,
    setErrorsAmount,
    wordWasGuessed,
    setWordWasGuessed,
}) {
    const gallowsImgArr = [
        gallows0,
        gallows1,
        gallows2,
        gallows3,
        gallows4,
        gallows5,
        gallows6,
    ];

    function renderWord() {
        const indexRandomWord = Math.round(Math.random() * words.length);
        const selectedWordArray = words[indexRandomWord].split("");
        setWord(
            selectedWordArray.map((item) => {
                return { letter: item, wasGuessed: false };
            })
        );
    }

    function enableButtons() {
        setGameHasStarted(true);
    }

    function restartLetters() {
        setAlphabet(
            alphabet.map((item) => {
                return { letter: item.letter, wasSelected: false };
            })
        );
    }

    function startGame() {
        renderWord();
        enableButtons();
        restartLetters();
        setErrorsAmount(0);
        setWordWasGuessed(false);
    }

    return (
        <section className="c-game">
            <img
                src={gallowsImgArr[errorsAmount]}
                alt="Forca vazia"
                className="c-game__img"
            />
            <div className="u-column">
                <button className="c-game__button" onClick={startGame}>
                    {gameHasStarted ? "Mudar Palavra" : "Escolher Palavra"}
                </button>
                <p
                    className={`c-game__word ${
                        errorsAmount === 6
                            ? "u-defeated-text"
                            : wordWasGuessed
                            ? "u-victory-text"
                            : ""
                    }`}
                >
                    {word.map((item) => (item.wasGuessed ? item.letter : "_"))}
                </p>
            </div>
        </section>
    );
}

export default Game;

import React, { useState } from "react";
import forca0 from "../assets/forca0.png";
import words from "./words";

function Game({
    gameHasStarted,
    setGameHasStarted,
    alphabet,
    setAlphabet,
    word,
    setWord,
}) {
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
    }

    return (
        <section className="c-game">
            <img src={forca0} alt="Forca vazia" className="c-game__img" />
            <div className="u-column">
                <button className="c-game__button" onClick={startGame}>
                    {gameHasStarted ? "Mudar Palavra" : "Escolher Palavra"}
                </button>
                <p className="c-game__word">
                    {word.map((item) => (item.wasGuessed ? item.letter : "_"))}
                </p>
            </div>
        </section>
    );
}

export default Game;

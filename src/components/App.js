import React, { useState } from "react";
import Jogo from "./Game";
import Guess from "./Guess";
import Letters from "./Letters";

function App() {
    const [gameHasStarted, setGameHasStarted] = useState(false);

    const alphabetArray = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const [alphabet, setAlphabet] = useState(
        alphabetArray.map((item) => {
            return { letter: item, wasSelected: false };
        })
    );

    const [word, setWord] = useState([]);
    const [errorsAmount, setErrorsAmount] = useState(0);
    const [wordWasGuessed, setWordWasGuessed] = useState(false);

    function endGame() {
        word.forEach((letter) => (letter.wasGuessed = true));
        setGameHasStarted(false);
    }

    console.log(word);

    return (
        <main className="c-page">
            <Jogo
                gameHasStarted={gameHasStarted}
                setGameHasStarted={setGameHasStarted}
                alphabet={alphabet}
                setAlphabet={setAlphabet}
                word={word}
                setWord={setWord}
                errorsAmount={errorsAmount}
                setErrorsAmount={setErrorsAmount}
                wordWasGuessed={wordWasGuessed}
                setWordWasGuessed={setWordWasGuessed}
            />
            <Letters
                gameHasStarted={gameHasStarted}
                setGameHasStarted={setGameHasStarted}
                alphabet={alphabet}
                setAlphabet={setAlphabet}
                word={word}
                errorsAmount={errorsAmount}
                setErrorsAmount={setErrorsAmount}
                setWordWasGuessed={setWordWasGuessed}
                endGame={endGame}
            />
            <Guess
                gameHasStarted={gameHasStarted}
                word={word}
                setWordWasGuessed={setWordWasGuessed}
                setGameHasStarted={setGameHasStarted}
                endGame={endGame}
                setErrorsAmount={setErrorsAmount}
            />
        </main>
    );
}

export default App;

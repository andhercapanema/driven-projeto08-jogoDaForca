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

    return (
        <main className="c-page">
            <Jogo
                gameHasStarted={gameHasStarted}
                setGameHasStarted={setGameHasStarted}
                alphabet={alphabet}
                setAlphabet={setAlphabet}
            />
            <Letters
                gameHasStarted={gameHasStarted}
                alphabet={alphabet}
                setAlphabet={setAlphabet}
            />
            <Guess gameHasStarted={gameHasStarted} />
        </main>
    );
}

export default App;

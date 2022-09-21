import React from "react";

const Letter = ({ letter, gameHasStarted }) => {
    return (
        <li className="c-alphabet__letter">
            {gameHasStarted ? (
                <button className="c-alphabet__btn">{letter}</button>
            ) : (
                <button className="c-alphabet__btn btn-is-disabled">
                    {letter}
                </button>
            )}
        </li>
    );
};

function Letters({ gameHasStarted }) {
    const alphabet = [
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

    return (
        <ul className="c-alphabet">
            {alphabet.map((letter, index) => (
                <Letter
                    key={index}
                    letter={letter.toUpperCase()}
                    gameHasStarted={gameHasStarted}
                />
            ))}
        </ul>
    );
}

export default Letters;

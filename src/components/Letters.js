import React from "react";

const Letter = (props) => {
    return (
        <li className="c-alphabet__letter">
            <button className="c-alphabet__btn">{props.letter}</button>
        </li>
    );
};

function Letters() {
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
            {alphabet.map((letter) => (
                <Letter letter={letter.toUpperCase()} />
            ))}
        </ul>
    );
}

export default Letters;

import React from "react";

function Letter({
    item: { letter, wasSelected },
    gameHasStarted,
    letterIndex,
    alphabet,
    setAlphabet,
}) {
    function selectLetter() {
        alphabet[letterIndex].wasSelected = true;
        setAlphabet([...alphabet]);
    }

    const activeBtn = gameHasStarted && !wasSelected;

    return (
        <li className="c-alphabet__letter">
            <button
                className={`c-alphabet__btn ${
                    activeBtn ? "" : "btn-is-disabled"
                }`}
                onClick={activeBtn ? () => selectLetter() : () => 0}
            >
                {letter.toUpperCase()}
            </button>
        </li>
    );
}

function Letters({ gameHasStarted, alphabet, setAlphabet }) {
    console.log(alphabet);
    return (
        <ul className="c-alphabet">
            {alphabet.map((item, index) => (
                <Letter
                    key={index}
                    item={item}
                    gameHasStarted={gameHasStarted}
                    letterIndex={index}
                    alphabet={alphabet}
                    setAlphabet={setAlphabet}
                />
            ))}
        </ul>
    );
}

export default Letters;

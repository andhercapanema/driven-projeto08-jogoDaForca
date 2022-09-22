import React from "react";

function Letter({
    alphabetItem,
    letterIndex,
    gameHasStarted,
    alphabet,
    setAlphabet,
    word,
    setWord,
    errorsAmount,
    setErrorsAmount,
}) {
    function selectLetter() {
        let wordContainsLetter = false;

        alphabet[letterIndex].wasSelected = true;
        setAlphabet([...alphabet]);

        word.forEach((letterInWord) => {
            const letterInWordWithoutAccentuation = letterInWord.letter
                .replace(/[àáâãäå]/, "a")
                .replace(/[èéê]/, "e")
                .replace(/[ìíî]/, "i")
                .replace(/[òóô]/, "o")
                .replace(/[ùúû]/, "u")
                .replace(/[ç]/, "c");

            if (letterInWordWithoutAccentuation === alphabetItem.letter) {
                letterInWord.wasGuessed = true;
                wordContainsLetter = true;
            }
        });
        setWord([...word]);

        if (!wordContainsLetter) {
            setErrorsAmount(errorsAmount + 1);
            console.log(errorsAmount);
        }
    }

    const activeBtn = gameHasStarted && !alphabetItem.wasSelected;

    return (
        <li className="c-alphabet__letter">
            <button
                className={`c-alphabet__btn ${
                    activeBtn ? "" : "btn-is-disabled"
                }`}
                onClick={activeBtn ? () => selectLetter() : () => 0}
            >
                {alphabetItem.letter.toUpperCase()}
            </button>
        </li>
    );
}

function Letters({
    gameHasStarted,
    alphabet,
    setAlphabet,
    word,
    setWord,
    errorsAmount,
    setErrorsAmount,
}) {
    return (
        <ul className="c-alphabet">
            {alphabet.map((alphabetItem, index) => (
                <Letter
                    key={index}
                    alphabetItem={alphabetItem}
                    letterIndex={index}
                    gameHasStarted={gameHasStarted}
                    alphabet={alphabet}
                    setAlphabet={setAlphabet}
                    word={word}
                    setWord={setWord}
                    errorsAmount={errorsAmount}
                    setErrorsAmount={setErrorsAmount}
                />
            ))}
        </ul>
    );
}

export default Letters;

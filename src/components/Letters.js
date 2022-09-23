import React from "react";

function Letter({
    alphabetItem,
    letterIndex,
    setGameHasStarted,
    gameHasStarted,
    alphabet,
    setAlphabet,
    word,
    setWord,
    errorsAmount,
    setErrorsAmount,
    setWordWasGuessed,
}) {
    function endGame() {
        word.forEach((letter) => (letter.wasGuessed = true));
        setGameHasStarted(false);
    }

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

        if (!wordContainsLetter) {
            const updatedErrorAmount = errorsAmount + 1;
            setErrorsAmount(updatedErrorAmount);
            if (updatedErrorAmount === 6) {
                endGame();
            }
        }

        const updatedWordWasGuessed =
            word.filter((letterInWord) => letterInWord.wasGuessed === false)
                .length === 0;
        setWordWasGuessed(updatedWordWasGuessed);
        if (updatedWordWasGuessed) {
            endGame();
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
    setGameHasStarted,
    alphabet,
    setAlphabet,
    word,
    setWord,
    errorsAmount,
    setErrorsAmount,
    setWordWasGuessed,
}) {
    return (
        <ul className="c-alphabet">
            {alphabet.map((alphabetItem, index) => (
                <Letter
                    key={index}
                    alphabetItem={alphabetItem}
                    letterIndex={index}
                    gameHasStarted={gameHasStarted}
                    setGameHasStarted={setGameHasStarted}
                    alphabet={alphabet}
                    setAlphabet={setAlphabet}
                    word={word}
                    setWord={setWord}
                    errorsAmount={errorsAmount}
                    setErrorsAmount={setErrorsAmount}
                    setWordWasGuessed={setWordWasGuessed}
                />
            ))}
        </ul>
    );
}

export default Letters;

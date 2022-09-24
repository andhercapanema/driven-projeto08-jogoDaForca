import React from "react";
import styled, { css } from "styled-components";

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
    endGame,
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
        <LetterLi className="c-alphabet__letter">
            <LettersButton
                data-identifier="letter"
                className={`c-alphabet__btn ${
                    activeBtn ? "" : "btn-is-disabled"
                }`}
                // onClick={activeBtn ? () => selectLetter() : ""}
                onClick={selectLetter}
                disabled={activeBtn ? false : true}
            >
                {alphabetItem.letter.toUpperCase()}
            </LettersButton>
        </LetterLi>
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
    endGame,
}) {
    return (
        <LettersList className="c-alphabet">
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
                    endGame={endGame}
                />
            ))}
        </LettersList>
    );
}

export default Letters;

const LettersList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 780px;
    margin-left: 10px;
    margin-top: 20px;
`;

const LetterLi = styled.li`
    margin-right: 10px;
    margin-bottom: 10px;
`;

const LettersButton = styled.button`
    width: 50px;
    height: 50px;

    border-radius: 5px;

    background-color: #e1ecf4;
    border: 1px solid #2b77aa;
    color: #2b77aa;

    ${(props) =>
        props.disabled &&
        css`
            cursor: default;
            border: none;
            background-color: #9faab5;
            color: #7c818a;
        `}
`;

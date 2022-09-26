import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

function Guess({
    gameHasStarted,
    word,
    setWordWasGuessed,
    setGameHasStarted,
    endGame,
    setErrorsAmount,
}) {
    const [attempt, setAttempt] = useState("");

    function checkAttempt() {
        const wordString = word.map((item) => item.letter).join("");

        if (attempt === wordString) {
            setWordWasGuessed(true);
        } else {
            setErrorsAmount(6);
        }

        setAttempt("");
        endGame();
    }

    /* ------------------------------- */
    // envio com enter [fonte: https://stackoverflow.com/questions/33211672/how-to-submit-a-form-using-enter-key-in-react-js]

    useEffect(() => {
        const listener = (event) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                checkAttempt();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    });

    /* ------------------------------- */

    return (
        <SectionGuess>
            <GuessText>Já sei a palavra!</GuessText>
            <GuessContainer>
                <GuessInput
                    data-identifier="type-guess"
                    type="text"
                    className="c-guess__input"
                    disabled={gameHasStarted ? false : true}
                    onChange={(event) => setAttempt(event.target.value)}
                    value={attempt}
                ></GuessInput>
                <GuessButton
                    data-identifier="guess-button"
                    disabled={gameHasStarted ? false : true}
                    onClick={checkAttempt}
                >
                    Chutar
                </GuessButton>
            </GuessContainer>
        </SectionGuess>
    );
}

export default Guess;

const SectionGuess = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-right: 20px;
`;

const GuessText = styled.p`
    font-size: 18px;

    margin-left: 20px;
    margin-top: 20px;
`;

const GuessContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const GuessInput = styled.input`
    height: 40px;
    width: 90vw;
    max-width: 420px;

    border-radius: 5px;
    margin-left: 20px;
    margin-top: 20px;

    font-size: 18px
`;

const GuessButton = styled.button`
    width: 100px;
    height: 40px;
    background-color: #e1ecf4;
    border: 1px solid #2b77aa;
    color: #2b77aa;

    border-radius: 5px;
    margin-left: 20px;
    margin-top: 20px;

    ${(props) =>
        props.disabled &&
        css`
            cursor: default;
            border: none;
            background-color: #9faab5;
            color: #7c818a;
        `}
`;

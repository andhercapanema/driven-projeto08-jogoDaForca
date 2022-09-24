import React from "react";
import gallows0 from "../assets/forca0.png";
import gallows1 from "../assets/forca1.png";
import gallows2 from "../assets/forca2.png";
import gallows3 from "../assets/forca3.png";
import gallows4 from "../assets/forca4.png";
import gallows5 from "../assets/forca5.png";
import gallows6 from "../assets/forca6.png";
import words from "./words";
import styled from "styled-components";

function Game({
    gameHasStarted,
    setGameHasStarted,
    alphabet,
    setAlphabet,
    word,
    setWord,
    errorsAmount,
    setErrorsAmount,
    wordWasGuessed,
    setWordWasGuessed,
}) {
    const gallowsImgArr = [
        gallows0,
        gallows1,
        gallows2,
        gallows3,
        gallows4,
        gallows5,
        gallows6,
    ];

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
        setErrorsAmount(0);
        setWordWasGuessed(false);
    }

    return (
        <SectionGame>
            <GameImg
                data-identifier="game-image"
                src={gallowsImgArr[errorsAmount]}
                alt="Forca vazia"
            />
            <GameColumnWrapper>
                <GameButton data-identifier="choose-word" onClick={startGame}>
                    {gameHasStarted ? "Mudar Palavra" : "Escolher Palavra"}
                </GameButton>
                <GameWord
                    data-identifier="word"
                    color={
                        errorsAmount === 6
                            ? "rgb(175, 40, 40)"
                            : wordWasGuessed
                            ? "#27ae60"
                            : "black"
                    }
                >
                    {word.map((item) => (item.wasGuessed ? item.letter : "_"))}
                </GameWord>
            </GameColumnWrapper>
        </SectionGame>
    );
}

export default Game;

const SectionGame = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const GameImg = styled.img`
    width: 60%;
    max-width: 350px;
`;

const GameColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    height: 100%;
    width: 40%;
`;

const GameButton = styled.button`
    height: 50px;
    width: 30vw;
    max-width: 150px;
    margin-top: 5%;

    color: #fff;

    background-color: #27ae60;
    border-radius: 10px;
`;

const GameWord = styled.p`
    letter-spacing: 5px;
    font-size: 28px;
    color: ${(props) => props.color};
    font-weight: ${(props) => (props.color === "black" && 400) || 600};

    @media (min-width: 450px) {
        font-size: 40px;
    } ;
`;

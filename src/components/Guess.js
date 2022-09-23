import React, { useEffect, useState } from "react";

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
        <section className="c-guess">
            <p className="c-guess__text">Já sei a palavra!</p>
            <div className="c-guess__keep-together">
                <input
                    type="text"
                    className="c-guess__input"
                    disabled={gameHasStarted ? false : true}
                    onChange={(event) => setAttempt(event.target.value)}
                    value={attempt}
                ></input>
                <button
                    className={`c-guess__btn ${
                        gameHasStarted ? "" : "btn-is-disabled"
                    } `}
                    onClick={checkAttempt}
                >
                    Chutar
                </button>
            </div>
        </section>
    );
}

export default Guess;

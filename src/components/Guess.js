import React from "react";

function Guess() {
    return (
        <section className="c-guess">
            <p className="c-guess__text">Já sei a palavra!</p>
            <div className="c-guess__keep-together">
                <input type="text" className="c-guess__input"></input>
                <button className="c-guess__btn">Chutar</button>
            </div>
        </section>
    );
}

export default Guess;

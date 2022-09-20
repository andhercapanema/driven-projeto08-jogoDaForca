import React from "react";
import Jogo from "./Game";
import Guess from "./Guess";
import Letters from "./Letters";

function App() {
    return (
        <main className="c-page">
            <Jogo />
            <Letters />
            <Guess />
        </main>
    );
}

export default App;

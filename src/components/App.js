import React, { useState } from "react";
import Jogo from "./Game";
import Guess from "./Guess";
import Letters from "./Letters";

function App() {
    const [gameHasStarted, setGameHasStarted] = useState(false);

    return (
        <main className="c-page">
            <Jogo
                gameHasStarted={gameHasStarted}
                setGameHasStarted={setGameHasStarted}
            />
            <Letters gameHasStarted={gameHasStarted} />
            <Guess gameHasStarted={gameHasStarted} />
        </main>
    );
}

export default App;

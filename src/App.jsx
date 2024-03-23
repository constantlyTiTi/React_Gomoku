import Player from "./components/Player.jsx";
import { useState } from "react";
import { AppContext } from "./context/AppContext.jsx";
import Canvas from "./components/Canvas.jsx";

function App() {
  const players = [
    {
      id: "player-1",
      name: "Player 1",
      mark: "X",
    },
    {
      id: "player-2",
      name: "Player 2",
      mark: "O",
    },
  ];
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [compinations, setCompinations] = useState({
    total: Array(10)
      .fill(null)
      .map((i) => Array(10).fill(null)),
    player1: [],
    player2: [],
  });
  return (
    <AppContext.Provider
      value={{
        isPlayer1Turn,
        setIsPlayer1Turn,
        compinations,
        setCompinations,
      }}
    >
      <>
        <header>
          <h1>React Gomoku</h1>
          <img src="game-logo.png" />
        </header>

        <main id="game-container">
          <Player players={players} />
          <Canvas />
        </main>
      </>
    </AppContext.Provider>
  );
}

export default App;

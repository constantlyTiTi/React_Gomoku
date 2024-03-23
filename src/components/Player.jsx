import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

const Player = ({ players, props }) => {
  const { isPlayer1Turn, setIsPlayer1Turn } = useContext(AppContext);

  const backGroundColor = isPlayer1Turn
    ? "background:red"
    : "background:#46432f";

  return (
    <>
      {!!players &&
        players.map((player) => (
          <span key={`${player.id}-span`} className="player">
            <button
              key={player.id}
              onClick={() => setIsPlayer1Turn(player.id === "player-1")}
              className={`player-name ${
                (isPlayer1Turn && player.id === "player-1") ||
                (!isPlayer1Turn && player.id === "player-2")
                  ? "highlight-player"
                  : ""
              }`}
            >
              {player.name}
            </button>
            <span key={`${player.id}-mark`} className="player-symbol">
              {player.mark}
            </span>
          </span>
        ))}
    </>
  );
};

export default Player;

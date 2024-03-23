import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import Box from "./Box.jsx";

const canvas = () => {
  const boxes = Array(10).fill(null);
  return (
    <ol id="game-board">
      {boxes.map((_, rowIndex) => (
        <ol key={`boxCoontainer${rowIndex}`}>
          {Array(10)
            .fill(null)
            .map((box, colIndex) => (
              <Box
                key={`box${rowIndex}-${colIndex}`}
                row={rowIndex}
                col={colIndex}
              />
            ))}
        </ol>
      ))}
    </ol>
  );
};

export default canvas;

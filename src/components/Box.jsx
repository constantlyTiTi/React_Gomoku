import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { checkwin } from "../utils/checkWin.js";
import "../css/box.css";

const box = ({ col, row }) => {
  const { isPlayer1Turn, setIsPlayer1Turn, compinations, setCompinations } =
    useContext(AppContext);
  const [buttonValue, setButtonValue] = useState(null);

  const click = (row, col) => {
    setButtonValue(isPlayer1Turn ? "X" : "O");
    setIsPlayer1Turn(!isPlayer1Turn);
    const copyTotal = [...compinations.total];
    copyTotal[row][col] = isPlayer1Turn ? "X" : "O";
    isPlayer1Turn
      ? setCompinations({
          ...compinations,
          total: copyTotal,
          player1: [...compinations.player1, [row, col]],
        })
      : setCompinations({
          ...compinations,
          total: copyTotal,
          player2: [...compinations.player2, [row, col]],
        });
  };

  // let result = checkwin(compinations.total, !isPlayer1Turn ? "X" : "O");
  let result = !isPlayer1Turn
    ? checkwin(compinations.total, "X")
    : checkwin(compinations.total, "O");

  console.log("result", result);

  return (
    <li key={`boxButtonli-${col}-${row}`}>
      <button
        key={`boxButton-${col}-${row}`}
        onClick={() => click(row, col)}
        className={
          result.length === 5 &&
          result.some((item) => item[0] === row && item[1] === col)
            ? "playerWin"
            : null
        }
        disabled={result.length === 5}
      >
        {buttonValue}
      </button>
    </li>
  );
};

export default box;

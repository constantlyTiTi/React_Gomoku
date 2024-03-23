export const checkwin = (array, checkMark) => {
  console.log(checkMark);
  let result = [];
  //check horizontal
  for (let i = 0; i < 10; i++) {
    result = [];
    for (let j = 0; j < 10; j++) {
      if (result.length === 5) {
        return result;
      }
      if (array[i][j] !== checkMark) {
        result = [];
      } else {
        result.push([i, j]);
      }
    }
  }

  //check vertical
  for (let i = 0; i < 10; i++) {
    result = [];
    for (let j = 0; j < 10; j++) {
      if (result.length === 5) {
        return result;
      }
      if (array[j][i] !== checkMark) {
        result = [];
      } else {
        result.push([j, i]);
      }
    }
  }

  //check right diagonal
  for (let r = 9; r >= 0; r--) {
    result = [];
    let rd = r;
    let c = 0;
    while (rd < 10 && rd >= 0 && c < 10) {
      if (result.length === 5) {
        return result;
      }
      if (array[rd][c] !== checkMark) {
        result = [];
      } else {
        result.push([rd, c]);
      }
      c++;
      rd--;
    }
  }

  //check left diagonal
  for (let r = 0; r < 10; r++) {
    result = [];
    let rd = r;
    let c = 0;
    while (rd < 10 && rd >= 0 && c < 10) {
      if (result.length === 5) {
        return result;
      }
      if (array[rd][c] !== checkMark) {
        result = [];
      } else {
        result.push([rd, c]);
      }
      c++;
      rd++;
    }
  }
  return [];
};

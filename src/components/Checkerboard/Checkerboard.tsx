import "./Checkerboard.css";
import Tile from "../Tile/Tile";

// prettier-ignore
const horizontalAxis: Array<string> = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",];
const verticalAxis: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Piece {
  x: number;
  y: number;
}

const piece: Piece[] = [{ x: 4, y: 4 }];

function Board() {
  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      let isTherePiece: boolean = false;

      piece.forEach((p) => {
        if (p.x === i && p.y === j) {
          isTherePiece = true;
        }
      });

      board.push(<Tile number={number} isTherePiece={isTherePiece} />);
    }
  }
  return <div id="checkerboard">{board}</div>;
}

export default Board;

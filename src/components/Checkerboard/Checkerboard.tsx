import "./Checkerboard.css";
import Tile from "../Tile/Tile";
import { useState } from "react";

// prettier-ignore
const horizontalAxis: Array<string> = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",];
const verticalAxis: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Piece {
  x: number;
  y: number;
}

interface IPossibleMoves {
  x: number;
  y: number;
}

const defaultPosition: Piece[] = [{ x: 4, y: 4 }];
const defaultMoves: IPossibleMoves[] = [];

function Board() {
  let board = [];
  const [possibleMoves, setPossibleMoves] = useState(defaultMoves);
  const [piecePosition, setPiecePosition] = useState(defaultPosition);

  const handleKeyPress = (event: { key: string }) => {
    if (possibleMoves.length > 0) {
    } else if (possibleMoves.length === 0) {
    }
    if (event.key === "ArrowUp") {
    }
  };

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      let isTherePiece: boolean = false;
      let ifPossibleMove: boolean = false;

      piecePosition.forEach((p) => {
        if (p.x === i && p.y === j) {
          isTherePiece = true;
        }
      });

      possibleMoves.forEach((m) => {
        if (m.x === i && m.y === j) {
          ifPossibleMove = true;
        }
      });

      board.push(
        <Tile
          number={number}
          isTherePiece={isTherePiece}
          ifPossibleMove={ifPossibleMove}
        />
      );
    }
  }
  return (
    <div id="checkerboard" onKeyPress={handleKeyPress}>
      {board}
    </div>
  );
}

export default Board;

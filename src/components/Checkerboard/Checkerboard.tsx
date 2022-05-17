import "./Checkerboard.css";
import Tile from "../Tile/Tile";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (possibleMoves.length === 0) {
        if (event.key === "ArrowUp") {
          upHandler();
        } else if (event.key === "ArrowDown") {
          downHandler();
        } else if (event.key === "ArrowLeft") {
          leftHandler();
        } else if (event.key === "ArrowRight") {
          rightHandler();
        }
      } else if (possibleMoves.length === 2) {
        if (possibleMoves[0].y === possibleMoves[1].y) {
          horizontalMoves(event.key);
        } else if (possibleMoves[0].x === possibleMoves[1].x) {
          verticalMoves(event.key);
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [possibleMoves]);

  const horizontalMoves = (keyPressed: string) => {
    if (keyPressed === "ArrowLeft") {
      const newPiecePosition: Piece[] = [possibleMoves[0]];
      setPiecePosition(newPiecePosition);
      setPossibleMoves(defaultMoves);
    } else if (keyPressed === "ArrowRight") {
      const newPiecePosition: Piece[] = [possibleMoves[1]];
      setPiecePosition(newPiecePosition);
      setPossibleMoves(defaultMoves);
    } else if (keyPressed === "ArrowUp" || keyPressed === "ArrowDown") {
      setPossibleMoves(defaultMoves);
    }
  };

  const verticalMoves = (keyPressed: string) => {
    if (keyPressed === "ArrowDown") {
      const newPiecePosition: Piece[] = [possibleMoves[0]];
      setPiecePosition(newPiecePosition);
      setPossibleMoves(defaultMoves);
    } else if (keyPressed === "ArrowUp") {
      const newPiecePosition: Piece[] = [possibleMoves[1]];
      setPiecePosition(newPiecePosition);
      setPossibleMoves(defaultMoves);
    } else if (keyPressed === "ArrowLeft" || keyPressed === "ArrowRight") {
      setPossibleMoves(defaultMoves);
    }
  };

  const upHandler = () => {
    const upMoves: IPossibleMoves[] = [
      { x: piecePosition[0].x - 1, y: piecePosition[0].y + 1 },
      { x: piecePosition[0].x + 1, y: piecePosition[0].y + 1 },
    ];
    setPossibleMoves(upMoves);
  };

  const downHandler = () => {
    const downMoves: IPossibleMoves[] = [
      { x: piecePosition[0].x - 1, y: piecePosition[0].y - 1 },
      { x: piecePosition[0].x + 1, y: piecePosition[0].y - 1 },
    ];
    setPossibleMoves(downMoves);
  };

  const leftHandler = () => {
    const leftMoves: IPossibleMoves[] = [
      { x: piecePosition[0].x - 1, y: piecePosition[0].y - 1 },
      { x: piecePosition[0].x - 1, y: piecePosition[0].y + 1 },
    ];
    setPossibleMoves(leftMoves);
  };

  const rightHandler = () => {
    const rightMoves: IPossibleMoves[] = [
      { x: piecePosition[0].x + 1, y: piecePosition[0].y - 1 },
      { x: piecePosition[0].x + 1, y: piecePosition[0].y + 1 },
    ];
    setPossibleMoves(rightMoves);
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
    <div id="checkerboard" tabIndex={-1}>
      {board}
    </div>
  );
}

export default Board;

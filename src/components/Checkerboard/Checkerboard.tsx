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
      } else if (possibleMoves.length === 1) {
        onePossibleMove(event.key);
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
    } else if (
      keyPressed === "ArrowUp" ||
      keyPressed === "ArrowDown" ||
      keyPressed === "Escape"
    ) {
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
    } else if (
      keyPressed === "ArrowLeft" ||
      keyPressed === "ArrowRight" ||
      keyPressed === "Escape"
    ) {
      setPossibleMoves(defaultMoves);
    }
  };

  const onePossibleMove = (keyPressed: string) => {
    if (
      possibleMoves[0].x > piecePosition[0].x &&
      possibleMoves[0].y > piecePosition[0].y &&
      (keyPressed === "ArrowRight" || keyPressed === "ArrowUp")
    ) {
      const newPiecePosition: Piece[] = [possibleMoves[0]];
      setPiecePosition(newPiecePosition);
      setPossibleMoves(defaultMoves);
    } else if (
      possibleMoves[0].x > piecePosition[0].x &&
      possibleMoves[0].y < piecePosition[0].y &&
      (keyPressed === "ArrowRight" || keyPressed === "ArrowDown")
    ) {
      const newPiecePosition: Piece[] = [possibleMoves[0]];
      setPiecePosition(newPiecePosition);
      setPossibleMoves(defaultMoves);
    } else if (
      possibleMoves[0].x < piecePosition[0].x &&
      possibleMoves[0].y < piecePosition[0].y &&
      (keyPressed === "ArrowLeft" || keyPressed === "ArrowDown")
    ) {
      const newPiecePosition: Piece[] = [possibleMoves[0]];
      setPiecePosition(newPiecePosition);
      setPossibleMoves(defaultMoves);
    } else if (
      possibleMoves[0].x < piecePosition[0].x &&
      possibleMoves[0].y > piecePosition[0].y &&
      (keyPressed === "ArrowLeft" || keyPressed === "ArrowUp")
    ) {
      const newPiecePosition: Piece[] = [possibleMoves[0]];
      setPiecePosition(newPiecePosition);
      setPossibleMoves(defaultMoves);
    } else if (keyPressed === "Escape") {
      setPossibleMoves(defaultMoves);
    }
  };

  const possibilitiesToMove = {
    upLeft: { x: piecePosition[0].x - 1, y: piecePosition[0].y + 1 },
    upRight: { x: piecePosition[0].x + 1, y: piecePosition[0].y + 1 },
    downLeft: { x: piecePosition[0].x - 1, y: piecePosition[0].y - 1 },
    downRight: { x: piecePosition[0].x + 1, y: piecePosition[0].y - 1 },
  };

  const checkMove = (moveX: number, moveY: number) => {
    if (moveX >= 0 && moveX <= 9 && moveX >= 0 && moveY <= 9) {
      return true;
    } else {
      return false;
    }
  };

  const upHandler = () => {
    const upMoves: IPossibleMoves[] = [];
    if (checkMove(possibilitiesToMove.upLeft.x, possibilitiesToMove.upLeft.y)) {
      upMoves.push(possibilitiesToMove.upLeft);
    }
    if (
      checkMove(possibilitiesToMove.upRight.x, possibilitiesToMove.upRight.y)
    ) {
      upMoves.push(possibilitiesToMove.upRight);
    }

    setPossibleMoves(upMoves);
  };

  const downHandler = () => {
    const downMoves: IPossibleMoves[] = [];

    if (
      checkMove(possibilitiesToMove.downLeft.x, possibilitiesToMove.downLeft.y)
    ) {
      downMoves.push(possibilitiesToMove.downLeft);
    }
    if (
      checkMove(
        possibilitiesToMove.downRight.x,
        possibilitiesToMove.downRight.y
      )
    ) {
      downMoves.push(possibilitiesToMove.downRight);
    }

    setPossibleMoves(downMoves);
  };

  const leftHandler = () => {
    const leftMoves: IPossibleMoves[] = [];

    if (
      checkMove(possibilitiesToMove.downLeft.x, possibilitiesToMove.downLeft.y)
    ) {
      leftMoves.push(possibilitiesToMove.downLeft);
    }
    if (checkMove(possibilitiesToMove.upLeft.x, possibilitiesToMove.upLeft.y)) {
      leftMoves.push(possibilitiesToMove.upLeft);
    }

    setPossibleMoves(leftMoves);
  };

  const rightHandler = () => {
    const rightMoves: IPossibleMoves[] = [];

    if (
      checkMove(
        possibilitiesToMove.downRight.x,
        possibilitiesToMove.downRight.y
      )
    ) {
      rightMoves.push(possibilitiesToMove.downRight);
    }
    if (
      checkMove(possibilitiesToMove.upRight.x, possibilitiesToMove.upRight.y)
    ) {
      rightMoves.push(possibilitiesToMove.upRight);
    }

    setPossibleMoves(rightMoves);
  };

  const onResetButton = () => {
    setPossibleMoves(defaultMoves);
    setPiecePosition(defaultPosition);
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
    <div tabIndex={-1}>
      <div className="title">Checkers</div>
      <div id="checkerboard">{board}</div>
      <div className="description">
        <div>
          Position: {horizontalAxis[piecePosition[0].x]}
          {verticalAxis[piecePosition[0].y]}
        </div>
        <button className="description__reset-button" onClick={onResetButton}>
          Reset game
        </button>
      </div>
    </div>
  );
}

export default Board;

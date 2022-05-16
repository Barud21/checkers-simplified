import "./Checkerboard.css";
import Tile from "../Tile/Tile";

const horizontalAxis: Array<string> = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
];
const verticalAxis: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Board() {
  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;

      board.push(<Tile number={number} />);
    }
  }
  return <div id="checkerboard">{board}</div>;
}

export default Board;

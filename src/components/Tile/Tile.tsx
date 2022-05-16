import classNames from "classnames";
import "./Tile.css";

function Tile(props: { number: number; isTherePiece: boolean }) {
  if (props.number % 2 !== 0) {
    return <div className={"tile white-tile"}></div>;
  } else {
    return (
      <div className={classNames({ piece: props.isTherePiece === true })}></div>
    );
  }
}

export default Tile;

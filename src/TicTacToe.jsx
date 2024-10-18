import React, { useState } from "react";
import "./index.css";
import cross_icon from "./assets/cross.png";
import circle_icon from "./assets/circle.png";

let data = ["", "", "", "", "", "", "", "", ""];
function TicTacToe() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  const toggle = (e, num) => {
    e.preventDefault();
    if (lock || data[num] !== "") {
      return;
    }
    else if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "0";
      setCount(count + 1);
    }
    checkwin();
  };
  const checkwin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[0]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[2]);
    }
  };

  const won = (winner) => {
    titleRef.current.innerHTML=Congratulation;
    setLock(true);
  };

  return (
    <div className="board">
      <div className="row1">
        <div
          className="Box"
          onClick={(e) => {
            toggle(e, 0);
          }}
        ></div>
        <div
          className="Box"
          onClick={(e) => {
            toggle(e, 1);
          }}
        ></div>
        <div
          className="Box"
          onClick={(e) => {
            toggle(e, 2);
          }}
        ></div>
      </div>
      <div className="row2">
        <div
          className="Box"
          onClick={(e) => {
            toggle(e, 3);
          }}
        ></div>
        <div
          className="Box"
          onClick={(e) => {
            toggle(e, 4);
          }}
        ></div>
        <div
          className="Box"
          onClick={(e) => {
            toggle(e, 5);
          }}
        ></div>
      </div>
      <div className="row3">
        <div
          className="Box"
          onClick={(e) => {
            toggle(e, 6);
          }}
        ></div>
        <div
          className="Box"
          onClick={(e) => {
            toggle(e, 7);
          }}
        ></div>
        <div
          className="Box"
          onClick={(e) => {
            toggle(e, 8);
          }}
        ></div>
      </div>
    </div>
  );
}

export default TicTacToe;

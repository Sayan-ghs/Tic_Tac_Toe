import React from "react";
import TicTacToe from "./TicTacToe";

function App() {
  return (
    <div>
      <h1 ref={titleRef} className="font-bold text-3xl flex justify-center mt-[50px] text-white">
        The Tic Tac Toe Game In <span className="text-emerald-500 ml-2.5"> React</span>
      </h1>
      <TicTacToe />
      <div className=" flex justify-center items-center">
      <button className="bg-zinc-950 hover:bg-blue-900 text-emerald-500 font-bold py-3 px-7 rounded-[50px] mt-[25px] ">Reset</button>
      </div>
    </div>
  );
}
export default App;

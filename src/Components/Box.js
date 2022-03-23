import React from "react";
import "../Containers/App.css";

//Component for each box on the board
//Functional component used instead of class
function Box({ val, chooseBox }) {
  return (
    <div className="box" onClick={chooseBox}>
        {val}
    </div>
  );
}

export default Box;
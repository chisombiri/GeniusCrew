import React from "react";
import "../Containers/App.css";

//Functional component used instead of class
function Box({ val, chooseBox }) {
  return (
    <div className="box" onClick={chooseBox}>
        {val}
    </div>
  );
}

export default Box;
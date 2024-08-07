import React from "react";
import ReactDOM from "react-dom";
const fName = "Abhishek";
const lName = "Uphade";
ReactDOM.render(
  <div>
    <ul>
      <li>
        Simple method using two variables .
        <h1>
          {" "}
          Hello {fName} {lName} !
        </h1>
      </li>

      <li>
        {" "}
        Concatenation method adding two string .
        <h2>Hello {fName + " " + lName} !</h2>
      </li>

      <li>
        Advanced Method .<h3>Hello {`${fName} ${lName}`} !</h3>
      </li>
    </ul>

    <p>Your lucky number is {Math.floor(Math.random() * 10)} .</p>
  </div>,
  document.getElementById("root")
);

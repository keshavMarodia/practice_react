import React from "react";
import ReactDOM from "react-dom";
import Keshav,{printonce,printtwice} from "./india";
//start of greeting message
const date = new Date();
const hour = date.getHours();
console.log(hour);
let message;
const customstyle = {
  color: ""
};
if (hour < 12) {
  message = "Good Morning";
  customstyle.color = "cyan";
} else if (hour < 17) {
  message = "Good Afternoon";
  customstyle.color = "yellow";
} else {
  message = "Good night";
  customstyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customstyle}>
      {message}
    </h1>
    <Keshav />
    {printonce()}
    {printtwice()}
    </div>,
  document.getElementById("root")
);
//end of greeting message

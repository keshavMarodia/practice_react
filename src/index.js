import React from "react";
import ReactDOM from "react-dom";
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
  <h1 className="heading" style={customstyle}>
    {message}
  </h1>,
  document.getElementById("root")
);
//end of greeting message

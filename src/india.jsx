import React from "react";
import "./styles.css";

export function Keshav() {
  return <h1>hello world i am keshav marodia</h1>;
}
export function printonce() {
  return <h3 className="printonce">hello world </h3>;
}
export function printtwice() {
  return (
    <div className="printtwice">
      <span>hello world</span>
      <span>hello world</span>
    </div>
  );
}

export default Keshav;

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(" ");
  function Clickhandler(event) {
    setNumber(number.concat(event.target.value));
  }
  function clear() {
    setNumber("");
  }
  function calculate() {
    setNumber(eval(number).toString());
  }
  return (
    <>
      <h1>Simple Calculator </h1>
      <div className="Calculator">
        <input type="text" placeholder="0" value={number} />
        <input type="button" value="9" onClick={Clickhandler} />
        <input type="button" value="8" onClick={Clickhandler} />
        <input type="button" value="7" onClick={Clickhandler} />
        <input type="button" value="6" onClick={Clickhandler} />
        <input type="button" value="5" onClick={Clickhandler} />
        <input type="button" value="4" onClick={Clickhandler} />
        <input type="button" value="3" onClick={Clickhandler} />
        <input type="button" value="2" onClick={Clickhandler} />
        <input type="button" value="1" onClick={Clickhandler} />
        <input type="button" value="+" onClick={Clickhandler} />
        <input type="button" value="-" onClick={Clickhandler} />
        <input type="button" value="*" onClick={Clickhandler} />
        <input type="button" value="%" onClick={Clickhandler} />
        <input type="button" value="Clear" onClick={clear} />
        <input type="button" value="=" onClick={calculate} />
      </div>
    </>
  );
}

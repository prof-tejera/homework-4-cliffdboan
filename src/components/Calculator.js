import { /* useEffect, */ useState } from "react";
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import './calculator.css'

const Calculator = () => {
  /** Set the calculator screen state to an empty string  */
  const [calcValue, setCalcValue] = useState("");

  /** When a number is clicked, get the value of the input and append it to the screen */
  const handleNumberClick = (value) => {
    setCalcValue(calcValue + value);
  };

  /** Same thing as a number, but if 'c' is clicked, clear the screen.
   * If the equals sign is clicked, evaluate the expression.
   * If that leaves an error, let the user know.
   */
  const handleOperationClick = (value) => {
    if (value === "c") {
      setCalcValue("");
    } else if (value === "=") {
      try {
        setCalcValue(eval(calcValue));
      } catch (err) {
        setCalcValue("ERROR");
      }
      setCalcValue(eval(calcValue));
    } else {
      setCalcValue(calcValue + value);
    }
  };

  /**
   * Set arrays to iterate through when mounting components.
   * When a keyboard key is pressed, evaluate to the proper value/expression.
   */
  const numberArray = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "."];
  const operatorArray = ["+", "-", "*", "/", "c", "="];

  const handleKeyPress = (value) => {
    if (value.toLowerCase() === "c" || value === "=") {
      handleOperationClick(value)
    } else if (numberArray.includes(value) || operatorArray.includes(value)) {
      setCalcValue(calcValue + value);
    }
  };

  /*******
   * I tried to get this to work so that you can use keyboard inputs on load,
   * But it keeps wiping the screen unless a button is clicked manually.
   */
  // useEffect(() => {
  //   const handleKeyUp = (e) => {
  //     handleKeyPress(e.key);
  //   };

  //   window.addEventListener("keyup", handleKeyUp);

  //   return () => {
  //     window.removeEventListener("keyup", handleKeyUp);
  //   };
  // }, []);

  return (
    <div className="calculator">
      <Screen value={calcValue} />
      <div className="button-container">
        <div className="num-grid">
          {numberArray.map((el, i) => {
            return <Number
              key={(i)}
              value={el}
              onClick={handleNumberClick}
              onKeyUp={handleKeyPress} />
          })}
        </div>
        <div className="op-grid">
          {operatorArray.map((el, i) => {
            return <Operation
              key={(i)}
              value={el}
              onClick={handleOperationClick}
              onKeyUp={handleKeyPress} />
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

import Screen from "./Screen";
import Keyboard from "./Keyboard";
import React from "react";

function Calculator() {
  const [inputData, setInputData] = React.useState({
    previousNumber: "",
    operator: "",
    currentNumber: "",
  });

  function handleNumberInput(input) {
    //you cant have a number with first digit 0
    console.log(inputData.currentNumber.length);
    const { currentNumber } = inputData;

    const isCurrentNumberValid = !Number.isNaN(Number(currentNumber));

    if (inputData.currentNumber !== "0" && isCurrentNumberValid) {
      setInputData((prevInputData) => {
        return {
          ...prevInputData,
          currentNumber: prevInputData.currentNumber + input,
        };
      });
    }
  }

  function handlePointInput() {
    const { currentNumber } = inputData;

    const isCurrentNumberValid = !Number.isNaN(Number(currentNumber));

    // checking if current number isnt empty and doesnt include point

    if (currentNumber != "" && currentNumber.includes(".") === false) {
      setInputData((prevInputData) => {
        return {
          ...prevInputData,
          currentNumber: prevInputData.currentNumber + ".",
        };
      });
    }
  }

  function deleteDigit() {
    const { previousNumber, operator, currentNumber } = inputData;

    if (currentNumber === "" && operator === "") {
      setInputData((prevInputData) => {
        return {
          operator: prevInputData.operator,
          currentNumber: prevInputData.previousNumber.slice(0, -1),
          previousNumber: "",
        };
      });
    } else if (currentNumber === "" && operator != "") {
      setInputData((prevInputData) => {
        return {
          previousNumber: "",
          currentNumber: prevInputData.previousNumber,
          operator: "",
        };
      });
    } else
      setInputData((prevInputData) => {
        const newCurrentNumber = prevInputData.currentNumber.slice(0, -1);

        return {
          ...prevInputData,
          currentNumber: newCurrentNumber,
        };
      });
  }

  function clear() {
    setInputData({ previousNumber: "", operator: "", currentNumber: "" });
  }

  function handleOperatorInput(input) {
    const { currentNumber, operator } = inputData;

    const isCurrentNumberValid = !Number.isNaN(Number(currentNumber));

    if (operator === "" && isCurrentNumberValid) {
      setInputData((prevInputData) => {
        return {
          previousNumber: currentNumber,
          operator: input,
          currentNumber: "",
        };
      });
    }
  }

  function evaluate() {
    if (
      inputData.currentNumber === "" ||
      inputData.previousNumber === "" ||
      inputData.operator === ""
    ) {
      return;
    }

    let result;

    let firstNumber = Number(inputData.previousNumber);
    let secondNumber = Number(inputData.currentNumber);

    switch (inputData.operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;

      case "-":
        result = firstNumber - secondNumber;
        break;

      case "×":
        result = firstNumber * secondNumber;
        break;

      case "÷":
        result = firstNumber / secondNumber;
        break;

      case "%":
        result = (firstNumber / 100) * secondNumber;
        break;
    }

    if (result === undefined || isNaN(result) || !isFinite(result)) {
      result = "Error";
    }

    setInputData({
      previousNumber: "",
      operator: "",
      currentNumber: result.toString(),
    });
  }

  function changeSign() {
    let newOperator = inputData.operator;

    let newNumber = -1 * Number(inputData.currentNumber);

    if (inputData.operator === "+" && newNumber < 0) {
      newOperator = "-";
      newNumber = Math.abs(newNumber);
    } else if (inputData.operator === "-" && newNumber < 0) {
      newOperator = "+";
      newNumber = Math.abs(newNumber);
    }

    const newNumberString = newNumber.toString();

    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        operator: newOperator,
        currentNumber: newNumberString,
      };
    });
  }

  return (
    <div className="calculator-container">
      <Screen inputData={inputData} />
      <Keyboard
        numberOnClick={handleNumberInput}
        pointOnClick={handlePointInput}
        clearOnClick={clear}
        deleteOnClick={deleteDigit}
        operatorOnClick={handleOperatorInput}
        equalOnClick={evaluate}
        changeSignOnClick={changeSign}
      />
    </div>
  );
}

export default Calculator;

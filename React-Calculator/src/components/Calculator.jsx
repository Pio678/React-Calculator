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
    if (inputData.currentNumber !== "0") {
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

  function handleDelete() {
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

  function handleClear() {
    setInputData({ previousNumber: "", operator: "", currentNumber: "" });
  }

  function handleOperatorInput(input) {
    const { currentNumber, operator } = inputData;
    if (operator === "") {
      setInputData((prevInputData) => {
        return {
          previousNumber: currentNumber,
          operator: input,
          currentNumber: "",
        };
      });
    }
  }

  function handleEvaluate() {
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

    if (result === undefined || result === NaN) {
      result = "Error";
    }
    console.log(result);

    setInputData({
      previousNumber: "",
      operator: "",
      currentNumber: result.toString(),
    });
  }

  return (
    <div className="calculator-container">
      <Screen inputData={inputData} />
      <Keyboard
        numberOnClick={handleNumberInput}
        pointOnClick={handlePointInput}
        clearOnClick={handleClear}
        deleteOnClick={handleDelete}
        operatorOnClick={handleOperatorInput}
        equalOnClick={handleEvaluate}
      />
    </div>
  );
}

export default Calculator;

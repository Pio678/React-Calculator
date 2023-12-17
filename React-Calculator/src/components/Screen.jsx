function Screen({ inputData }) {
  const { previousNumber, operator, currentNumber } = inputData;
  return (
    <div className="screen-container">
      <div className="upper-display">
        {`${previousNumber} ${operator} ${currentNumber}`}
      </div>
      <div className="lower-display"></div>
    </div>
  );
}

export default Screen;

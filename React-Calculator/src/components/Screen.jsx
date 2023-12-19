function Screen({ inputData }) {
  const { previousNumber, operator, currentNumber } = inputData;
  return (
    <div className="screen-container">
      {`${previousNumber} ${operator} ${currentNumber}`}
    </div>
  );
}

export default Screen;

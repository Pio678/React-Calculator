function Screen({ inputData }) {
  const { previousNumber, operator, currentNumber } = inputData;

  return (
    <div className="screen-container">
      <div className="screen-inner-container">{`${previousNumber} ${operator}\xa0${currentNumber}`}</div>
    </div>
  );
}

export default Screen;

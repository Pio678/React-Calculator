import Button from "./Button";
import deleteIcon from "../assets/icons/delete-black.png";

function Keyboard({
  numberOnClick,
  pointOnClick,
  clearOnClick,
  deleteOnClick,
  operatorOnClick,
  equalOnClick,
}) {
  return (
    <div className="keyboard-container">
      <Button buttonSymbol="AC" className="dark" handleClick={clearOnClick} />
      <Button buttonSymbol="±" className="dark" handleClick={() => {}} />
      <Button
        buttonSymbol="%"
        className="dark"
        handleClick={() => {
          operatorOnClick("%");
        }}
      />
      <Button
        buttonSymbol="÷"
        className="orange"
        handleClick={() => {
          operatorOnClick("÷");
        }}
      />

      <Button
        buttonSymbol="7"
        className="light"
        handleClick={() => {
          numberOnClick("7");
        }}
      />
      <Button
        buttonSymbol="8"
        className="light"
        handleClick={() => {
          numberOnClick("8");
        }}
      />
      <Button
        buttonSymbol="9"
        className="light"
        handleClick={() => {
          numberOnClick("9");
        }}
      />
      <Button
        buttonSymbol="×"
        className="orange"
        handleClick={() => {
          operatorOnClick("×");
        }}
      />

      <Button
        buttonSymbol="4"
        className="light"
        handleClick={() => {
          numberOnClick("4");
        }}
      />
      <Button
        buttonSymbol="5"
        className="light"
        handleClick={() => {
          numberOnClick("5");
        }}
      />
      <Button
        buttonSymbol="6"
        className="light"
        handleClick={() => {
          numberOnClick("6");
        }}
      />
      <Button
        buttonSymbol="-"
        className="orange"
        handleClick={() => {
          operatorOnClick("-");
        }}
      />

      <Button
        buttonSymbol="1"
        className="light"
        handleClick={() => {
          numberOnClick("1");
        }}
      />
      <Button
        buttonSymbol="2"
        className="light"
        handleClick={() => {
          numberOnClick("2");
        }}
      />
      <Button
        buttonSymbol="3"
        className="light"
        handleClick={() => {
          numberOnClick("3");
        }}
      />
      <Button
        buttonSymbol="+"
        className="orange"
        handleClick={() => {
          operatorOnClick("+");
        }}
      />

      <Button
        buttonSymbol="0"
        className="light"
        handleClick={() => {
          numberOnClick("0");
        }}
      />
      <Button buttonSymbol="." className="light" handleClick={pointOnClick} />
      <Button
        buttonSymbol=""
        className="light"
        buttonImg={deleteIcon}
        handleClick={deleteOnClick}
      />
      <Button buttonSymbol="=" className="orange" handleClick={equalOnClick} />
    </div>
  );
}

export default Keyboard;

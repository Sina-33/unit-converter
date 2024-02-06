import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState(0);
  const [fromUnit, setFromUnit] = useState(units[0].factor);
  const [toUnit, setToUnit] = useState(units[0].factor);

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
  };
  const handleChangeSelectionFrom = (e) => {
    setFromUnit(e.target.value);
  };
  const handleChangeSelectionTo = (e) => {
    setToUnit(e.target.value);
  };
  const handleConvertClick = () => {
    if (!amount) {
      setResult(0);
    } else {
      const firstStep = amount * fromUnit;
      const secondStep = firstStep / toUnit;
      setResult(parseFloat(secondStep));
    }
  };

  return (
    <>
      <div className="converter-form">
        <Input label="Amount" onChange={handleAmountChange} />
        <div className="row">
          <Select
            label="From"
            name="From"
            items={units}
            onChange={(value) => handleChangeSelectionFrom(value)}
          />
          <Select
            label="To"
            name="To"
            items={units}
            onChange={(value) => handleChangeSelectionTo(value)}
          />
          <button onClick={handleConvertClick}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;

import Header from "./components/Header";
import { Result } from "./components/Result";
import { UserInput } from "./components/UserInput";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

const USER_INPUT_LABEL = [
  "Initial Investment",
  "Annual Investment",
  "Expected Return",
  "Duration",
];

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedreturn: 0,
    duration: 0,
  })
  const [calculatedResult, setCalculatedResult] = useState([]);

  function handleChange(event, id) {
    const value = parseFloat(event.target.value)
    setUserInput((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const result = calculateInvestmentResults(userInput);
  setCalculatedResult(result);

  return (
    <>
      <Header />
      <div id="user-input">
        <div className="input-group">
          <UserInput
            label={USER_INPUT_LABEL[0]}
            id="initialInvestment"
            onHandleChange={handleChange}
          />
          <UserInput
            label={USER_INPUT_LABEL[1]}
            id="annualInvestment"
            onHandleChange={handleChange}
          />
        </div>
        <div className="input-group">
          <UserInput
            label={USER_INPUT_LABEL[2]}
            id="expectedReturn"
            onHandleChange={handleChange}
          />
          <UserInput
            label={USER_INPUT_LABEL[3]}
            id="duration"
            onHandleChange={handleChange}
          />
        </div>
      </div>
      <Result />
    </>
  );
}

export default App;

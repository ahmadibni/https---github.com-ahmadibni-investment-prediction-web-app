import Header from "./components/Header";
import { Result } from "./components/Result";
import { UserInput } from "./components/UserInput";
import { useState } from "react";

const USER_INPUT_LABEL = [
  "Initial Investment",
  "Annual Investment",
  "Expected Return",
  "Duration",
];

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(value, id) {
    const newValue = parseFloat(value);
    setUserInput((prev) => ({
      ...prev,
      [id]: newValue,
    }));
  }


  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <UserInput
            label={USER_INPUT_LABEL[0]}
            id="initialInvestment"
            onChange={handleChange}
            value={userInput.initialInvestment}
          />
          <UserInput
            label={USER_INPUT_LABEL[1]}
            id="annualInvestment"
            onChange={handleChange}
            value={userInput.annualInvestment}
          />
        </div>
        <div className="input-group">
          <UserInput
            label={USER_INPUT_LABEL[2]}
            id="expectedReturn"
            onChange={handleChange}
            value={userInput.expectedReturn}
          />
          <UserInput
            label={USER_INPUT_LABEL[3]}
            id="duration"
            onChange={handleChange}
            value={userInput.duration}
          />
        </div>
      </section>
      {inputIsValid ? (
        <Result input={userInput} />
      ) : (
        <p className="center">Please enter a duration more tha zero.</p>
      )}
    </>
  );
}

export default App;

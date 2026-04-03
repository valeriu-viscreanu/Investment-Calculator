import Header from './components/Header.jsx';
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';
import { useState } from "react";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, value) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +value
      }
    })
  }


  return (
    <>
      <Header />
      <UserInput OnChange={handleChange} userInput={userInput} />
      {inputIsValid ? <Results input={userInput} /> : <p className='center'>Please enter valid input</p>}
    </>
  );
}

export default App;

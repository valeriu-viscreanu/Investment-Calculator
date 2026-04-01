import Header from './components/Header.jsx';
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';
import { useState } from "react";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  })

  function handleChange(inputIdentifier, value) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: value
      }
    })
  }


  return (
    <>
      <Header />
      <UserInput OnChange={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  );
}

export default App;

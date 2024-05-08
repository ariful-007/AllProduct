import { useEffect, useState } from "react";


const GuessingGame = () => {
  const [guess, setGuess] = useState('')
  const [message, setMessage] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [guessingStarted, setGuessingStarted] = useState(false)
  const [chanceAttempts, setChanceAttempts] = useState(4)
  const [correctNumber, setCorrectNumber] = useState('')
  const [numberToGuess, setNumberToGuess] = useState(localStorage.getItem('numberToGuess') || '')


  const handleNumberChange = (e) => {
    setNumberToGuess(e.target.value);
  }
  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    if(guessingStarted){
      if(guess === ""){
        setMessage('Please Enter Your Guess');
        return;
      }
      const userGuess = parseInt(guess);
      if(isNaN(userGuess)){
        setMessage("please Enter a valid Number for Your Guess!");
        return;
      }
      setAttempts(attempts + 1);
      setChanceAttempts(chanceAttempts - 1);

      if(userGuess === parseInt(numberToGuess)){
        setMessage(`Congratulations! Your Guessed The Number ${numberToGuess} in ${attempts + 1} Attempts!`);
        setNumberToGuess('')
        setGuess('')
        setAttempts(0)
        setGuessingStarted(false)
        setChanceAttempts(4)
      } else if (userGuess > parseInt(numberToGuess)){
        setMessage("Your Guess is too high!");
      } else{
        setMessage("Your Guess is too low!");
      }
      if(chanceAttempts <= 1){
        setMessage(`Game Over! The Correct Number Was ${correctNumber}`);
        setNumberToGuess('')
        setGuess('')
        setAttempts(0)
        setGuessingStarted(false)
        setChanceAttempts(4)
      }
      setGuess('')
    } else {
      if( numberToGuess === ""){
        setMessage('Please Set a Number to Guess');
        return;
      }
      setGuessingStarted(true);
      setCorrectNumber(numberToGuess);
    }
  };

  useEffect(()=>{
    localStorage.setItem('numberToGuess', numberToGuess)
  },[numberToGuess]);


  return (
    <div className=" flex flex-col items-center justify-center h-screen bg-slate-300">
      <h1 className=" text-3xl font-bold mb-4"> Number Guessing Game</h1>
      <form onSubmit={handelSubmit} className="flex flex-col items-center">
        {
          guessingStarted ? (
            <input type="password" value={guess} onChange={handleGuessChange} placeholder="Your Guess" className=" mb-2 p-2 border border-orange-500 rounded-lg outline-none" />
          ) :(
            <input type="password" value={numberToGuess} onChange={handleNumberChange} placeholder="Set a Number to Guess" className=" mb-2 p-2 border border-orange-500 rounded-lg outline-none" />
          
        )}
        <button type="submit" className=" bg-green-600 text-base font-medium mt-3 px-4 py-2 rounded"> {guessingStarted ? "Guess" : "Set Number"} </button>
      </form>
      <p className=" mt-4 text-lg text-red-600">{message}</p>
      {guessingStarted && <p>Attempts:{attempts}</p>}
    </div>
  );
};

export default GuessingGame;
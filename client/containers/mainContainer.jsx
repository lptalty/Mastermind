import React, { useState } from 'react';
import NumberService from '../services/numberService'
import ContentContainer from './contentContainer/contentContainer.jsx';
import { id } from 'postcss-selector-parser';

const MainContainer = ({numberList, setNumberList}) => {
  const [guessList, setGuessList] = useState(['0','0','0','0']);
  const [numGuess, setNumGuess] = useState(1);
  const [didWin, setDidWin] = useState(false);
  const [result, setResult] = useState([]);
  const [savedGuess, setSavedGuess] = useState([]);

  //function to determine if user won
  const compareButton = (computerNumbers, userNumbers) => {
    const finalArr = NumberService.compareNumbers(computerNumbers, userNumbers);
    let final = true;
    //easier to check if the user lost rather than won, one instance of the wrong guess is a total loss
    for (let i = 0; i < finalArr.length; i++) {
      if (finalArr[i] !== 2) {
        final = false;
      }
    }
    //if the user won then final will equal true and the game will be over
    setDidWin(final)
    //result is the hint that the computer responded with, that is saved to result array and later mapped in answerList
    setResult(result => [...result, [...finalArr]])
  }

  //When user clicks submit button, checks if user won, saves the users guess, and increases current number of guesses
  const submitHandler = () => {
    if (numGuess <= 10 && didWin !== true) {
        compareButton(numberList, guessList)
        setSavedGuess(savedGuess => [...savedGuess, [...guessList]])
        setNumGuess(numGuess + 1)
      }
    }

  //checking if user won within correct parameters
  const gameStatus = () => {
    if (numGuess < 11 && !didWin) {
      return <div className='did-guess'>Current number of guesses: {numGuess} out of 10</div>
    } else if (numGuess <= 11 && didWin) {
      return <div className='did-win'>YOU WIN</div>
    } else if (numGuess === 11 && !didWin) {
      return <div className='did-lose'>YOU LOSE</div>
    }
  }

  return (
    <div className='main-container'>
        <div>Showing Computers Number for demo: {numberList}</div> 
        {gameStatus()}
        <ContentContainer
          guessList={guessList}
          setGuessList={setGuessList}
          savedGuess={savedGuess}
          result={result}
        />
        <div className ='submitBtn-container'>
        <button
            className='submit-btn'
            onClick={submitHandler}
            >
              Submit
              </button>
        </div>
    </div>
  );
};

export default MainContainer;

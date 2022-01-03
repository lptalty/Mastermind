import React, { useState } from 'react';
import NumberService from '../services/numberService'
import ContentContainer from './contentContainer/contentContainer.jsx';
import { id } from 'postcss-selector-parser';

const MainContainer = ({numberList, setNumberList}) => {
  // const [guessList, setGuessList] = useState(['First Guess', 'Second Guess', 'Third Guess', 'Fourth Guess']);
  const [guessList, setGuessList] = useState(['1','2','3','4']);
  const [numGuess, setNumGuess] = useState(1);
  const [didWin, setDidWin] = useState(false);
  const [result, setResult] = useState([]);
  const [savedGuess, setSavedGuess] = useState([]);

  const compareButton = (computerNumbers, userNumbers) => {
    // console.log('computer choices equal: ', computerNumbers, 'userNumbers choices equal: ', userNumbers)
    const finalArr = NumberService.compareNumbers(computerNumbers, userNumbers);
    console.log('Result within App.js equals: ', finalArr);
    let final = true;

    for (let i = 0; i < finalArr.length; i++) {
      if (finalArr[i] !== 2) {
        final = false;
      }
    }
    console.log('didWin equals: ', final);
    setDidWin(final)
    setResult(result => [...result, [...finalArr]])
  }

  const submitHandler = () => {
    if (numGuess <= 10 && didWin !== true) {
      console.log('numGuess equals: ', numGuess)
        compareButton(numberList, guessList)
        setSavedGuess(savedGuess => [...savedGuess, [...guessList]])
        setNumGuess(numGuess + 1)
      }
    }
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
        <div>{numberList}</div> 
        {gameStatus()}
        <ContentContainer
          numberList={numberList}
          guessList={guessList}
          setGuessList={setGuessList}
          numGuess={numGuess}
          setNumGuess={setNumGuess}
          didWin={didWin}
          setDidWin={setDidWin}
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

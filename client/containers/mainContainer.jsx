import React, { component, useEffect, useState } from 'react';
import NumberService from '../services/numberService'
import ContentContainer from './contentContainer/contentContainer.jsx';
import { id } from 'postcss-selector-parser';

const MainContainer = ({numberList, setNumberList}) => {
  // const [guessList, setGuessList] = useState(['First Guess', 'Second Guess', 'Third Guess', 'Fourth Guess']);
  const [guessList, setGuessList] = useState(['1','2','3','4']);
  const [numGuess, setNumGuess] = useState(1);
  const [didWin, setDidWin] = useState(null);
  const [didLose, setDidLose] = useState(null);
  const [result, setResult] = useState([]);
  const [savedGuess, setSavedGuess] = useState([]);

  const compareButton = (computerNumbers, userNumbers) => {
    // console.log('computer choices equal: ', computerNumbers, 'userNumbers choices equal: ', userNumbers)
    const finalArr = NumberService.compareNumbers(computerNumbers, userNumbers);
    console.log('Result within App.js equals: ', finalArr);
    let result = true;

    for (let i = 0; i < finalArr.length; i++) {
      if (finalArr[i] !== 2) {
        result = false;
      }
    }
    console.log('didWin equals: ', result);
    setDidWin(result)
    setResult(result => [...result, [...finalArr]])
  }
  
  return (
    <div className='main-container'>
        <div>Current number of guesses: {numGuess} out of 10</div>
        <div>{numberList}</div> 
        <div>
            {didWin && <div>YOU WON</div>}
            {didLose && <div>YOU LOST</div>}
        </div>
        <ContentContainer
          numberList={numberList}
          guessList={guessList}
          setGuessList={setGuessList}
          numGuess={numGuess}
          setNumGuess={setNumGuess}
          didWin={didWin}
          setDidWin={setDidWin}
          didLose={didLose}
          setDidLose={setDidLose}
          savedGuess={savedGuess}
          result={result}
        />
        <div className ='submitBtn-container'>
        <button
            className='submit-btn'
            onClick={(e) => {

              compareButton(numberList, guessList)
              setSavedGuess(savedGuess => [...savedGuess, [...guessList]])
              if (numGuess === 10){
                setDidLose(true);
                return;
              } 
              setNumGuess(numGuess + 1)
              }
            }
            >
              Submit
              </button>
        </div>
    </div>
  );
};

export default MainContainer;

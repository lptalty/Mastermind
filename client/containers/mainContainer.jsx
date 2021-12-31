import React, { component, useEffect, useState } from 'react';
import NumberService from '../services/numberService';
import ContentContainer from './contentContainer/contentContainer.jsx';
import { id } from 'postcss-selector-parser';

const MainContainer = () => {
  const [numberList, setNumberList] = useState([]);
  const [guessList, setGuessList] = useState(['First Guess', 'Second Guess', 'Third Guess', 'Fourth Guess']);
  const [numGuess, setNumGuess] = useState(1);
  const [toggle, setToggle] = useState(true);
  const [error, setError] = useState(null);

  const onClickButton = async () => {
    try {
      const result = await NumberService.getComputerNumbers();
      const finalArr = [];
      
      //result is saved as a string with an empty item at each odd index
      //therefore have to iterate through the string by even index numbers
      for (let i = 0; i < result.length - 1; i+=2) {
        finalArr.push(result[i])
      }
      
      //save final value within react state using hooks
      setNumberList(finalArr); 

    } catch (error) {
      console.log('catch within app.js', error)
      setError(error);
    }
  }
  
  return (
    <div className='main-container'>
      {error ? <div>There was an error getting computer number</div> : <div> Getting Random Numbers with API</div>}
      {toggle ? 
      <button
      onClick={(e) => {
        onClickButton()
        setToggle(false);
        }
      }
      >
        New Game
        </button>
        :
        <div>Current number of guesses: {numGuess} out of 10</div>
        }
        <div>{numberList}</div> 
        <ContentContainer
          numberList={numberList}
          guessList={guessList}
          setGuessList={setGuessList}
          numGuess={numGuess}
          setNumGuess={setNumGuess}
        />
    </div>
  );
};

export default MainContainer;

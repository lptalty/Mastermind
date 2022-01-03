import React, { useState } from 'react';
import NumberService from '../services/numberService';
import MainContainer from './mainContainer.jsx';
import { id } from 'postcss-selector-parser';

const StartContainer = () => {
  const [numberList, setNumberList] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [error, setError] = useState(null);

  //Sends API call to create the computers number 
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
      //saves error within hook that is displayed on the screen for user
      setError(error);
    }
  }
  
  return (
    <div >
      {error 
        ? <div>There was an error getting computer number</div> 
            : toggle 
            ? <button
                onClick={(e) => {
                onClickButton()
                setToggle(false);
                    }
                }
                className='start-button'
                >
                New Game
                </button>
            : <MainContainer
                numberList={numberList}
                setNumberList={setNumberList}
                />
      }
    </div>
  );
};

export default StartContainer;

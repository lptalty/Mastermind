import React, { component, useEffect, useState } from 'react';
import NumberService from './services/numberService'

const App = () => {
  const [numberList, setNumberList] = useState([]);

  const onClickButton = async (url) => {
    const result = await NumberService.getComputerNumbers(url);
    const finalArr = [];
    
    //result is saved as a string with an empty item at each odd index
    //therefore have to iterate through the string by even index numbers
    for (let i = 0; i < result.length - 1; i+=2) {
      finalArr.push(result[i])
    }
    
    //save final value within react state using hooks
    setNumberList(finalArr)
  }
  
  return (
    <div>
      <div> Getting Random Numbers with API</div>
      <button
      onClick={(e) =>
        onClickButton('http://localhost:3000/api/computer')
      }
      >
        Click me
        </button>
        <div>{numberList}</div>
        <div>{numberList[0]}</div>
        <div>{numberList[1]}</div>
        <div>{numberList[2]}</div>
        <div>{numberList[3]}</div>
    </div>
  );
};

export default App;

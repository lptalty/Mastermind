import React, { component, useEffect, useState } from 'react';
import NumberService from './services/numberService'
import {DropdownButton, ButtonGroup, Dropdown} from 'react-bootstrap'
import styles from './scss/application.scss';
import { id } from 'postcss-selector-parser';

const App = () => {
  const [numberList, setNumberList] = useState([]);
  const [guessList, setGuessList] = useState(['First Guess', 'Second Guess', 'Third Guess', 'Fourth Guess'])

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
    <div className='main-container'>
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
        
        <div className='guess-container'>
            {guessList.map(
              (variant, index) => (
                <DropdownButton
                  as={ButtonGroup}
                  id={`${index}`}
                  key={index}
                  variant={variant.toLowerCase()}
                  title={variant}
                >
                  <Dropdown.Item eventKey="0"
                   onClick={(e) => {
                     //have to update the button 1 2 3 4 at index 0 1 2 3 to the selected number using hooks
                    //how do we know which button we're clicking? 
                    console.log('Index should be 3: ', index)
                    console.log('value should be 0', e.target.innerText)
                    console.log(guessList)
                    guessList[index] = e.target.innerText;
                    console.log(guessList)
                    setGuessList([...guessList]);

                    //this works
                    // setGuestList(['please']);   
                   }
                  }
                  >0</Dropdown.Item>


                  <Dropdown.Item eventKey="1"
                  onClick={(e) => console.log(e)}
                  >1</Dropdown.Item>
                  <Dropdown.Item eventKey="2">2</Dropdown.Item>
                  <Dropdown.Item eventKey="3">3</Dropdown.Item>
                  <Dropdown.Item eventKey="4">4</Dropdown.Item>
                  <Dropdown.Item eventKey="5">5</Dropdown.Item>
                  <Dropdown.Item eventKey="6">6</Dropdown.Item>
                  <Dropdown.Item eventKey="7">7</Dropdown.Item>
                </DropdownButton>
              ),
            )}
        </div>
    </div>
  );
};

export default App;

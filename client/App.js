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

  //add function here to compare
  const compareButton = (computerNumbers, userNumbers) => {
    console.log('computer choices equal: ', computerNumbers, 'userNumbers choices equal: ', userNumbers)
    const result = NumberService.compareNumbers(computerNumbers, userNumbers);
    console.log('Result within App.js equals: ', result);
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
                    guessList[index] = e.target.innerText;
                    setGuessList([...guessList]);
                   }
                  }
                  >0</Dropdown.Item>
                  <Dropdown.Item eventKey="1"
                  onClick={(e) => {
                    guessList[index] = e.target.innerText;
                    setGuessList([...guessList]);
                   }
                  }
                  >1</Dropdown.Item>
                  <Dropdown.Item eventKey="2"
                  onClick={(e) => {
                    guessList[index] = e.target.innerText;
                    setGuessList([...guessList]);
                   }
                  }
                  >2</Dropdown.Item>
                  <Dropdown.Item eventKey="3"
                  onClick={(e) => {
                    guessList[index] = e.target.innerText;
                    setGuessList([...guessList]);
                   }
                  }
                  >3</Dropdown.Item>
                  <Dropdown.Item eventKey="4"
                  onClick={(e) => {
                    guessList[index] = e.target.innerText;
                    setGuessList([...guessList]);
                   }
                  }>4</Dropdown.Item>
                  <Dropdown.Item eventKey="5"
                  onClick={(e) => {
                    guessList[index] = e.target.innerText;
                    setGuessList([...guessList]);
                   }
                  }>5</Dropdown.Item>
                  <Dropdown.Item eventKey="6"
                  onClick={(e) => {
                    guessList[index] = e.target.innerText;
                    setGuessList([...guessList]);
                   }
                  }>6</Dropdown.Item>
                  <Dropdown.Item eventKey="7"
                  onClick={(e) => {
                    guessList[index] = e.target.innerText;
                    setGuessList([...guessList]);
                   }
                  }>7</Dropdown.Item>
                </DropdownButton>
              ),
            )}
            <button
            onClick={(e) => {
              compareButton(numberList, guessList)
              }
            }
            >
              Submit Answer</button>
        </div>
    </div>
  );
};

export default App;

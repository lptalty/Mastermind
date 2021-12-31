import React from 'react';
import NumberService from '../services/numberService'
import {DropdownButton, ButtonGroup, Dropdown} from 'react-bootstrap';

const AnswerItem = ({
    numberList,
    guessList,
    setGuessList,
    savedGuess,
    setSavedGuess,
    numGuess,
    setNumGuess,
    setDidWin
}) => {
    //individual items have to be put into answer item and then we can use map with answer list to upload our results
//look at containerlist and container item within dockure as a reference if necessary 
//add function here to compare
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
  }

return (
    <div>
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
        </div>
        
         <button
            onClick={(e) => {
              
              compareButton(numberList, guessList)
              setSavedGuess(savedGuess => [...savedGuess, [...guessList]])
              setNumGuess(numGuess + 1)
              if (numGuess === 10) console.log('YOU LOSE')
              
              }
            }
            >
              Submit Answer</button>
    </div>
    
    );
};

export default AnswerItem;
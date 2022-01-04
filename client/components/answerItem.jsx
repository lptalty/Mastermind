import React from 'react';
import {DropdownButton, ButtonGroup, Dropdown} from 'react-bootstrap';

const AnswerItem = ({
    guessList,
    setGuessList,
}) => {
   
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
                  className='dropdown-btn'
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
    </div>
    );
};

export default AnswerItem;
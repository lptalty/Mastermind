import React, {useState} from 'react';
import AnswerItem from './answerItem.jsx';

const AnswerList = ({
    numberList,
    guessList,
    setGuessList,
    numGuess,
    setNumGuess,
    setDidWin,
    setDidLose,
    savedGuess,
    result
}) => {

    // const [savedGuess, setSavedGuess] = useState([]);
    // const [result, setResult] = useState([])

    const answers = savedGuess.map((answer, ind) => {
        //need to include the guess result here so that the user can know how they did 
        //this is what shows up on the page 

        //also save the result at the same index within the return
        return (
            <div className='response-container'>
                <div key={ind} className='user-answer'>{answer}</div>
                <div key={ind + 10} className='computer-response'>{result[ind]}</div>
            </div>
        )
    })

    return (
        <div>
        <ul>{answers}</ul>
        <AnswerItem
                numberList={numberList}
                guessList={guessList}
                setGuessList={setGuessList}
                // savedGuess={savedGuess}
                // setSavedGuess={setSavedGuess}
                numGuess={numGuess}
                setNumGuess={setNumGuess}
                setDidWin={setDidWin}
                // setResult={setResult}
                setDidLose={setDidLose}
            />
        </div>
    )
}

export default AnswerList
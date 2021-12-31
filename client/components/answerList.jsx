import React, {useState} from 'react';
import AnswerItem from './answerItem.jsx';

const AnswerList = ({
    numberList,
    guessList,
    setGuessList,
    numGuess,
    setNumGuess,
    setDidWin
}) => {

    const [savedGuess, setSavedGuess] = useState([]);

    const answers = savedGuess.map((answer, ind) => {
        
        return (
           <div key={ind}>{answer}</div>
        )
    })

    return (
        <div>
        <ul>{answers}</ul>
        <AnswerItem
                numberList={numberList}
                guessList={guessList}
                setGuessList={setGuessList}
                savedGuess={savedGuess}
                setSavedGuess={setSavedGuess}
                numGuess={numGuess}
                setNumGuess={setNumGuess}
                setDidWin={setDidWin}
            />
        </div>
    )
}

export default AnswerList
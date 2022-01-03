import AnswerList from '../../components/answerList.jsx'
import React, {useState} from 'react';

const ContentContainer = ({
    numberList,
    guessList,
    setGuessList,
    numGuess,
    setNumGuess,
    didWin,
    setDidWin,
    didLose,
    setDidLose,
    savedGuess,
    result
}) => {
    return (
        <div>
            <div>
            <AnswerList
                numberList={numberList}
                guessList={guessList}
                setGuessList={setGuessList}
                numGuess={numGuess}
                setNumGuess={setNumGuess}
                didWin={didWin}
                setDidWin={setDidWin}
                savedGuess={savedGuess}
                result={result}
            />
            </div>
        </div>

    )
}
export default ContentContainer;
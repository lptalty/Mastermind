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
        console.log('answer equals: ', answer)

        let answerStr = '';
        const resultArr = [];
        for (let i = 0; i < answer.length; i++) {
            answerStr += '\xa0'.repeat(4) + answer[i] + '\xa0'.repeat(4)
        }

        for (let j = 0; j < result[ind].length; j++) {
            resultArr.push( <div className='computer-result' key={j}>{result[ind][j]}</div>)
        }
        //also save the result at the same index within the return
        return (
            <div className='response-list' key={ind}>
                <div className='user-answer'>{answerStr}</div>
                <div className='computer-response'>{resultArr}</div>
            </div>
        )
    })

    return (
        <div>
        {/* <ul>{answers}</ul> */}
        <div className='response-container'>{answers}</div>
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
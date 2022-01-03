import React, {useState} from 'react';
import AnswerItem from './answerItem.jsx';

const AnswerList = ({
    guessList,
    setGuessList,
    savedGuess,
    result
}) => {


    //This function saves the users guesses and the computers hints as divs that are mapped and displayed
    const answers = savedGuess.map((answer, ind) => {
        
        let answerStr = '';
        const resultArr = [];

        //iterating through the users answer and creating space in between numbers for ease of visability
        for (let i = 0; i < answer.length; i++) {
            answerStr += '\xa0'.repeat(4) + answer[i] + '\xa0'.repeat(4)
        }
        //iterating through the hint and savining within individual divs to save within a visual four square
        for (let j = 0; j < result[ind].length; j++) {
            resultArr.push( <div className='computer-result' key={j}>{result[ind][j]}</div>)
        }

        return (
            <div className='response-list' key={ind}>
                <div className='user-answer'>{answerStr}</div>
                <div className='computer-response'>{resultArr}</div>
            </div>
        )
    })

    return (
        <div>
        <div className='response-container'>{answers}</div>
        <AnswerItem
                guessList={guessList}
                setGuessList={setGuessList}
            />
        </div>
    )
}

export default AnswerList
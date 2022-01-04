import AnswerList from '../../components/answerList.jsx'
import React from 'react';

const ContentContainer = ({
    guessList,
    setGuessList,
    savedGuess,
    result
}) => {
    return (
        <div>
            <div>
            <AnswerList
                guessList={guessList}
                setGuessList={setGuessList}
                savedGuess={savedGuess}
                result={result}
            />
            </div>
        </div>

    )
}
export default ContentContainer;
import AnswerList from '../../components/answerList.jsx'
import React, {useState} from 'react';

const ContentContainer = ({
    numberList,
    guessList,
    setGuessList,
    numGuess,
    setNumGuess
}) => {
    const [didWin, setDidWin] = useState(false);

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
            />
            </div>
            <div>
            {didWin ? <div>YOU WON</div> : <div>still playing</div>}
            </div>
        </div>

    )
}
export default ContentContainer;
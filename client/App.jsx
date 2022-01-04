import React from 'react'
import StartContainer from './containers/startContainer.jsx'
import styles from './scss/application.scss';

const App = () => {
    return (
      <div className='background'>
        <div className='title'>MasterMind</div>
        <div className='start-container'>
        <StartContainer/>
        </div>
      </div>
    );
  };

export default App;
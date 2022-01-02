import React from 'react'
import MainContainer from './containers/mainContainer.jsx';
import StartContainer from './containers/startContainer.jsx'
import styles from './scss/application.scss';

const App = () => {
    return (
      <div className='background'>
        <div className='title'>MasterMind</div>
        <div className='start-container'>

        <StartContainer/>
        {/* <MainContainer/> */}
        </div>
      </div>
    );
  };

export default App;
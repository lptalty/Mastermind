import React, { Component } from 'react';
import NumberService from './services/numberService'
const App = () => {

  const onClickButton = async (url) => {
    const result = await NumberService.getComputerNumbers(url);
    console.log('what is returned to app.js: ', result)
    console.log(typeof(result))
    console.log(result[0])
  }
  
  return (
    <div>
      <div> Getting Random Numbers with API</div>
      <button
      onClick={(e) =>
        onClickButton('http://localhost:3000/api/computer')
      }
      >
        Click me
        </button>
    </div>
  );
};

export default App;

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createPopper } from '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

render(<App />, document.getElementById('root'));

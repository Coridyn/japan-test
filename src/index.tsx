import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {getState} from './data/state';

// get from localStorage
const state = getState();

ReactDOM.render(<App quizState={state} />, document.getElementById('root'));


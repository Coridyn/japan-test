import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import allChars from './data/data';

ReactDOM.render(<App {...{allChars: allChars}} />, document.getElementById('root'));


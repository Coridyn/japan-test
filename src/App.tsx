import React from 'react';
import {useState, useEffect, useRef} from 'react';
import './App.css';

import {Quiz} from './comp/Quiz';
import useKey from './comp/useKey';
import {IChar} from './data/data';
import {QuizState, UiState} from './data/state';


// state handling
/*
initial state - prompt for start
wait for keypress then start


while running
  wait for keypress

  on keypress
  choose random character

  wait for keypress to reveal
  
  allow y/n answer to be entered
*/


export interface IAppProps {
  quizState: QuizState,
}

const App: React.FC<IAppProps> = (props) => {
  
  const {quizState} = props;
  
  const handleKey = (e: KeyboardEvent) => {
    switch (e.key){
      case 's':
        // start
        break;
      
      case 'o':
        // options
        break;
        
      case 'r':
        // reset
        
        // TODO: Handle remaining items
        break;
    }
  }
  useKey(handleKey);
  
  
  return (
    <div className="App">
      
      {/* prompt or run quiz*/}
      
      {quizState.uiState === UiState.PROMPT &&
      <Prompt></Prompt>}
      
      {quizState.uiState === UiState.QUIZ &&
      <Quiz allChars={props.quizState.allChars}></Quiz>
      }
      
    </div>
  );
}

export default App;

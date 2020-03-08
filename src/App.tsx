import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import {useState, useEffect, useRef} from 'react';
import './App.css';

import {Quiz} from './comp/Quiz';
import {Prompt} from './comp/Prompt';

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
  
  // update state
  
}

const App: React.FC<IAppProps> = (props) => {
  
  const {quizState} = props;
  const history = useHistory();
  
  // update state
  function start(){
    history.push('/quiz');
  }
  
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path={['/', "/prompt"]}>
            <Prompt quizOptions={quizState.quizOptions}
              start={start}
              updateOptions={newOptions => {
                console.log('new options', newOptions);
              }}></Prompt>
          </Route>
          
          <Route path="/options">
            
          </Route>
          
          <Route path="/quiz">
            <Quiz allChars={props.quizState.allChars}></Quiz>
          </Route>
          
        </Switch>
      </Router>
      
      {/* prompt or run quiz*/}
      
    </div>
  );
}

export default App;

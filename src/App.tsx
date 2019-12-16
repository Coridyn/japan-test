import React from 'react';
import {useState, useEffect, useRef} from 'react';
import './App.css';

import {IChar} from './data/data';


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

function randomInt(max: number, min: number = 0): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// TODO: Keep track of seen characters
const getNextChar = (chars: IChar[]): IChar => {
  const index = randomInt(chars.length - 1);
  const nextChar = chars[index];
  chars.splice(index, 1);
  
  return nextChar;
}


export interface IAppProps {
  allChars: IChar[],
}

const App: React.FC<IAppProps> = (props) => {
  const [chars] = useState(() => {
    return props.allChars.concat();
  });
  
  const [showAnswer, setShowAnswer] = useState(false);
  const [curChar, setChar] = useState(() => {
    const firstChar = getNextChar(chars);
    return firstChar;
  });
  
  const handleKey = (keyCode: number) => {
    switch (keyCode){
      case 32: // space
        if (!showAnswer){
          setShowAnswer(true);
        } else {
          setShowAnswer(false);
          const nextChar = getNextChar(chars);
          setChar(nextChar);
          
          // TODO: Handle remaining items
        }
        break;
    }
  }
  
  const handleKeyRef = useRef<Function | null>(null);
  handleKeyRef.current = handleKey;
  
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      handleKeyRef.current!(e.keyCode);
    });
  }, []);
  
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header> */}
      
      <h2>
        Current character is: <span>{curChar.id}</span>
      </h2>
      
      {showAnswer && 
      <h1 className="answer">
        <div>Hiragana: {curChar.h}</div>
        <div>Katakana: {curChar.k}</div>
      </h1>
      }
      
      <div>({chars.length} remaining)</div>
      
    </div>
  );
}

export default App;

import React from 'react';
import {useState, useEffect, useRef} from 'react';

import useKey from './useKey';

import {IChar} from '../data/data';


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


export interface IQuizProps {
  allChars: IChar[],
}

export const Quiz: React.FC<IQuizProps> = (props) => {
  const [chars] = useState(() => {
    return props.allChars.concat();
  });
  
  const [showAnswer, setShowAnswer] = useState(false);
  const [curChar, setChar] = useState(() => {
    const firstChar = getNextChar(chars);
    return firstChar;
  });
  
  const handleKey = (e: KeyboardEvent) => {
    // console.log(keyCode);
    switch (e.key){
      case ' ': // space
        if (!showAnswer){
          setShowAnswer(true);
        } else {
          setShowAnswer(false);
          // const nextChar = getNextChar(chars);
          // setChar(nextChar);
        }
        break;
        
      case 'n': // 'n'
        setShowAnswer(false);
        const nextChar = getNextChar(chars);
        setChar(nextChar);
        
        // TODO: Handle remaining items
        break;
    }
  }
  useKey(handleKey);
  
  
  return (
    <div className="Quiz">
      
      <h2>
        Current character is: <span>{curChar.id.toLowerCase()}</span>
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

export default Quiz;

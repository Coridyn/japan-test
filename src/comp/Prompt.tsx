import React from 'react';
import {useState} from 'react'

import { QuizOptions, KanaGroup } from '../data/state'


export interface IPromptProps {
    quizOptions: QuizOptions,
    updateOptions: (newOptions: QuizOptions) => void,
    start: () => void,
}

export const Prompt: React.FC<IPromptProps> = (props) => {
    
    const {quizOptions} = props;
    const [opts, setOpts] = useState(quizOptions);
    
    function update(newValue: KanaGroup){
        setOpts((prev) => {
            const newOpts: QuizOptions = {
                ...prev,
                kanaGroups: prev.kanaGroups ^ newValue,
            };
            props.updateOptions(newOpts);
            
            return newOpts;
        });
    }
    
    function isSelected(kanaValue: KanaGroup): boolean {
        return !!(opts.kanaGroups & kanaValue);
    }

    return (
        <div>
            <h1>Prompt</h1>
            <ul>
                <li>
                    <label>
                        <input type="checkbox" name="kana"
                            checked={isSelected(KanaGroup.HIRAGANA)}
                            onChange={e => update(KanaGroup.HIRAGANA)}/>
                        Hiragana
                    </label>
                </li>
                
                <li>
                    <label>
                        <input type="checkbox" name="kana2"
                            checked={isSelected(KanaGroup.KATAKANA)}
                            onChange={e => update(KanaGroup.KATAKANA)}/>
                        Katakana
                    </label>
                </li>
                
                <li>
                    <label>
                        <input type="checkbox" name="kana3"
                            checked={isSelected(KanaGroup.MODIFIERS)}
                            onChange={e => update(KanaGroup.MODIFIERS)}/>
                        Modifiers
                    </label>
                </li>
                
            </ul>
            
            <button onClick={props.start}>Done</button>
        </div>
    );
};

export default Prompt;
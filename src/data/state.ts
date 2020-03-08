
import { default as allChars, IChar } from './data';

export enum UiState {
    QUIZ = 'QUIZ',
    PROMPT = 'PROMPT',
    
    // end, results
}

// different combos...
export enum KanaGroup {
    ALL = 'all',
    
    HIRAGANA = 0x0001,
    KATAKANA = 0x0010,
    
    MODIFIERS = 0x0100,
    
    //
}
export type QuizOptions = {
    
    
    looksLike: boolean,
};

// prompt, quiz, reset

export type QuizState = {
    uiState: UiState,
    //options
    
    allChars: IChar[],
};

export function getState(): QuizState {
    // todo: local storage
    
    // what are we currently doing?
    const state: QuizState = {
        // maintain order of items?
        uiState: UiState.PROMPT,
        allChars: allChars,
    };
    return state;
}
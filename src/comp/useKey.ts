import {useEffect, useRef} from 'react';

export default function useKey(handleKey: (e: KeyboardEvent) => void){
    const handleKeyRef = useRef<Function | null>(null);
    handleKeyRef.current = handleKey;
    
    useEffect(() => {
        const fn = (e: KeyboardEvent) => {
            handleKeyRef.current!(e);
        };
        document.addEventListener('keydown', fn);
        
        return () => {
            document.removeEventListener('keydown', fn);
        }
    }, []);
}
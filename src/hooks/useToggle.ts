import {useState, useCallback } from 'react';

const useToggle = (): [boolean, () => void, () => void, () => void] => {
    const [show, setShow] = useState(false);
    
    const toggle = useCallback(() => {
        setShow((prevState) => !prevState);
    }, []);
    
    const close = useCallback(() => {
        setShow(false);
    }, []);
    
    const open = useCallback(() => {
        setShow(true);
    }, []);
    
    return [show, toggle, close, open];
};

export default useToggle;
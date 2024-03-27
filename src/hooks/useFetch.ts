import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
    const [state, setState] = useState({});

    const GetPost = async () => {
        const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
        })

        if ( !response.ok ) {
            setState({
              data: null,
            });
            return;
        }

        const json = await response.json()
        setState(json)

    }
    
    useEffect(() => {
        GetPost()
    }, [url])
    
    return {state}

}

export default useFetch


import {createContext, useContext, useState, useEffect} from 'react';

const defaultValue = {};

const MediaContext = createContext(defaultValue);

function MediaProvider(props){
    const [mediaState, setMediaState] = useState(defaultValue);
    const devices = Object.keys(props.breakpoints);

    function deviceToCheck(deviceName){
        return "is" + deviceName.charAt(0).toUpperCase() + deviceName.substring(1);
    }

    useEffect(()=>{
        let mediaQueries = {};
        let initialState = {};
        let attached = false;

        function handleMediaChange(){
            let newState = {};
            let previous = false;
            for(const device of devices){
                newState[deviceToCheck(device)] = (!previous && mediaQueries[device].matches);
                previous = mediaQueries[device].matches;
            }
            setMediaState(newState);
        }

        for(const device of devices){
            mediaQueries[device] = window.matchMedia(props.breakpoints[device]);
            mediaQueries[device].addEventListener("change", handleMediaChange);
            initialState[deviceToCheck(device)] = mediaQueries[device].matches;
        }
        attached = true;
        setMediaState(initialState);

        return () => {
            if(attached){
                for(const device of devices){
                    mediaQueries[device].removeEventListener("change", handleMediaChange);
                }
            }
        }
    },[]);
    
    return (
        <MediaContext.Provider value={mediaState}>
            {props.children}
        </MediaContext.Provider>
    );
}

function useMedia(){
    const mediaState = useContext(MediaContext);
    return mediaState;
}

export {MediaProvider, useMedia};
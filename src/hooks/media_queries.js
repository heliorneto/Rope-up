import {createContext, useContext, useState, useEffect} from 'react';

const defaultValue = {mediaLoaded: false};

const MediaContext = createContext(defaultValue);

function MediaProvider(props){
    const [mediaState, setMediaState] = useState(defaultValue);
    const devices = Object.keys(props.breakpoints);
    const useOldListener = (window.matchMedia("").addEventListener)? false: true;

    function deviceToCheck(deviceName){
        return "is" + deviceName.charAt(0).toUpperCase() + deviceName.substring(1);
    }

    useEffect(()=>{
        let mediaQueries = {};
        let initialState = {};
        let attached = false;

        function handleMediaChange(){
            let newState = {};
            for(const device of devices){
                newState[deviceToCheck(device)] = mediaQueries[device].matches;
            }
            newState.mediaLoaded = true;
            setMediaState(newState);
        }

        for(const device of devices){
            mediaQueries[device] = window.matchMedia(props.breakpoints[device]);
            if(useOldListener){
                mediaQueries[device].addListener(handleMediaChange);
            }else{
                mediaQueries[device].addEventListener("change", handleMediaChange);
            }
            initialState[deviceToCheck(device)] = mediaQueries[device].matches;
        }
        attached = true;
        setMediaState(initialState);
        handleMediaChange();

        return () => {
            if(attached){
                for(const device of devices){
                    if(useOldListener){
                        mediaQueries[device].removeListener(handleMediaChange);
                    }else{
                        mediaQueries[device].removeEventListener("change", handleMediaChange);
                    }
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

export {MediaContext, MediaProvider, useMedia}; 
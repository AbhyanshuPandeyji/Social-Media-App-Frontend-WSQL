// to use dark mode in entire application

import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext(); 


export const DarkModContextProvider = ({children})=>{
    // but we dont get the result - because when we save we get the string , so to prevent that we use json parse
    const [darkMode , setDarkMode] = useState(
        // we will convert it into a json , and it will return a boolean
        JSON.parse(localStorage.getItem('darkMode')) || false 
        );


    const toggle = () =>{
        setDarkMode(!darkMode);
    }


    useEffect(()=>{

        localStorage.setItem('darkMode' , darkMode);

    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{darkMode ,toggle}}>
            {/* for wrapping children - go to app js and copy application and wrap it in dark mode
            remember its not because its context api , but because it work on entire application thats
            why we wrap things in context api  */}
        
            {children}
        </DarkModeContext.Provider>
    )



};


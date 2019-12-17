import React from 'react';
import useDarkMode from './darkmode';

const DarkModeButton = () => {
    
    const [darkMode, setDarkMode] = useDarkMode();
    console.log(darkMode)

    return (
  


        <button onClick={e => setDarkMode(!darkMode)}> Dark Mode</button>  // we change the value of whatever dark mode is
    
    );
};

export default DarkModeButton;

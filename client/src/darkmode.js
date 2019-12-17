import { useEffect } from 'react';
import useLocalStorage from './localStorage';

const useDarkMode = () => {
    // const [darkMode, setDarkMode] = useLocalStorage('dark mode', false);
  
    // useEffect(() => {
    //   const body = document.body;
    //   darkMode
    //     ? body.classList.add(
    //         'dark-mode' /* adds the class `dark-mode` to the `body` element */ 
    //       )
    //     : body.classList.remove(
    //         'dark-mode' /* removes the class from the `body` element */ 
    //       );
    // }, [darkMode]);




  const [darkMode, setDarkMode] = useLocalStorage("darkMode-On");
  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
};

 

export default useDarkMode;

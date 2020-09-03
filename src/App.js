import React, {useState, useEffect} from 'react';
import './App.css';
//Styles
import './mobile.css';
// Components
import CalculatorPage from './components/CalculatorPage'

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resizee', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, []) //will only run on mount and unmount

  return (
    <div className="App">
    <CalculatorPage />
    </div>
  );
}

export default App;

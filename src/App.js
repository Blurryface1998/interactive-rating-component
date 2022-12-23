import './App.css';
import svg from "./images/icon-star.svg";
import { Link } from 'react-router-dom';
import InputRadioButton from './InputRadioButton';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState("0");
  const numbers = ["1", "2", "3", "4", "5"];
  
  /* 
    Setting the count when you click on the button using button name: 
  */
  const getInputValue = (event) => {
   setCount(event.target.value);
  };
  
  localStorage.setItem("Key", count);
  
  return (
    <>
      <div className='card'>
        <div className='star'><img 
        src={svg}  
        alt='icon star'
        style={{width: "1.4375rem", height: "1.4375rem"}}/></div>
        <div className='about'>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className='buttons'>
          <InputRadioButton  inputRadio={numbers} onClickHandle={getInputValue} />
        </div>
        <div className='submitButton'>
          <Link to="./ThankYouPage">Submit</Link>
        </div>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Djordje Rajc</a>.
      </div>
    </>
  );
}

export default App;
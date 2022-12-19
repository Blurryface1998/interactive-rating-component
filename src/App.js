import './App.css';
import svg from "./images/icon-star.svg";
import { Link } from 'react-router-dom';
import ButtonState from './ButtonState';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState("0");
  
  /* 
    Setting the count when you click on the button using button name: 
  */
  const getButtonNameValue = (event) => {
   setCount(event.target.name);
  };
  
  localStorage.setItem("Key", count);
  
  return (
    <>
      <div className='card'>
        <div className='star'><img 
        src={svg}  
        alt='icon star'
        style={{width: "23px", height: "23px"}}/></div>
        <div className='about'>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className='buttons'>
          <ButtonState  
          buttons={["1", "2", "3", "4", "5"]}
          onClickHandle={getButtonNameValue}/>
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
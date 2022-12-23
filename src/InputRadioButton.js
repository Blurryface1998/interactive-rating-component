import { useState } from "react";

/* 
    Mapping through buttons and adding key, name, className, and onClick event so it can be used in App.js for getting name value and adding .active class on click event: 
*/
const InputRadioButton = ({ inputRadio, onClickHandle }) => {
    const [active, setActive] = useState(-1);

    const handleClick = (event, id) => {
        setActive(id);
        onClickHandle(event);
    };

    return (
        <>  
            <form>
            {inputRadio.map((item, index) => (
                <>
                    <label className={index === active ? "active" : ""}>
                        <input 
                        type="radio"
                        key={index}
                        name="number"
                        value={item} 
                        onClick={(event) => handleClick(event, index)}/>
                        {item}
                    </label>    
                    </>
                ))}
            </form>
        </>
    );
};

export default InputRadioButton;
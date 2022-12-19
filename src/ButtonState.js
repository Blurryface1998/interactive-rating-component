import { useState } from "react";

/* 
    Mapping through buttons and adding key, name, className, and onClick event so it can be used in App.js for getting name value and adding .active class on click event: 
*/
const ButtonState = ({ buttons, onClickHandle }) => {
    const [active, setActive] = useState(-1);

    const handleClick = (event, id) => {
        setActive(id);
        onClickHandle(event);
    };

    return (
        <>
            {buttons.map((item, index) => (
                <button 
                key={index}
                name={item} 
                onClick={(event) => handleClick(event, index)}
                className={index === active ? "numbers active" : "numbers"}>{item}</button>
            ))}
        </>
    );
};

export default ButtonState;

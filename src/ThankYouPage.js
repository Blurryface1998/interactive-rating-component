import svg from "./images/illustration-thank-you.svg";

const ThankYou = () => {
    return (
        <>
        <div className="card thanksCard">
            <div className="image">
                <img  
                src={svg} 
                alt="Phone that has a receipt coming from a screen, on the left of the phone I s a credit card, and on the right is a coin." />
                <span>You selected {localStorage.getItem("Key")} out of 5</span>
            </div>
            <div className="about thankYou">
                <h1>Thank you!</h1>
                <p>
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
                </p>
            </div>
        </div>
        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Djordje Rajc</a>.
        </div>
        </>
    );
}

export default ThankYou;
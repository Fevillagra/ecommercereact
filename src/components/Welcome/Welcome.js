import './Welcome.css'

function Welcome() {
    return(
        <div className="welcome-container">
            <h1 className="welcome-container__title">Welcome to the Pepper store <i class="fa-solid fa-pepper-hot"></i></h1>
            <p className="welcome-container__description">The Most Spicy Store Of America</p>
        </div>
    );
}

export default Welcome;
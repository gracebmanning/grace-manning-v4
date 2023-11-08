import './main.css';
import profile from '../../images/profile.jpg';
import arrow from '../../images/arrow-down.svg';

export default function Main() {
    return (
        <div className="section-solid" id="#main">
            <h1 id="welcome">welcome!</h1>
            <img id="profilePic" src={profile} alt="grace sitting on her bed reading a book. She has pink hair and she is wearing a black top and green pants." />
            <a href="/#about">
                <img id="arrow" src={arrow} alt="arrow pointing down" />
            </a> 
        </div>
    );
}
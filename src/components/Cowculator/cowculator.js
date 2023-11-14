import './cowculator.css';
import cow_main from '../../images/cowculator/Pixel6_blue_main.png';
import cow_settings from '../../images/cowculator/Pixel6_blue_settings.png';
import cow_history from '../../images/cowculator/Pixel6_blue_history.png';
import { HiArrowLeft } from 'react-icons/hi2';

export default function Cowculator() {
    return (
        <div className="section-solid">
            <a href="/" id="back-arrow">
                <HiArrowLeft className="icon" />
            </a>
            <div className="container">
                <h1 className="cowculator-title">Cowculator</h1>
                <h2 id="cowculator-tagline">
                    a cow-themed cowculator available on <a style={{textDecoration: 'underline'}} href="https://play.google.com/store/apps/details?id=com.gracemanning.cowculator" target="_blank" rel="noreferrer">Google Play</a>
                </h2>
                <h2 id="app-store"><i>available on iOS soon!</i></h2>
                <br/>
                <div className="skillsContainer">
                    <div className="skillItem">Flutter/Dart</div>
                    <div className="skillItem">Android Studio</div>
                    <div className="skillItem">Xcode</div>
                </div>
                <br/>
                <div className="previewImages">
                    <img className="previewImage" src={cow_main} alt="calculator with cow spot shaped buttons" />
                    <img className="previewImage" src={cow_settings} alt="calculator with cow spot shaped buttons" />
                    <img className="previewImage" src={cow_history} alt="calculator with cow spot shaped buttons" />
                </div>
                <p>
                    <a href="/cowculator/support" style={{textDecoration:'underline'}}>Support</a>
                    <br/>
                    <a href="/cowculator/privacy" style={{textDecoration:'underline'}}>Privacy Policy</a>
                </p>
            </div>
        </div>
    );
}
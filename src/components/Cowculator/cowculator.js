import './cowculator.css';
import { HiArrowLeft } from 'react-icons/hi2';

export default function Cowculator() {
    return (
        <div className="section-solid">
            <a href="/" id="back-arrow">
                <HiArrowLeft className="icon" />
            </a>
            <h1 id="title">Cowculator</h1>
            <h2 id="tagline">a cow-themed cowculator available on Google Play</h2>
        </div>
    );
}
import './about.css';
import { clickScroll } from '../clickScroll';

export default function About() {
    return (
        <div className="section-gradient" id="about">
            <div className="rectangle">
                <p id="about-text">
                    I'm Grace,<br/>a web developer, UI/UX designer, software engineer, marketing enthusiast, and creator.
                </p>
                <button className="button" onClick={() => clickScroll('projects')}>see more!</button>
            </div>
        </div>
    );
}
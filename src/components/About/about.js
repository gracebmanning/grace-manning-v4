import './about.css';
import { clickScroll } from '../clickScroll';

export default function About() {
    return (
        <div className="section-gradient" id="about">
            <div className="rectangle">
                <p id="about-text">
                    I'm Grace,<br/>a web developer, software engineer, visual designer, and creator.
                </p>
                <p id="about-subtext">
                    I am passionate about front-end and full-stack web development, human-centered design, and creating technology that impacts people positively.
                </p>
                <button className="button" onClick={() => clickScroll('projects')}>see more!</button>
            </div>
        </div>
    );
}
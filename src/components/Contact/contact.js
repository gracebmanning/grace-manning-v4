import './contact.css';
import resume from '../../documents/resume.pdf';
import { HiCursorArrowRays } from 'react-icons/hi2';

export default function Contact() {
    return (
        <div className="section-gradient" id="contact">
            <div className="rectangle">
                <div className="contact-container">
                    <h2 className="contact-header">want to know more?</h2>
                    <div>
                        <a href={resume} target="_blank" rel="noreferrer">
                            <button className="button">resume</button>
                        </a>
                        <a href="https://www.linkedin.com/in/grace-manning" target="_blank" rel="noreferrer">
                            <button className="button">LinkedIn</button>
                        </a>
                        <a href="https://github.com/gracebmanning" target="_blank" rel="noreferrer">
                            <button className="button">GitHub</button>
                        </a>
                    </div>
                    <HiCursorArrowRays className="icon" />
                </div>
                <div>
                    <h2 className="contact-header">contact me!</h2>
                    <p className="contact-text">gracebmanning@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

/*
<div>
    <h2 className="contact-header">a note</h2>
    <p className="contact-text">
        this is my professional website. if you are looking for my personal website, visit <a href="/">gracesportal.com</a>.
    </p>
</div>
*/
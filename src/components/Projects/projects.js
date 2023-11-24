import './projects.css';
import arrow from '../../images/arrow-down.svg';
import arrowLight from '../../images/arrow-down-light.svg';
import { clickScroll } from '../clickScroll';
import { projectItems, personalProjectItems, thingsICareAbout } from './projectsList';

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js', 'Flutter/Dart', 'Android Studio', 'Xcode', 'Figma', 'Git/GitHub', 'AWS', 'MongoDB', 'MySQL', 'Python', 'C++', 'C', 'Java', 'Racket'];
const skillItems = skills.map((skill) =>
  <div className="skillItem" key={skill}>{skill}</div>
);

export default function Projects() {
    return (
        <>
        <div className="section-solid" id="projects">
            <div className="container">
                <h2 className="h2">Education</h2>
                <div className="skillItem"><i>Computer Science, B.S.</i> from University of California, Irvine</div>
                <br/>
                <h2 className="h2">Skills</h2>
                <div className="skillsContainer">
                    {skillItems}
                </div>
                <br/>
                <h2 className="h2">Projects</h2>
                <div className="projectsContainer">
                    {projectItems}
                </div>
            </div>
            <img id="arrow" src={arrow} alt="arrow pointing down" onClick={() => clickScroll('projects2')} />
        </div>
        <div className="section-gradient" id="projects2">
            <div className="rectangle">
                <h2 className="h2">Personal Projects</h2>
                <div className="projectsContainer">
                    {personalProjectItems}
                </div>
            </div>
            <img id="arrow" src={arrowLight} alt="arrow pointing down" onClick={() => clickScroll('care-about')} />
        </div>
        <div className="section-solid" id="care-about">
            <div className="container">
                <h2 className="h2">Other Things I Care About</h2>
                <div className="projectsContainer">
                    {thingsICareAbout}
                </div>
            </div>
            <img id="arrow" src={arrow} alt="arrow pointing down" onClick={() => clickScroll('contact')} />
        </div>
        </>
    );
}
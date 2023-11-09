import './projects.css';
import arrow from '../../images/arrow-down.svg';
import { clickScroll } from '../clickScroll';
import { HiOutlineDevicePhoneMobile, HiOutlineDocumentMagnifyingGlass } from 'react-icons/hi2';

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js', 'Flutter/Dart', 'Android Studio', 'Xcode', 'Figma', 'Git/GitHub', 'AWS', 'MongoDB', 'MySQL', 'Python', 'C++', 'C', 'Java', 'Racket'];
const skillItems = skills.map((skill) =>
  <div className="skillItem" key={skill}>{skill}</div>
);

const projects = [
    {
        title: 'Undergraduate Research',
        tagline: 'quantitative analysis of fast & slow fashion website design elements using a web crawler',
        icon: <HiOutlineDocumentMagnifyingGlass className="icon"/>,
        href: '/undergrad-research'
    },
    {
        title: 'Cowculator',
        tagline: 'a mobile application available on Google Play',
        icon: <HiOutlineDevicePhoneMobile className="icon"/>,
        href: '/cowculator'
    },
];
const projectItems = projects.map((project) => 
    <a href={project.href}>
        <div className="projectItem" key={project}>
            {project.icon}
            <div>
                <h3>{project.title}</h3>
                <p>{project.tagline}</p>
            </div>
        </div>
    </a>
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
        <div className="section-solid" id="projects2">
            <img id="arrow" src={arrow} alt="arrow pointing down" onClick={() => clickScroll('contact')} />
        </div>
        </>
    );
}
import './projects.css';

function clickScroll(){
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
}

export default function Projects() {
    return (
        <div className="section-solid" id="projects">
            projects
            <button className="button" onClick={clickScroll}>see more!</button>
        </div>
    );
}
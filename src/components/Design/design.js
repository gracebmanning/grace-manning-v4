import './design.css';
import { designProjs } from './designProjs';
import { HiArrowLeft } from 'react-icons/hi2';

const projs = designProjs.map((proj) =>
    <iframe key={proj.title} title={proj.title} className="behanceProject" src={proj.src}  allowFullScreen lazyload="true" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin"></iframe>
);

export default function Design() {
    return (
        <div className="section-solid">
            <a href="/" id="back-arrow">
                <HiArrowLeft className="icon" />
            </a>
            <div className="container">
                <h1 id="design-title">Design Portfolio</h1>
                <h2 id="design-tagline">
                    all projects are hosted on my <a style={{textDecoration: 'underline'}} href="https://www.behance.net/gracebmanning" target="_blank" rel="noreferrer">Behance page</a>.
                </h2>
                <br/>
                <div className="behanceProjects">
                    {projs}
                </div>
            </div>
        </div>
    );
}
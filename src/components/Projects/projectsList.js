import { HiOutlineDevicePhoneMobile, HiOutlineDocumentMagnifyingGlass, HiOutlineMap, HiOutlineFilm } from 'react-icons/hi2';

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
export const projectItems = projects.map((project) => 
    <a href={project.href} key={project.title}>
        <div className="projectItem">
            {project.icon}
            <div>
                <h3>{project.title}</h3>
                <p>{project.tagline}</p>
            </div>
        </div>
    </a>
);

const personalProjects = [
    {
        title: "'Chure Thing",
        tagline: 'a digital brochure archive',
        icon: <HiOutlineMap className="icon"/>,
        href: 'https://www.churething.com',
        target: '_blank'
    },
    {
        title: 'photography',
        tagline: 'i take photos!',
        icon: <HiOutlineFilm className="icon"/>,
        href: '/photography',
        target: '_self'
    }
];
export const personalProjectItems = personalProjects.map((project) => 
    <a href={project.href} target={project.target} key={project.title}>
        <div className="projectItem">
            {project.icon}
            <div>
                <h3>{project.title}</h3>
                <p>{project.tagline}</p>
            </div>
        </div>
    </a>
);
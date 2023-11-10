import { HiOutlineDevicePhoneMobile, HiOutlineDocumentMagnifyingGlass, HiOutlineGlobeAlt,
     HiOutlineMap, HiOutlineFilm, HiOutlineRocketLaunch } from 'react-icons/hi2';

const projects = [
    {
        title: 'Undergraduate Research',
        tagline: 'quantitative analysis of fast & slow fashion website design elements using a web crawler',
        icon: <HiOutlineDocumentMagnifyingGlass className="icon"/>,
        href: '/undergrad-research',
        target: '_self'
    },
    {
        title: 'Cowculator',
        tagline: 'a mobile application available on Google Play',
        icon: <HiOutlineDevicePhoneMobile className="icon"/>,
        href: '/cowculator',
        target: '_self'
    },
    {
        title: 'design portfolio',
        tagline: 'showing my design process, exploring new ideas',
        icon: <HiOutlineGlobeAlt className="icon"/>,
        href: 'https://www.behance.net/gracebmanning',
        target: '_blank'
    }
];
export const projectItems = projects.map((project) => 
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
    },
    {
        title: 'grace\'s portal',
        tagline: 'my personal website',
        icon: <HiOutlineRocketLaunch className="icon"/>,
        href: '',
        target: '_blank'
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
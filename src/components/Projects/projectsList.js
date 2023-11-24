import { HiOutlineDevicePhoneMobile, HiOutlineDocumentMagnifyingGlass, HiOutlineGlobeAlt,
     HiOutlineMap, HiOutlineFilm, HiOutlineRocketLaunch } from 'react-icons/hi2';
import iwc from '../../images/indiewebcamp.svg';
import yesterweb from '../../images/yesterweb.png';

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
        href: '/design',
        target: '_self'
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
        href: 'https://graces-portal.net',
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

const otherThings = [
    {
        title: 'IndieWeb',
        tagline: 'the IndieWeb is a people-focused alternative to the "corporate web"',
        icon: <img src={iwc} alt="logo for Indie Web Camp. red i, orange w, yellow c." />,
        href: 'https://indieweb.org/',
        target: '_blank'
    },
    {
        title: 'Yesterweb',
        tagline: 'reclaim the net',
        icon: <img src={yesterweb} style={{height: '50px'}} alt="purple button that reads Yesterweb: reclaim the net" />,
        href: 'https://yesterweb.org/',
        target: '_blank'
    }
];

export const thingsICareAbout = otherThings.map((thing) => 
    <a href={thing.href} target={thing.target} key={thing.title}>
        <div className="projectItem">
            {thing.icon}
            <div>
                <h3>{thing.title}</h3>
                <p><i>{thing.tagline}</i></p>
            </div>
        </div>
    </a>
);
import './research.css';
import paper from '../../documents/research-paper.pdf';
import poster from '../../images/research.png';
import { clickScroll } from '../clickScroll';
import { HiArrowLeft, HiOutlineDocumentMagnifyingGlass, HiOutlineComputerDesktop, HiOutlinePresentationChartBar, HiOutlineMagnifyingGlass } from 'react-icons/hi2';

export default function Research() {
    return (
        <>
        <div className="section-solid">
            <a href="/" id="back-arrow">
                <HiArrowLeft className="icon" />
            </a>
            <div className="container">
                <h1 id="research-title">Undergraduate Research</h1>
                <h2 id="research-tagline">Quantitative Analysis of Fast Fashion and Slow Fashion Website Design Elements Using a Web Crawler</h2>
                <div className="skillsContainer">
                    <div className="skillItem">TypeScript</div>
                    <div className="skillItem">AWS</div>
                </div>
                <div className="icon-links">
                    <a className="icon-link" href={paper} target="_blank" rel="noreferrer">
                        <HiOutlineDocumentMagnifyingGlass className="icon"/>
                        Thesis Paper
                    </a>
                    <a className="icon-link" href="https://github.com/gracebmanning/gm-research-crawler-v2" target="_blank" rel="noreferrer">
                        <HiOutlineComputerDesktop className="icon"/>
                        GitHub Repository
                    </a>
                    <div className="icon-link" onClick={() => clickScroll('poster')}>
                        <HiOutlinePresentationChartBar className="icon"/>
                        UROP Symposium Poster
                    </div>
                    <a className="icon-link" href="https://urop.uci.edu" target="_blank" rel="noreferrer">
                        <HiOutlineMagnifyingGlass className="icon"/>
                        What is UROP at UCI?
                    </a>
                </div>
                <h3 className="research-h3">Abstract</h3>
                <p id="abstract-text">
                    Fast fashion and slow fashion retail websites are often visually distinct, but little research has been done to analyze statistical differences in their structure and content. As the conversation about the social and environmental impacts of fast fashion continues to grow, the need for quantitative comparisons between fast & slow fashion also rises. This research aims to collect quantitative data from the retail websites of five fast fashion brands and five slow fashion brands in an effort to identify and analyze their differences.
                    <br/><br/>
                    To collect data, this project utilized a web crawler; a crawler is an automated program that can visit a website, collect its content, and return this information for analysis. The collected content includes hypertext markup language (HTML), which is the basic programming language for creating web pages. The crawler collected data on the websites of five fast fashion brands: Forever21, SHEIN, Fashion Nova, H&M, and PrettyLittleThing, and five slow fashion brands: Big Bud Press, CHNGE, Fashion Brand Company, Tunnel Vision, and iGirl. Overall, fast fashion brands had a larger number of pages (over 26,000) and categories (over 300), yet remained similar to slow fashion brands in other factors.
                    <br/><br/>
                    This data scrapes the surface of what can be used to help consumers identify a fast or slow fashion brand solely based on website data. Additionally, it can be hard to understand the negative impacts that fast fashion has on our lives. These numbers help us quantify the overproduction and waste that comes from following trend cycles and buying into fast fashion. The use of a crawler to collect data can be expanded in many more ways to continue learning from retail websites.
                </p>
            </div>
        </div>
        <div className="section-solid" id="poster">
            <div className="container">
                <h3 className="research-h3">Research Poster - presented at UROP Symposium</h3>
                <br/>
                <img id="research-poster" src={poster} alt="poster summarizing the research in a green, brown, and cream color palette. The sections of the paper are grouped into organic blob shapes." />
            </div>
        </div>
        </>
    );
}
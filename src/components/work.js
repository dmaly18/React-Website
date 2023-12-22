import React from 'react'
import Portfolio1 from '../assets/portfolio-1.png';
import Portfolio2 from '../assets/portfolio-2.png';

const Work = () => {
    return (
        <section id='work'>
            <h2 className="workTitle">My Portfolio</h2>
            <span className="workDesc">I find satisfaction in meticulously focusing on even the tiniest details to ensure that my work attains a flawless level of precision. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="workImgs">
                <img src={Portfolio1} alt="" className="workImg" />
                <img src={Portfolio2} alt="" className="workImg" />
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Work;
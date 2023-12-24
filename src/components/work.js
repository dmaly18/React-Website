import React from 'react'
import Portfolio1 from '../assets/portfolio-1.png';
import Portfolio2 from '../assets/portfolio-2.png';

const Work = () => {
    return (
        <section id='work'>
            <h2 className="workTitle">My Projects</h2>
            <div className="workImgs">
                <img src={Portfolio1} alt="" className="workImg" />
                <img src={Portfolio2} alt="" className="workImg" />
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Work;
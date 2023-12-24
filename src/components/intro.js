import React from 'react'
import bg from '../assets/image1.png'
import btnImg from '../assets/hireme.png'
import { Link } from 'react-scroll'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Derek</span> <br />Web developer</span>
                <p className="introPara">I am a full stack React web developer with experience in creating<br />visually appealing and user friendly websites.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
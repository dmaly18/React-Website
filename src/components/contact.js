import facebookIcon from '../assets/facebook-icon.png'
import linkedinIcon from '../assets/linkedin.png';
import gitHubIcon from '../assets/github.png'
import instagramIcon from '../assets/instagram.png';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6phm4ar', 'template_zcxds5a', form.current, 'blaHt_5KIJ711DfGH')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">My clients</h1>
                <span className="clientDesc">
                  Pending
                </span>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="Facebook" className="link" />
                        <img src={linkedinIcon} alt="LinkedIn" className="link" />
                        <img src={gitHubIcon} alt="GitHub" className="link" />
                        <img src={instagramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
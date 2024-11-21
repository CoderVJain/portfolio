import React from 'react'
import './About.css'

const About = () => {
    return (
        <section className="about about-container">
            <div className="about-title">ABOUT</div>
            <div className="about-content">
                <img
                    src="/assests/heroBoy.png"
                    alt="Me sitting with laptop"
                    className="about-image"
                />
                <p className='about-description'>
                    I am a passionate web developer with hands-on experience in
                    frontend development, working with technologies such as HTML, CSS,
                    JavaScript, React, and Express.js. Currently, I am expanding my skills
                    by learning backend development using Node.js, Java(SpringBoot),
                    and data structures & algorithms. I enjoy building responsive, user
                    centric applications and am eager to further develop my full-stack
                    expertise
                </p>
            </div>
        </section>
    )
}

export default About

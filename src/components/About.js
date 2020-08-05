import React from 'react'
import about_img from '../images/ahsin.PNG'
const About = () => {
    return (
        <>
                <section id="about">
                    <div className="about container">
                        <div className="col-left">
                            <div className="about-img">
                                <img src={about_img} alt="about images" />
                            </div>
                        </div>
                        <div className="col-right">
                            <h1 className="section-title">ABOUT<span>ME</span></h1>
                            <h2>Fornt End WEB Development</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, culpa maiores quisquam labore! Cum delectus quos qui nam neque praesentium quas amet eum, culpa, impedit omnis dolores laborum reiciendis sapiente.</p>
                            <a href="/" className="cta">Download Resume</a>
                        </div>
                    </div>
                </section>
        </>
    )
}

export default About

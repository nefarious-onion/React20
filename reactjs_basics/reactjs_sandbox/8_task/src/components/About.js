import React from 'react';
import './About.css';
import aboutImage from '../images/aboutImage.jpg';

const About = () => {
    return (
        <div className='about-container'>
            <img className='about-img' src={aboutImage} alt='flower in the field' width="300px" height="100%"/>
            <div className='about-text'>
                <h1>About me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam numquam facilis unde, velit magni assumenda minima
                quis molestiae officiis ullam reiciendis magnam, excepturi
                corporis nemo repudiandae eveniet praesentium quibusdam sint.
                </p>        
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam numquam facilis unde, velit magni assumenda minima
                quis molestiae officiis ullam reiciendis magnam, excepturi
                corporis nemo repudiandae eveniet praesentium quibusdam sint.
                orem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam numquam facilis unde, velit magni assumenda minima
                quis molestiae officiis ullam reiciendis magnam, excepturi
                corporis nemo repudiandae eveniet praesentium quibusdam sint.
                orem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam numquam facilis unde, velit magni assumenda minima
                quis molestiae officiis ullam reiciendis magnam, excepturi
                corporis nemo repudiandae eveniet praesentium quibusdam sint.
                </p>        
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam numquam facilis unde, velit magni assumenda minima
                quis molestiae officiis ullam reiciendis magnam, excepturi
                corporis nemo repudiandae eveniet praesentium quibusdam sint.
                </p>        
            </div>
        </div>
    );
}

export default About;

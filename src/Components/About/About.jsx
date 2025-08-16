import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a passionate Frontend Developer and UI/UX Designer with a knack for creating clean, responsive, and engaging digital experiences. Combining skills in HTML, CSS, JavaScript, and Figma, I focus on crafting intuitive designs that not only look great but also provide seamless functionality. My goal is to bring ideas to life through a perfect blend of creativity and code.

                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /> </div>
                        <div className="about-skill"><p>ReactJS</p> <hr style={{width:"30%"}} /> </div>
                        <div className="about-skill"><p>FIgma</p> <hr style={{width:"70%"}} /> </div>
                        <div className="about-skill"><p>Adobe XD</p> <hr style={{width:"60%"}} /> </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
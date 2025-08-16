import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        
        <h1><span>I'm Irshad Ansari,</span> Frontend Developer | UI/UX Designer</h1>
        <p>I’m a creative Frontend Developer and UI/UX Designer who blends clean, responsive code with modern, user-friendly designs. Skilled in HTML, CSS, JavaScript, and Figma, I craft intuitive digital experiences that are both visually appealing and highly functional.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
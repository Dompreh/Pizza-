import React from 'react'
import MultiplePizzas from "../images/multiplePizzas.jpeg"
import '../styles/About.css'

function About() {
    const background={
        backgroundImage:`url(${MultiplePizzas})`,
      }
    return (
    <div className='about'>
        <div className='aboutTop' style={background}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequatur vero possimus ab temporibus adipisci quasi id iste similique. Aspernatur dolorem nostrum cumque quaerat itaque possimus, saepe voluptate pariatur maxime debitis magni ipsam corrupti vero non eum, illum exercitationem asperiores?</p>
        </div>
    </div>
  )
}

export default About
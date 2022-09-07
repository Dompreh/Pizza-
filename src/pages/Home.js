import React from 'react'
import {Link} from 'react-router-dom'
import Banner from '../images/pizza.jpeg'
import '../styles/Home.css'


function Home() {
 
  const background={
    backgroundImage:`url(${Banner})`,
  }

  return (
    <div className='home'  style={background}>
      <div className='headerContainer' >
        <h1>Kobby's Pizza</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to='/menu'>
         <button>ORDER NOW</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Home
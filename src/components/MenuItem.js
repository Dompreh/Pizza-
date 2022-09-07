import React from 'react'

function MenuItem({name,image,price}) {
    const background={
        backgroundImage:`url(${image})`,
      }
    return (
    <div className='menuItem'>
        <div style={background}></div>
        <h1>{name}</h1>
        <p>${price} </p>
    </div>
  )
}

export default MenuItem
import React from 'react'

const MenuItem = ({image, name, content, price}) => {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <h6>{content}</h6>
        <p><strong><i>{price} TL</i></strong></p>
    </div>
  )
}

export default MenuItem
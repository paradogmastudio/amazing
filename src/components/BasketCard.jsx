import React from 'react'

function BasketCard({title, image, price}) {
  return (
    <div id="catalogueCard">
    <div id="cardTitle">
        <h5>{title}</h5>
    </div>
    <div id="cardImage">
        <img src={image} alt={title}/>
    </div>
    <div id="cardPrice">
        <div>{price}€</div>    
    </div>

</div>
  )
}

export default BasketCard
import React, { useState } from 'react'

function CatalogueCard({title, price, image, addBasket}) {
    const [buttonStyle, setButtonStyle] =useState("cardPrice")

    const addToBasket = () => {
        const article = {
          id: Math.random(), // Vous pouvez générer un ID unique de manière appropriée
          title: title,
          image: image,
          price: price
        };
        addBasket(article);
        setButtonStyle("cardPrice2")
      };
  return (
    <div id="catalogueCard">
        <div id="cardTitle">
            <h5>{title}</h5>
        </div>
        <div id="cardImage">
            <img src={image} alt={title}/>
        </div>
        <div id={buttonStyle}>
            <div>{price}€</div>
            <button id="cardButton" onClick={addToBasket}>Panier</button>
            
        </div>

    </div>
  )
}

export default CatalogueCard
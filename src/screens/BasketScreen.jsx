import React from 'react'
import BasketCard from '../components/BasketCard'

function BasketScreen({basket}) {
  
  const displayBasket = basket.map(
    element=>{
      return(
        <BasketCard
          title={element.title}
          image={element.image}
          price={element.price}
        />

      )

    }

  )

  return (
    <main id="basketScreenMain">{displayBasket}</main>
  )
}

export default BasketScreen
import React, { useState, useEffect } from 'react'
import CatalogueCard from '../components/CatalogueCard'


function CatalogueScreen({ addBasket }) {
  const [articles, setArticles]=useState([])

  useEffect(()=>{
    async function loadData (){
        const response =  await fetch('https://fakestoreapi.com/products')
        const jsonresponse = await response.json()
        setArticles(jsonresponse)
      
    }
    loadData()

  },[])




const display = articles.map((element)=>{
  return(
  <CatalogueCard
        title={element.title}
        price={element.price}
        image={element.image}
        addBasket={addBasket}
  />
)
})
 
  return (
    <main id="catalogueScreenMain">{display}</main>
  )
}

export default CatalogueScreen
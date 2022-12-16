import React from 'react'
import './CocktailCard.css'

function CocktailCard({strDrink, strDrinkThumb, idDrink, cardStyle}) {
  return (
    <div className={`carousel-item ${cardStyle}`} key={idDrink}>
      <img src={strDrinkThumb} alt={strDrink} className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h2>{strDrink}</h2>
      </div>
    </div>
  )
}

export default CocktailCard
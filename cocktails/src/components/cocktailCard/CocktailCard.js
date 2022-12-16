import React from 'react'
import './CocktailCard.css'

function CocktailCard({strDrink, strDrinkThumb, idDrink}) {
  console.log(strDrink)
  return (
    <div className="card" key={idDrink}>
      <img src={strDrinkThumb} alt={strDrink}/>
      <h2>{strDrink}</h2>
    </div>
  )
}

export default CocktailCard
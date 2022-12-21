import React from 'react'
import './ingredients.css'

function IngredientCard({strIngredient1}) {

  const url = `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png`


  return (
    <div >
      <img src={url} alt="ingredient" className='ingredient-img'/>
        <p className='ingredient-title'>{strIngredient1}</p>
      </div>
  )
}

export default IngredientCard
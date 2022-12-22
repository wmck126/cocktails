import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ingredients.css'

function IngredientCard({strIngredient1, setIngredient}) {

  const url = `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Medium.png`

  const navigate = useNavigate()

  const navToIngredientImg = (e) => {
    e.preventDefault()
    setIngredient(e.target.nextSibling.innerHTML)
    navigate('/ing')
  }

  const navToIngredientTitle = (e) => {
    e.preventDefault()
    setIngredient(e.target.innerHTML)
    navigate('/ing')
  }

  return (
    <div className='ingredient-card'>
      <img 
        src={url} alt="ingredient" className='ingredient-img'
        onClick={(e) => navToIngredientImg(e)}
      />
        <h4 
          className='ingredient-title'
          onClick={(e) => navToIngredientTitle(e)}
        >{strIngredient1}</h4>
      </div>
  )
}

export default IngredientCard
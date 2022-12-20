import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../pages/searchResult.css'

function CocktailCard({idDrink, strDrink, strDrinkThumb, setDrink, strCategory, strAlcoholic}) {

  const navigate = useNavigate()

  const navToDrinkImg = (e) => {
    e.preventDefault()
    setDrink(e.target.parentNode.id)
    navigate('/drink')
  }
  const navToDrinkBody = (e) => {
    e.preventDefault()
    setDrink(e.target.parentNode.parentNode.id)
    navigate('/drink')
  }
  
  return (
    <div 
      style={{ width: '18rem' }} 
      id={idDrink} 
      className='drink-card'
    >
      <img
        alt='drink'
        src={strDrinkThumb} 
        onClick={(e) => navToDrinkImg(e)}
      />
      <div onClick={(e) => navToDrinkBody(e)} className="card-footer">
        <h4 className='card-title'>{strDrink}</h4>
        <p className='card-text'>
          {strCategory}<br></br>{strAlcoholic}
        </p>
      </div>
    </div>
  )
}

export default CocktailCard
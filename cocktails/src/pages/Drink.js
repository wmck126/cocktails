import {useEffect, useState} from 'react'
import axios from 'axios'
import './drink.css'

function Drink({drink}) {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`

  useEffect(() => {
    const fetchCocktails = () => {
    setLoading(true)
      axios.get(url)
      .then(res => {
        setData((og) => [...og, res.data.drinks])
      })
      .catch(e=> console.error(e))
      .finally(setLoading(false))
  }
  fetchCocktails()
  }, [url])

  return (
    <div className='recipe-container'>
      {loading ? <h3>loading...</h3> 
        : data.flat().map((drink) => {
          let index = 1
          let ingredientArray = []
          while (drink['strIngredient' + index]){
            ingredientArray.push({name: drink['strIngredient' + index], amount: drink['strMeasure' + index] ? drink['strMeasure' + index]: 'A dash'})
            index++
          }
          return(
            <div className='recipe-card'>
            <img src={drink.strDrinkThumb} alt="cocktail" />
            <h2>{drink.strDrink}</h2>
            <h5>Ingredients</h5>
              <ul>
                <li>Best served in a {drink.strGlass}</li>
              {ingredientArray.map((ingredient) => (
                <li>{ingredient.amount} of {ingredient.name}</li>
              ))}
              </ul>
              <h5>Instructions</h5>
              <p className='instructions'>{drink.strInstructions}</p>
          </div>
      )}
    )}
  </div>
  )
}

export default Drink
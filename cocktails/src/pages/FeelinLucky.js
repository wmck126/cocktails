import {useState, useEffect} from 'react'
import axios from 'axios'
import './drink.css'


function FeelinLucky() {
  //sets loading/data for fetch req
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  //api url
  const url =  'https://www.thecocktaildb.com/api/json/v1/1/random.php'

  //fetches the items for the carousel
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
  }, [])

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

export default FeelinLucky
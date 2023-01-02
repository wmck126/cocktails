import {useEffect, useState} from 'react'
import axios from 'axios'
import IngredientCard from '../components/IngredientCard'
import '../components/ingredients.css'


function IngredientList({setIngredient}) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`

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
    <div>
      
    <div className='ingredient-container'>
      {loading ? <h3>loading...</h3> 
        : data.flat().map((drink) => (
          <IngredientCard {...drink} setIngredient={setIngredient} />
        ))}
    </div>
    </div>
  )
}

export default IngredientList
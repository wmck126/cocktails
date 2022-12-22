import {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "../components/ingredients.css"

function Ingredients({ingredient, setIngSearch}) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`

  const navigate = useNavigate()

  useEffect(() => {
    const fetchCocktails = () => {
    setLoading(true)
      axios.get(url)
      .then(res => {
        setData((og) => [...og, res.data.ingredients])
      })
      .catch(e=> console.error(e))
      .finally(setLoading(false))
  }
  fetchCocktails()
  }, [url])

  const handleSearch = (e) => {
    //then transfer props to the ingSearchResult
    e.preventDefault()
    setIngSearch(e.target.firstChild.nextSibling.data)
    navigate('/ingsearch')
  }

  
  return (
    <div>
    {loading ? <h3>loading...</h3> 
        : data.flat().map((drink) => {
          const pic = `https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient}-Medium.png`
          return(
            <div className="ingredient-page">
              <h2 className='ingredient-page-title'>{drink.strIngredient}</h2>
              <img src={pic} alt='ingredient' className='ingredient-page-img'/>
              <button onClick={handleSearch}>Recipes that use {drink.strIngredient}</button>
              <p className='ingredient-page-desc'>{drink.strDescription}</p>
            </div>
        )})}
    </div>
  )
}

export default Ingredients
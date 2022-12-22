import {useEffect, useState} from 'react'
import axios from 'axios'

function Ingredients({ingredient}) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`

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

  
  return (
    <div>
    {loading ? <h3>loading...</h3> 
        : data.flat().map((drink) => {
          const pic = `https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient}-Medium.png`
          return(
            <div>
              <h2>{drink.strIngredient}</h2>
              <img src={pic} alt='ingredient' />
              <p>{drink.strDescription}</p>
            </div>
        )})}
    </div>
  )
}

export default Ingredients
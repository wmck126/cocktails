import {useEffect, useState} from 'react'
import axios from 'axios'

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
  
  console.log(url)

  return (
    <div>
      <h1>drink</h1>
      {loading ? <h3>loading...</h3> 
        : data.flat().map((drink) => (
      <h3>{drink.strDrink}</h3>
      )
    )}
  </div>
  )
}

export default Drink
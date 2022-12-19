import {useEffect, useState} from 'react'
import axios from 'axios'
import CocktailCard from '../components/CocktailCard'
import "./searchResult.css"

function SearchResult({query, setDrink}) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`


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
    <div className='grid-container'>
    <div className='drink-container'>
      {loading ? <h3>loading...</h3> 
        : data.flat().map((drink) => (
          <CocktailCard {...drink} setDrink={setDrink} />
          )
        )}
    </div>
    </div>
  )
}

export default SearchResult
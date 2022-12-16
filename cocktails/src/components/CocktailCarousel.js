import {useState, useCallback, useEffect} from 'react'
import CocktailCard from './cocktailCard/CocktailCard'
import axios from 'axios'
import './cocktailCard/CocktailCard.css'


function CocktailCarousel() {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const url =  'https://www.thecocktaildb.com/api/json/v1/1/random.php'

  const fetchCocktails = useCallback(() => {
    setLoading(true)
    for(let i=0; i<4; i++){
      axios.get(url)
      .then(res => {
        setData(res.data.drinks)
      })
      .catch(e=> console.error(e))
    }
    setLoading(false)
  }, [])

  useEffect(() => {
      fetchCocktails()
  }, [fetchCocktails])

  
  return (
    <div className='app'>
      <div className='container'>
      {loading ? <h3>loading...</h3> : data.map(drink => (
        <CocktailCard {...drink} />
      ))}
      </div>
    </div>
  )
}

export default CocktailCarousel
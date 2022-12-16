import {useState, useEffect} from 'react'
import CocktailCard from './cocktailCard/CocktailCard'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import './cocktailCard/CocktailCard.css'


function CocktailCarousel() {

  //sets loading/data for fetch req
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  //set starting point for cards
  const [index, setIndex] = useState(0)

  const slideLeft = () => {
    setIndex(index - 1)
  }

  const slideRight = () => {
    setIndex(index + 1)
  }

  const url =  'https://www.thecocktaildb.com/api/json/v1/1/random.php'

  useEffect(() => {
    const fetchCocktails = () => {
    setLoading(true)
    for(let i=0; i<4; i++){
      axios.get(url)
      .then(res => {
        setData((og) => [...og, res.data.drinks])
      })
      .catch(e=> console.error(e))
      .finally(setLoading(false))
    }
  }
  fetchCocktails()
  }, [])

  return (
    <div className='container'>
      <div className='card-container'>
      <FontAwesomeIcon
        onClick={slideLeft}
        className="leftBtn"
        icon={faChevronLeft}
      />
      <FontAwesomeIcon
        onClick={slideRight}
        className="rightBtn"
        icon={faChevronRight}
      />
      {loading ? <h3>loading...</h3> 
      : data.flat().map((drink, n) => {
          let position = n > index ? "nextCard" 
            : n === index ? "activeCard" : "prevCard"
        return(
          <CocktailCard {...drink} cardStyle={position}/>
        )})}
      </div>
    </div>
  )
}

export default CocktailCarousel
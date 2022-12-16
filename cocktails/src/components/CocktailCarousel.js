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
    <>
    <div className='carousel carousel-dark slide' data-bs-ride="carousel">
      <div className='carousel-inner'>
      
      {loading ? <h3>loading...</h3> 
      : data.flat().map((drink, n) => {
          let position = n === 0 ? "" : "active"
        return(
          <CocktailCard {...drink} cardStyle={position}/>
        )})}
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </>
  )
}

export default CocktailCarousel
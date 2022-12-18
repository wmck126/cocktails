import {useState, useEffect} from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'



function CocktailCarousel() {

  //sets loading/data for fetch req
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  //set starting point for cards
  const [index, setIndex] = useState(0)

  //provides usability for next/prev arrows in carousel
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  
  //api url
  const url =  'https://www.thecocktaildb.com/api/json/v1/1/random.php'

  //fetches the items for the carousel
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
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
      {loading ? <h3>loading...</h3> 
      : data.flat().map((drink) => {
        return(
          <Carousel.Item key={drink.idDrink} >
            <img 
              src={drink.strDrinkThumb} 
              alt={drink.strDrink} 
              className="d-block w-100" 
            />
            <Carousel.Caption>
              <h2>{drink.strDrink}</h2>
            </Carousel.Caption>
          </Carousel.Item>
        )})}
      </Carousel>
  </div>
  )
}

export default CocktailCarousel
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
  
  /*
    Have 2 lists one with ingredients, other with measurements, 1 - 15
    Need to link 2 lists where key: ingredient and value is measurement
    if key/value is null end loop
  */
    
    




  return (
    <div>
      {loading ? <h3>loading...</h3> 
        : data.flat().map((drink) => {
            for(let i=1; i < 16; i++){
              console.log(drink.strIngredient+`${i}`)
            }
          return(
          <div>
            <img src={drink.strDrinkThumb} alt="cocktail" />
            <h3>{drink.strDrink}</h3>
            <ul>
              
            </ul>
          </div>
      )}
    )}
  </div>
  )
}

export default Drink
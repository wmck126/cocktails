import React from 'react'

function CocktailCarousel() {

  let cocktailObj = []

  for(let i = 0; i <= 10; i++){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(r => r.json())
    .then(cocktail => cocktailObj.push(cocktail))
  }

  console.log(cocktailObj)
  return (
    <div>
      {cocktailObj.map((cocktail) => {
      console.log(cocktail.strDrink)
      return(
        <div>
          <h1>hi</h1>
          <img src={cocktail.strDrinkThumb} alt="cocktail img"/>
          <h5>{cocktail.strDrink}</h5>
        </div>
      )})}

    </div>
  )
}

export default CocktailCarousel
import React from 'react'

function CocktailCarousel() {

  let cocktailObj = []

  for(let i = 0; i <= 20; i++){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(r => r.json())
    .then(cocktail => cocktailObj.push(cocktail))
  }

  return (
    <div>
      {cocktailObj.map((cocktail) => {
        
      })}

    </div>
  )
}

export default CocktailCarousel

document.addEventListener("DOMContentLoaded", () => {
  const PATCHURL ="http://localhost:3000/beers/1"

  const clickHandler = () => {
    document.addEventListener('click', (e) => {
      e.preventDefault()
      if(e.target.matches("body > main > div > form.description > button")){
        updateBeer(e.target)
      }



    })
  }

  function updateBeer(updateButton){
    const updateID = updateButton.dataset.id
  }






  const renderHtml = (beerObj) => {
    const name = beerObj.name
    const image = beerObj.image_url
    const description = beerObj.description
    const reviews = beerObj.reviews.forEach(review => {
      const li = document.createElement('li')
      li.append(review)
      const reviewContainer = document.querySelector("body > main > div > ul").append(li)
    })


    const beerNameContainer = document.querySelector("body > main > div > h2").textContent = name
    const beerImageContainer = document.querySelector("body > main > div > img").src = image
    const beerDescContainer = document.querySelector("body > main > div > form.description > textarea").textContent = description

  }




  const getBeer = () => {
    fetch(PATCHURL)
    .then(res => res.json())
    .then(beerObj => renderHtml(beerObj))
  }











  // submitHandler()
  clickHandler()
  getBeer()

})

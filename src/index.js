
document.addEventListener("DOMContentLoaded", () => {
  const PATCHURL ="http://localhost:3000/beers/1"







  const clickHandler = () => {
    document.addEventListener('click', (e) => {
      e.preventDefault()
      if(e.target.matches("body > main > div > form.description > button")){
        updateBeer(e.target)
      }

    })
    document.addEventListener("submit", (e) => {
      e.preventDefault()
      submitReview(e.target)
    })
  }

  function submitReview(review) {
    const reviews = beerObj.reviews

    const options = {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({reviews: review})
    }

    fetch(PATCHURL, options)
    .then(response => response.json())
    .then(obj => console.log())
  }



  function updateBeer(updateBtn) {
    let description = document.querySelector("body > main > div > form.description > textarea").innerText =""
    let newDescription = "words" // concept
    description = newDescription
    const options = {
      method:'PATCH',
      headers:{
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({id: 1, description: description})
    }

// appear on dom
    fetch(PATCHURL, options)
    .then(response => response.json())
    .then(obj => console.log(obj))
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

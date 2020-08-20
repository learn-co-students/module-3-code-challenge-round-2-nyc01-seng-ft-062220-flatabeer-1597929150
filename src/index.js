// Code here
document.addEventListener("DOMContentLoaded", e => {

const url = "http://localhost:3000/beers/1"
const nameH2 = document.querySelector(".beer-name")
const imageImg = document.querySelector("img")
const descText = document.querySelector("textarea")
const reviewUl = document.querySelector(".reviews")

function getBeers(){
    fetch(url)
    .then(response => response.json())
    .then(beers => renderBeer(beers))
  }

function renderBeer(beers) {
  nameH2.innerText = `${beers.name}`
  imageImg.src = `${beers.image_url}`
  descText.innerText = `${beers.description}`
  reviewUl.innerHTML = ''

  beers.reviews.forEach(review => {
      renderReview(review, reviewUl)
    })
    // debugger
}//end of renderBeer

function renderReview(review, reviewUl) {
  const reviewTextarea = document.createElement("li")
  reviewTextarea.innerText = `${review}`

  reviewUl.append(reviewTextarea)
}//end of renderReview

document.addEventListener("submit", e => {
    e.preventDefault()
    const updateForm = document.querySelector(".description")
    const reviewForm = document.querySelector(".review-form")
    //updating the description and sending PATCH request
    if(e.target === updateForm){
        let newDesc = descText.value

        const configObj = {
                method: "PATCH",
                headers: {
                  "content-type": "application/json",
                  "accept": "application/json"
                },
                body: JSON.stringify({description: newDesc})
        }

            fetch(url, configObj)
            .then(response => response.json())
          
    }

    //adding new review, no presistence
    if(e.target === reviewForm){
        let newReview = 
    }



}) //end of submit listener







//invoke functions
getBeers()

}) //end of DOMContentLoaded

/*
CORE---------------------------------
1)√ User can see first beer's name, image, descr, reviews

2)√ User can change description (PATCH)
2a)√ Updated description visible on front end (when reloading page!) (PATCH)

3) Add NEW review for beer (no persistence)

ADVANCED---------------------------------

3a) Persist a new review (POST)
3b) Delete a review (DELETE)
4) menu of beers 






*/
// Code here
document.addEventListener("DOMContentLoaded", e => {

const url = "http://localhost:3000/beers/1"

function getBeers(){
    fetch(url)
    .then(response => response.json())
    .then(beers => renderBeer(beers))
  }

function renderBeer(beers) {
  const nameH2 = document.querySelector(".beer-name")
  const imageImg = document.querySelector("img")
  const descText = document.querySelector("textarea")
  const reviewForm = document.querySelector(".review-form")
  

  beers.reviews
}

function renderReview(review, reviewForm) {
  const reviewTextarea = document.createElement("textarea")
  reviewTextarea.innerText = `${review.}`
}









//invoke functions
getBeers()

}) //end of DOMContentLoaded


/*
CORE---------------------------------
1) User can see first beer's name, image, descr, reviews

2) User can change description (PATCH)
2a) Updated description visible on front end (when reloading page!)

3) Add NEW review for beer (no persistence)

ADVANCED---------------------------------

3a) Persist a new review (POST)
3b) Delete a review (DELETE)
4) menu of beers 






*/
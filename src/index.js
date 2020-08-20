

document.addEventListener("DOMContentLoaded", function() { renderBeer()

    // See the first beer's details, including its name, image, description, and reviews, when the page loads

const main = document.querySelector('main')

    function renderBeer(){
        fetch( "http://localhost:3000/beers/1")
        .then(resp => resp.json())
        .then(obj => {
             main.innerHTML = `<div class="beer-details">
                              <h2>${obj.name}</h2>
                              <img src=${obj.image_url}>
     
                              <form class="description">
                              <textarea>${obj.description}</textarea>
                              <button>Update Beer</button>
                              </form>
     
                              <h3>Leave a Review</h3>
                              <form class="review-form">
                              <textarea></textarea>
                              <input type="submit" value="Submit">
                              </form>
     
                              <h3>Customer Reviews</h3>
                              <ul class="reviews">
                             <li>${obj.reviews[0]}</li>
                            <li>${obj.reviews[1]}</li>
                            <li>${obj.reviews[2]}</li>
                            <li>${obj.reviews[3]}</li>
                             </ul>
                             </div>`
        })
         } 

// Change the beer's description and still see that change when reloading the page

document.addEventListener('click', function(e) { e.preventDefault()
    
if (e.target.textContent==="Update Beer") {
    
    let text = e.target.parentNode[0].textContent
    console.log(text)

    let options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ description: text   })
    } 
    fetch( "http://localhost:3000/beers/1" , options)
    .then(resp => resp.json())
    .then(obj => {console.log(obj)})
}
// Add a review for the beer (no persistence needed) 
if (e.target.value==="Submit") {
    let review = e.target.parentNode[0]
    console.dir(review)
    

 
 } 

 
 

 })








})


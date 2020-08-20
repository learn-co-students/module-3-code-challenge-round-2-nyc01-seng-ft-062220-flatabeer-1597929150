// See the first beer's details, including its name, image, description, and reviews, when the page loads
// Change the beer's description and still see that change when reloading the page
// Add a review for the beer (no persistence needed)

document.addEventListener("DOMContentLoaded", function() { 

const name = document.querySelector('h2')
const img = document.querySelector('img')


    function renderBeer(){
        fetch( "http://localhost:3000/beers/1")
        .then(resp => resp.json())
        .then(obj =>)
         }
       }









}

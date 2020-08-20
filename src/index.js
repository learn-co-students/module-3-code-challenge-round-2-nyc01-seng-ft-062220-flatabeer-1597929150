// Code here
document.addEventListener("DOMContentLoaded", function(){

    const beersUrl = "http://localhost:3000/beers/"

    //fetch first beer only
    const getFirstBeer = () => {
        fetch(beersUrl + 1)
        .then(response => response.json())
        .then(firstBeer => renderFirstBeer(firstBeer))
    }

    const renderFirstBeer = (firstBeer) => {
        
        //replace beer name 
        const beerName = document.querySelector("h2")
        beerName.innerText = firstBeer.name

        // replace beer image 
        const beerImage = document.querySelector("img")
        beerImage.src = firstBeer.image_url
        
        //replace beer description
        const beerDescription = document.querySelector("textarea")
        beerDescription.innerText = firstBeer.description        
        
    }


    const clickHandler = () => {
        document.addEventListener("click", function(e){
            const descriptionForm = document.querySelector(".description")
            const updateButton = descriptionForm.querySelector("button")
            if(e.target === updateButton){
                e.preventDefault()
                

                
            }
        })
    }

getFirstBeer()
clickHandler()

})
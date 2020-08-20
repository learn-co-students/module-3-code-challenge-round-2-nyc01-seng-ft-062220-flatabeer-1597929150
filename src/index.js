// Code here
document.addEventListener("DOMContentLoaded", function(){

    const beersUrl = "http://localhost:3000/beers/"
    const reviewList = document.querySelector(".reviews")

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
        
        reviewList.innerHTML = ` ` //clear out existing comments
        //replace beer reviews
        firstBeer.reviews.forEach(review => {
            const reviewLi = document.createElement("li")
            reviewLi.innerHTML = `${review}`
            reviewList.append(reviewLi)
            // debugger
        })       
    }


    const clickHandler = () => {
        document.addEventListener("click", function(e){
            const descriptionForm = document.querySelector(".description")
            const descriptionText = descriptionForm.querySelector("textarea")
            const newDescription = descriptionText.value
            const updateButton = descriptionForm.querySelector("button")
            if(e.target === updateButton){
                e.preventDefault()
                //update description in database to new text area value
                //fetch the beer and patch it

                fetch(beersUrl + 1)
                .then(response => response.json())
                .then(firstBeerObj => {
                    let beerDescription = firstBeerObj.description
                    
                    const configObj = {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },
                        body: JSON.stringify({description: newDescription})
                    }

                    fetch(beersUrl + 1, configObj)
                    .then(response => response.json())
                    .then(firstBeerObj => {
                        let newDescription = firstBeerObj.description
                    }) //closing PATCH fetch
                }) //closing GET fetch
            } //closing out if
        }) //closing out listener
    } //closing out click handler


const submitHandler = () => {
    //find the correct form and add a listener
    //grab input text and assign it inside new li, append to the comment UL defined up top
    const reviewForm = document.querySelector(".review-form")
    reviewForm.addEventListener("submit", function(e){
        e.preventDefault()
        let form = e.target
        let textBox = form.querySelector("textarea")
        let newReview = textBox.value

        fetch(beersUrl + 1)
        .then(response => response.json())
        .then(firstBeerObj => {
            let reviews = firstBeerObj.reviews
            const reviewLi = document.createElement('li')
            reviewLi.innerHTML = `${newReview}`
            reviewList.append(reviewLi)
            form.reset()
        }) //end fetch
    }) //end listener
} //end clickHandler

getFirstBeer()
clickHandler()
submitHandler()

})
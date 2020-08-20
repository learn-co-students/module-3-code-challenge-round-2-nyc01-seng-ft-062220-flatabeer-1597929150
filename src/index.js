// **DONE See the first beer's details, including its name, image, description, and reviews, when the page loads
// **DONE Change the beer's description and still see that change when reloading the page
// **DONE Add a review for the beer (no persistence needed)

document.addEventListener('DOMContentLoaded', () => {
    
    fetch('http://localhost:3000/beers/1')
    .then(response => response.json())
    .then(beers => renderBeers(beers))

    const renderBeers = (beers) => {
        const name = document.querySelector("body > main > div > h2")
        name.innerText = beers.name 
        const image = document.querySelector("body > main > div > img")
        image.src = beers.image_url
        const description = document.querySelector("body > main > div > form.description > textarea")
        description.innerText = beers.description
        const reviewUl = document.querySelector("body > main > div > ul")
        reviewUl.innerHTML = ""
        //remove original comments
        
        beers.reviews.forEach(review => {
            const reviewUl = document.querySelector("body > main > div > ul")
            const reviewLi = document.createElement('li')
            reviewLi.innerText = review
            reviewUl.appendChild(reviewLi)
        })
    }

    document.addEventListener('submit', (event) => {
        event.preventDefault()
        if(event.target.innerText === 'UPDATE BEER') {
            // const form = event.target
            // console.dir(form)
            const newDescription = event.target.children[0].value
            
            const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify( {description: newDescription} )
            }
            fetch('http://localhost:3000/beers/1', options)
            .then(response => response.json())
            
        }else if(event.target.className = 'review-form') {
            // const commentForm = event.target
            // console.dir(commentForm)
            const comment = event.target.children[0].value
            const reviewUl = document.querySelector("body > main > div > ul")
            const createLi = document.createElement('li')
            createLi.innerText = comment
            reviewUl.appendChild(createLi)
        }
    })
})

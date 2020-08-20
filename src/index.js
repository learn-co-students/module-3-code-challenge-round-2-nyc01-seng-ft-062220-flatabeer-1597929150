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
        
        beers.reviews.forEach(review => {
            const reviewUl = document.querySelector("body > main > div > ul")
            const reviewLi = document.createElement('li')
            reviewLi.innerText = review
            reviewUl.appendChild(reviewLi)
        })
    }


})

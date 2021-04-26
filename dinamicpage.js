// Slideshow homepage
const slides = document.querySelectorAll('.slide-image');
const totalSlides = slides.length;
const buttonNext = document.querySelector('#slideshow-button-next');
const buttonPrev = document.querySelector('#slideshow-button-prev');

let slidePosition = 0;

// Auto slide image
setInterval(() => {
    moveToNextImage();
}, 4000);

// Manual slide image
buttonNext.addEventListener("click", function () {
    moveToNextImage();
});

buttonPrev.addEventListener("click", function () {
    moveToPrevImage();
})

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('visible-image');
        slide.classList.add('hidden-image');
    }

    slides[slidePosition].classList.add('visible-image');
}

function moveToNextImage() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevImage() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}

// Call API

const apiKey = 'e8da52fcb87542bdaad49f1e92e4aa65'
const apiLink = 'https://api.spoonacular.com/recipes'

// Call first dish

fetch(`${apiLink}/complexSearch?query=pasta&number=20&apiKey=${apiKey}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {

        const imageDish = data.results[19].image
        const titleDish = data.results[19].title
        const idDish = data.results[19].id
        const dishTitleH2 = document.querySelector('.h2-tag-1')
        dishTitleH2.textContent = titleDish
        const divPhoto = document.querySelector('.box-2')
        const phtotoUpload = document.createElement('img')
        phtotoUpload.setAttribute('src', imageDish)
        divPhoto.appendChild(phtotoUpload)

        fetch(`${apiLink}/${idDish}/information?apiKey=${apiKey}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

            .then(response => response.json())
            .then(data => {

                const ingredients = data.extendedIngredients;
                let ingredientsList = []
                for (let i = 0; i < ingredients.length; i++) {
                    const eachIngredient = ingredients[i].name;
                    ingredientsList.push(eachIngredient);
                }
                let ingredientsListString = ingredientsList.join(', ')
                const splitWords = ingredientsListString.split(' ')
                const upperCaseWord = splitWords.map((word) => {
                    return word[0].toUpperCase() + word.substring(1);
                }).join(' ');

                const paragraph = document.querySelector('.para-tag-1')
                paragraph.innerHTML = upperCaseWord
            })
    })

// Call second dish

fetch(`${apiLink}/complexSearch?query=meat&number=20&apiKey=${apiKey}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {

        const imageDish = data.results[13].image
        const titleDish = data.results[13].title
        const idDish = data.results[13].id
        const dishTitleH2 = document.querySelector('.h2-tag-3')
        dishTitleH2.textContent = titleDish
        const divPhoto = document.querySelector('.box-4')
        const phtotoUpload = document.createElement('img')
        phtotoUpload.setAttribute('src', imageDish)
        divPhoto.appendChild(phtotoUpload)

        fetch(`${apiLink}/${idDish}/information?apiKey=${apiKey}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

            .then(response => response.json())
            .then(data => {

                const ingredients = data.extendedIngredients;
                let ingredientsList = []
                for (let i = 0; i < ingredients.length; i++) {
                    const eachIngredient = ingredients[i].name;
                    ingredientsList.push(eachIngredient);
                }
                let ingredientsListString = ingredientsList.join(', ')
                const splitWords = ingredientsListString.split(' ')
                const upperCaseWord = splitWords.map((word) => {
                    return word[0].toUpperCase() + word.substring(1);
                }).join(' ');

                const paragraph = document.querySelector('.para-tag-3')
                paragraph.innerHTML = upperCaseWord
            })
    })

// Call third dish

fetch(`${apiLink}/complexSearch?query=salad&number=20&apiKey=${apiKey}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {

        const imageDish = data.results[18].image
        const titleDish = data.results[18].title
        const idDish = data.results[18].id
        const dishTitleH2 = document.querySelector('.h2-tag-6')
        dishTitleH2.textContent = titleDish
        const divPhoto = document.querySelector('.box-5')
        const phtotoUpload = document.createElement('img')
        phtotoUpload.setAttribute('src', imageDish)
        divPhoto.appendChild(phtotoUpload)

        fetch(`${apiLink}/${idDish}/information?apiKey=${apiKey}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

            .then(response => response.json())
            .then(data => {

                const ingredients = data.extendedIngredients;
                let ingredientsList = []
                for (let i = 0; i < ingredients.length; i++) {
                    const eachIngredient = ingredients[i].name;
                    ingredientsList.push(eachIngredient);
                }
                let ingredientsListString = ingredientsList.join(', ')
                const splitWords = ingredientsListString.split(' ')
                const upperCaseWord = splitWords.map((word) => {
                    return word[0].toUpperCase() + word.substring(1);
                }).join(' ');

                const paragraph = document.querySelector('.para-tag-6')
                paragraph.innerHTML = upperCaseWord
            })
    })

// Call fourth dish

fetch(`${apiLink}/complexSearch?query=pizza&number=20&apiKey=${apiKey}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {

        const imageDish = data.results[15].image
        const titleDish = data.results[15].title
        const idDish = data.results[15].id
        const dishTitleH2 = document.querySelector('.h2-tag-8')
        dishTitleH2.textContent = titleDish
        const divPhoto = document.querySelector('.box-7')
        const phtotoUpload = document.createElement('img')
        phtotoUpload.setAttribute('src', imageDish)
        divPhoto.appendChild(phtotoUpload)

        fetch(`${apiLink}/${idDish}/information?apiKey=${apiKey}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

            .then(response => response.json())
            .then(data => {

                const ingredients = data.extendedIngredients;
                let ingredientsList = []
                for (let i = 0; i < ingredients.length; i++) {
                    const eachIngredient = ingredients[i].name;
                    ingredientsList.push(eachIngredient);
                }
                let ingredientsListString = ingredientsList.join(', ')
                const splitWords = ingredientsListString.split(' ')
                const upperCaseWord = splitWords.map((word) => {
                    return word[0].toUpperCase() + word.substring(1);
                }).join(' ');

                const paragraph = document.querySelector('.para-tag-8')
                paragraph.innerHTML = upperCaseWord
            })
    })

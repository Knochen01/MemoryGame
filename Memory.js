const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
let cardsChoosen = [];
let cardsChoosenId =[];
let cardsWon = [];

//card options
const cards = [
    {
        name: 'family',
        img: 'Picture1.jpg'
    },
    {
        name: 'family',
        img: 'Picture1.jpg'
    },
    {
        name: 'duck',
        img: 'Picture2.jpg'
    },
    {
        name: 'duck',
        img: 'Picture2.jpg'
    },
    {
        name: 'bird',
        img: 'Picture3.jpg'
    },
    {
        name: 'bird',
        img: 'Picture3.jpg'
    },
    {
        name: 'pig',
        img: 'Picture4.jpg'
    },
    {
        name: 'pig',
        img: 'Picture4.jpg'
    },
]

// randomize array
cards.sort(() => 0.5 - Math.random());


//creating the board
function createBoard () {
    for ( let i = 0; i < cards.length; i++){
        let card = document.createElement('img')
        card.setAttribute('src', 'Psycard.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

createBoard();



//check your matches
function checkForMatch(){
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChoosenId[0];
    const optionTwoId = cardsChoosenId[1];
    if ( cardsChoosen[0] === cardsChoosen[1]) {
        cards[optionOneId].setAttribute('src', 'Whitecard.jpg')
        cards[optionTwoId].setAttribute('src', 'Whitecard.jpg')
        cardsWon.push(cardsChoosen)
    }
    else {
        cards[optionOneId].setAttribute('src', 'Psycard.jpg')
        cards[optionTwoId].setAttribute('src', 'Psycard.jpg')
    }
    cardsChoosen =[];
    cardsChoosenId = []
    resultDisplay.textContent = cardsWon.length
    if ( cardsWon.length === cards.length/2) {
        resultDisplay.textContent = "Congratulations! You found them all!"
    }
}

//flip your cards
function flipcard(){
    let cardId = this.getAttribute('data-id')
    cardsChoosen.push(cards[cardId].name)
    cardsChoosenId.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if (cardsChoosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}


// cards
const CARDS_NUMBER = 36

let cards = [
  '../img/01_card.svg',
  '../img/02_card.svg',
  '../img/03_card.svg',
  '../img/04_card.svg',
  '../img/05_card.svg',
  '../img/06_card.svg',
  '../img/07_card.svg',
  '../img/08_card.svg',
  '../img/09_card.svg',
  '../img/10_card.svg',
  '../img/11_card.svg',
  '../img/12_card.svg',
  '../img/13_card.svg',
  '../img/01_card.svg',
  '../img/02_card.svg',
  '../img/03_card.svg',
  '../img/04_card.svg',
  '../img/05_card.svg',
  '../img/06_card.svg',
  '../img/07_card.svg',
  '../img/08_card.svg',
  '../img/09_card.svg',
  '../img/10_card.svg',
  '../img/11_card.svg',
  '../img/12_card.svg',
  '../img/13_card.svg',
  '../img/01_card.svg',
  '../img/02_card.svg',
  '../img/03_card.svg',
  '../img/04_card.svg',
  '../img/05_card.svg',
  '../img/06_card.svg',
  '../img/07_card.svg',
  '../img/08_card.svg',
  '../img/09_card.svg',
  '../img/10_card.svg',
  '../img/11_card.svg',
  '../img/12_card.svg',
  '../img/13_card.svg',
  '../img/01_card.svg',
  '../img/02_card.svg',
  '../img/03_card.svg',
  '../img/04_card.svg',
  '../img/05_card.svg',
  '../img/06_card.svg',
  '../img/07_card.svg',
  '../img/08_card.svg',
  '../img/09_card.svg',
  '../img/10_card.svg',
  '../img/11_card.svg',
  '../img/12_card.svg',
  '../img/13_card.svg'
]

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards
}

cards = shuffle(cards)

let cardsContainer = document.getElementById('third__cards-container')

for (let i = 0; i < CARDS_NUMBER; i++) {
  let newCard = document.createElement('img')

  newCard.src = `../img/${cards[i]}`
  newCard.classList.add('card')
  newCard.onclick = function(event) {
    event.target.style.transform =  `translate(${anime.random(-55,55)}vw,${anime.random(-55,55)}vh) rotate(${anime.random(0, 360)}deg)`
    event.target.style.filter =  `drop-shadow(0px 0px 40px #FF7B7B)`

  }
  cardsContainer.append(newCard)
}

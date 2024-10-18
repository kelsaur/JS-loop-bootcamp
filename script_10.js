const cardSuits = ['clubs', 'diamonds', 'hearts', 'spades']
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace']

for (let cardSuit of cardSuits) {
    for (let cardValue of cardValues) {
        console.log(cardSuit + ' ' + cardValue)
    }
}
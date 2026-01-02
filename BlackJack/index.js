let cards = []
let sum = 0
let isAlive = false;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player={
    name: "Sajan" ,
    chips: 145
}
let playerEl = document.getElementById("player-el")
console.log(playerEl)
playerEl.textContent = player.name + ": $ " + player.chips


function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13) +1
    if (randomCard > 10){
        return 10
    }
    else if (randomCard ===1){
        return 11
    }
    else return randomCard
}
function startGame(){
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
     cards = [firstcard, secondcard]
     sum = firstcard + secondcard
    renderGame()
}
function renderGame() {

        if (sum < 21) {
            message = "Do you want to draw a card?";
        } else if (sum === 21) {
            message = "Blackjack!";
            hasBlackJack = true;
        } else {
            message = "You lost";
            isAlive = false;
            
        }
        console.log(message);
        messageEl.textContent = message
        sumEl.textContent =   "Sum: " + sum
        cardsEl.textContent = "Cards: " 
        console.log(cardsEl.textContent)
        for ( let i = 0; i < cards.length; i++){
            cardsEl.textContent += cards[i] + " "
            console.log(cardsEl.textContent)
        }
    }

function newCard() {
    if( isAlive === true && hasBlackJack === false){
    let newCard = getRandomCard()
    cards.push(newCard)
    console.log(cards)
    sum += newCard
    renderGame()

    }
}
console.log(messageEl)

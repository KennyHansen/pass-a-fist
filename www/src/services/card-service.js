let cards = [
    {
        name: "A fake card",
        type: "Attack",
        imgUrl: "../assets/logo.png" // get this working :)
    },
    {
        name: "Another fake card",
        type: "Attack"
    },
    {
        name: "A third fake card",
        type: "Attack"
    }
]

let cardService = {
    getSomeFakeCards() {
        return cards
    },
    addFakeCard(cardName) {
        cards.push({ name: cardName, type:"Attack"})
        console.log('New card added')
    }
}

export default cardService;
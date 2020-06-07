export const fetchCards = async () => {
    try {
        let cardsData = [];
        const response = await fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/')
        const cards = await response.json()
        console.log(cards)
    } catch (err) {
        console.log(err)
    }
}
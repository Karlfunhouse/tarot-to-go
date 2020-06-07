export const fetchCards = async () => {
    try {
        let cardsData = [];
        const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
            headers: {
                "Target-URL": 'https://rws-cards-api.herokuapp.com/api/v1/cards/'
                }
            })
        const cards = await response.json()
        return cards
    } catch (err) {
        console.log(err)
    }
}
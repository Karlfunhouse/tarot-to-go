export const fetchCards = async () => {
    try {
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

export const fetchSingleCard = async () => {
    try {
        const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
            headers: {
                "Target-URL": 'https://rws-cards-api.herokuapp.com/api/v1/cards/random'
            }
        })
        const singleCard = await response.json()
        return singleCard
    } catch (err) {
        console.log(err)
    }
}

export const fetchThreeCards = async () => {
    try {
        const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
            headers: {
                "Target-URL": 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3'
            }
        })
        const threeCards = await response.json()
        return threeCards
    } catch (err) {
        console.log(err)
    }
}


const token = '323d07613499d8a80ef7b7c2a76c368fa5250cba';
const url =  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';

function data(query) {
    const request = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }

    return fetch(url, request)
        .then(response => response.json())
}

export default data
function fetchData(request, url) {
    return fetch(url, request)
        .then(response => response.json())
        .catch(error => console.log("error", error));
}

export default fetchData
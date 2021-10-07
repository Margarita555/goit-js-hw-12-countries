export default fetchCountries ;

function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
        .then(response => {
        return response.json();
        }).then(countries => {
        return countries
    })
        
        
}




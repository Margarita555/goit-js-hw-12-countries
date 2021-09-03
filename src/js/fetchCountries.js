export default { fetchCountries };

function fetchCountries(searchQuery) {
    return fetch('https://restcountries.eu/rest/v2/name/{name}').then(response => {
     console.log(response.json());
}
// import API from '.index.js'

// API.fetch('https://restcountries.eu/rest/v2/name/{name}').then(response => {
//     console.log(response.json());
//     return response.json();
// }).then(name => {
//     console.log(name);
// }).catch(error => {
//     console.log(error);
//    })

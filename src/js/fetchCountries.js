export default fetchCountries ;

function fetchCountries(countryName) {
    // console.log('r')
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(response => {
        return response.json();
    }).then(renderCountry)
        .catch(error => {
        console.log(error);
    })
    
}
const countriesList = document.querySelector('.countries-list')

function renderCountry(countries) {
    if (countries.length > 10) {
        console.log('pnotify');
    } else if (countries.length > 2 && countries.length < 10) {
        console.log('2,10');
        const makeCountriesList = countries.map(country => {
            const liEl = document.createElement('li');
            liEl.textContent = country.name;
            return liEl
        })
        countriesList.append(...makeCountriesList)
        
    } else if (countries.length === 1) {
        console.log(countries);
    }
}


//  fetchCountries()
// import API from '.index.js'

// API.fetch('https://restcountries.eu/rest/v2/name/{name}').then(response => {
//     console.log(response.json());
//     return response.json();
// }).then(name => {
//     console.log(name);
// }).catch(error => {
//     console.log(error);
//    })

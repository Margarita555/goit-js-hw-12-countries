import debounce from 'lodash.debounce';
// import '../css/common.css';
// import fetchCountries from './fetchCountries';
import countryTemplate from '../templates/country-template.hbs';

const inputEl = document.querySelector('.input');
// const countriesList = document.querySelector('.countries-list');

inputEl.addEventListener('input', debounce(onInputChange,500));
function onInputChange() {
    let inputValue = inputEl.value;
    console.log(inputValue)
    fetchCountries(inputValue)
}


function fetchCountries(countryName) {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(response => {
        return response.json();
    }).then(renderCountry)
        .catch(error => {
        console.log(error);
        })
        // .finally(() => countryItem.reset)
    
}
const countriesList = document.querySelector('.countries-list');
const countryItem = document.querySelector('.country-item');

function renderCountry(countries) {
    countryItem.innerHTML = '';
    if (countries.length > 10) {
        console.log('pnotify');
    } else if (countries.length > 2 && countries.length < 10) {
        const makeCountriesList = countries.map(country => {
            const liEl = document.createElement('li');
            liEl.textContent = country.name;
            return liEl
        })
        countriesList.append(...makeCountriesList)
        
    } else if (countries.length === 1) {
        countriesList.innerHTML = '';
        console.log(countries);
        const markup = countryTemplate(countries)
        countryItem.insertAdjacentHTML('beforeend', markup)
    }
}
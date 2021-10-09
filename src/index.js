
import debounce from 'lodash.debounce';
import { alert, error, notice, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});
import fetchCountries from './js/fetchCountries';
import countryTemplate from './templates/country-template.hbs';

const inputEl = document.querySelector('.input');
const countriesContainer = document.querySelector('.countries-list');
const countryItem = document.querySelector('.country-item');

inputEl.addEventListener('input', debounce(onInputChange, 500));

function onInputChange(e) {
    let inputValue = inputEl.value;
    const fetchedCountries = fetchCountries(inputValue);
    fetchedCountries.then(renderCountry)
    .catch(onFetchError);
}

function onFetchError(e) {
    const myError = error({
      text:"Try again later."
});
}

function renderCountry(countries) {
    countryItem.innerHTML = '';
    if (countries.length > 10) {
    const myNotice = notice({
      text: "Too many matches found. Please enter a more specific query!"
});
    } else
        if (countries.length > 2 && countries.length < 10) {
        if (countriesContainer.innerHTML !== "") {
            return;
        }
        const countriesList = makeCountriesList(countries);
        countriesContainer.append(...countriesList);      
    } else if (countries.length === 1) {
        clearCountriesContainer();
        const markup = countryTemplate(countries);
        countryItem.insertAdjacentHTML('beforeend', markup);
    }
}

function makeCountriesList(countries) {
    return countries.map(country => {
            const liEl = document.createElement('li');
            liEl.textContent = country.name;
            return liEl
})
}

function clearCountriesContainer() {
    countriesContainer.innerHTML = '';
}

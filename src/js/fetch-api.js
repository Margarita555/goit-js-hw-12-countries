import debounce from 'lodash.debounce';
// import '../css/common.css';
import fetchCountries from './fetchCountries';

const inputEl = document.querySelector('.input');
// const countriesList = document.querySelector('.countries-list');

inputEl.addEventListener('input', debounce(onInputChange,500));
function onInputChange() {
    let inputValue = inputEl.value;
    console.log(inputValue)
    fetchCountries(inputValue)
}
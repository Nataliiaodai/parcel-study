import './css/styles.css';
import {fetchCountries} from './fetchCountrie';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';


const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(searchResult, DEBOUNCE_DELAY));

function searchResult() {
    const searchQuery = input.value.trim().toLowerCase();
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';

    if (searchQuery.length > 0) {
        fetchCountries(searchQuery)
            .then(countries => {
                console.log(countries);
                if (countries.length > 10) {
                    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
                } else if (countries.length >= 2 && countries.length < 10) {
                    renderCountries(countries);
                } else {
                    createCountryCard(countries);
                }
            })
            .catch(error => {
                Notiflix.Notify.failure('Oops, there is no country with that name.');
            });
    }
}

const createCountryCard = countries => {
    const countryMarkup = countries
        .map(country => {
            return `
    <div class="counrty__img-wrapper">
        <img class="country-list__img" src="${
                country.flags.svg
            }" alt="flag of ${country.name.common}" height = 30 width = 50>
        <p class="country-list__wrapper-text">${country.name.common}</p>
    </div>
    <p class="country-list__text"><b>Capital</b> : ${country.capital}</p>
    <p class="country-list__text"><b>Population</b> : ${country.population}</p>
    <p class="country-list__text"><b>Languages</b> : ${Object.values(
                country.languages
            )}</p>`;
        })
        .join('');
    return (countryInfo.innerHTML = countryMarkup);
};

function renderCountries(countries) {
    const markup = countries
        .map(country => {
            return `<li style="display: flex; align-items: center;"><img src="${country.flags.svg}" alt="flag of ${country.name.official}" height="40" width="70"">
        <p style="font-weight: 500;">Name: ${country.name.official}</p></li>`;
        })
        .join('');
    return (countryList.innerHTML = markup);
}
import './css/styles.css';
import {fetchCountries} from './fetchCountries';
const debounce = require('lodash.debounce');
import Notiflix from 'notiflix';

Notiflix.Notify.init({
    fontSize: '28px',
    width: '400px',
    borderRadius: '20px',
    });

const DEBOUNCE_DELAY = 300;
const searchCountry = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");

const countryListMarkup =(item) => {
    return `<li class="country-list__item">
    <img src="${item.flags.svg}" alt="flag of ${item.name.official}" width="60" height="40">
    <h2>${item.name.official}</h2></li>`
}

const generateCountryList = (array) =>
     array.reduce((acc, item) => acc+ countryListMarkup(item), "");

const insertContent = (array) => { 
    const result = generateCountryList(array);
    countryList.insertAdjacentHTML('beforeend', result);
};    

const createCountryCart =(item)=>{
        const countryCard = `<div class="country-info">
        <div class="country">
        <img src="${item.flags.svg}" alt="flag of ${item.name.official}" width="75" height="50" class = "country__flag">
        <h2>${item.name.official}</h2>
        </div>
        <p><span>Capital: </span>${item.capital}</p>
        <p><span>Population: </span>${item.population}</p>
        <p><span>Languages: </span>${Object.values(item.languages)}</p>
    </div>`
    countryList.insertAdjacentHTML('beforeend', countryCard);
    };


    const clearList = () => {
        countryList.innerHTML = "";
        
        
    };

    searchCountry.addEventListener('input',debounce(onSearchCountry,DEBOUNCE_DELAY));

    const filter = (array) => {
        if (array.length === 1) {
            clearList();
            return createCountryCart(array[0]);
        } else if (array.length <= 10 && array.length > 1) {
            clearList();
            insertContent (array);
        } else if (array.length >= 10) {
            clearList();
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name");
        } else { 
            clearList();
            Notiflix.Notify.failure("Oops, there is no country with that name");
        }
        };

    function onSearchCountry(e) {
        const searchName = e.target.value.trim();
        if (searchName === "") {
            clearList();
            return;
        }
        fetchCountries(searchName)
        .then((data) => {
            filter(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }


import { getWeatherData } from "./app.js";

const body = document.querySelector('body');
const searchForm = document.createElement('form');
const label = document.createElement('label');
label.for = 'searchInput';
label.classList.add('label');
const searchInput = document.createElement('input');
searchInput.name = 'searchInput';
searchInput.classList.add('search')
searchInput.id = 'searchInput'
searchInput.type = 'text';
searchInput.required = true;
searchInput.placeholder = 'location';
label.appendChild(searchInput);

const searchBtn = document.createElement('button');
searchBtn.classList.add('btn');
searchBtn.id = 'searchBtn';
searchBtn.textContent = 'Search';
searchBtn.type = 'button';

searchBtn.addEventListener('click', () => {
    getWeatherData(searchInput.value);
})

searchForm.appendChild(label);
searchForm.appendChild(searchBtn);
body.appendChild(searchForm);
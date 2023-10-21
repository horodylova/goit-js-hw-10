import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_Tw25qqZGTgRzQUEFXOfLqmslZZwx9HXbjDePGI0ZChRJtxUAscxAhnVEo8KUClDE";

const breedSelect = document.querySelector(".breed-select");
const maxHeight = 200;
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

loader.hidden = true;
error.hidden = true;

const BASE_URL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  axios.get(`${BASE_URL}/breeds`)
    .then(response => {
      const data = response.data;

      data.forEach(breed => {
        const option = document.createElement("option");
        option.value = breed.id; 
        option.text = breed.name;
        breedSelect.appendChild(option);
      });
    })
    .catch(err => {
      
      error.hidden = false;
    });
}

fetchBreeds();
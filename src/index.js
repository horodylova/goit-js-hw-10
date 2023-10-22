import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_Tw25qqZGTgRzQUEFXOfLqmslZZwx9HXbjDePGI0ZChRJtxUAscxAhnVEo8KUClDE";

const breedSelect = document.querySelector(".breed-select");
const maxHeight = 200;
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

loader.hidden = true;
error.hidden = true;

const BASE_URL = 'https://api.thecatapi.com/v1';

function openSelect() {
  breedSelect.classList.add('open'); 
  breedSelect.style.maxHeight = '200px';
  breedSelect.style.overflowY = 'auto';
}

function closeSelect() {
  breedSelect.classList.remove('open');
  breedSelect.style.maxHeight = 'none';
  breedSelect.style.overflowY = 'visible';
}

function fetchBreeds(onSuccess, onError) {
  closeSelect();

  axios.get(`${BASE_URL}/breeds`)
    .then(response => {
      const data = response.data;

      data.forEach(breed => {
        const option = document.createElement("option");
        option.value = breed.id; 
        option.text = breed.name;
        breedSelect.appendChild(option);
      });

      if (onSuccess) {
        onSuccess();
      }
    })
    .catch(err => {
      console.error("Ошибка при загрузке списка пород кошек:", err);
      error.hidden = false;

      if (onError) {
        onError();
      }
    });
}


fetchBreeds();


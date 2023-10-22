import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_Tw25qqZGTgRzQUEFXOfLqmslZZwx9HXbjDePGI0ZChRJtxUAscxAhnVEo8KUClDE";

import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

loader.hidden = true;
error.hidden = true;

export const BASE_URL = 'https://api.thecatapi.com/v1';

breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;

  if (selectedBreedId) {
    loader.hidden = false;
    fetchCatByBreed(selectedBreedId)
    .then(catData => {
      
      const catName = document.createElement("h2");
  catName.textContent = catData.name;

  const catImage = document.createElement("img");
  catImage.src = catData.url;
  catImage.alt = catData.name;

  const catInfoContainer = document.querySelector('.cat-info');

  catInfoContainer.innerHTML = '';
  catInfoContainer.appendChild(catName);
  catInfoContainer.appendChild(catImage);

  loader.hidden = true;

    })
    .catch(error => {
      console.error("Ошибка при загрузке информации о кошке:", error);
      error.hidden = false; 
      loader.hidden = true; 
    });
}
});

fetchBreeds(breedSelect);


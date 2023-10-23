// import axios from "axios";
import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector(".breed-select");
const error = document.querySelector('.error');

error.hidden = true;

export const BASE_URL = 'https://api.thecatapi.com/v1';

breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;

  // Показать сообщение о загрузке
  Notiflix.Loading.standard('Loading...');

  if (selectedBreedId) {
    fetchCatByBreed(selectedBreedId)
      .then(catData => {
        const catInfoContainer = document.querySelector('.cat-info');
        catInfoContainer.innerHTML = '';

        const catInfoWrapper = document.createElement("div");
        catInfoWrapper.style.display = "flex";

        const catImage = document.createElement("img");
        catImage.src = catData.url;
        catImage.alt = catData.name;
        catImage.style.width = "50%";
        catImage.style.height = "auto";
        catImage.style.maxHeight = '300px';
        catImage.style.width = 'auto';
        catImage.style.border = '5px double gray';
        catImage.style.flex = "1";
        catImage.loading = "lazy";

        const textInfoContainer = document.createElement("div");
        textInfoContainer.style.flex = "2";
        textInfoContainer.style.display = "flex";
        textInfoContainer.style.flexDirection = "column";
        textInfoContainer.style.alignItems = "flex-start";

        const catName = document.createElement("h2");
        catName.textContent = catData.breeds[0].name;
        catName.style.margin = "0";

        const catDescription = document.createElement("p");
        catDescription.textContent = `Description: ${catData.breeds[0].description}`;

        const catTemperament = document.createElement("p");
        catTemperament.textContent = `Temperament: ${catData.breeds[0].temperament}`;

        textInfoContainer.appendChild(catName);
        textInfoContainer.appendChild(catDescription);
        textInfoContainer.appendChild(catTemperament);

        catInfoWrapper.appendChild(textInfoContainer);
        catInfoWrapper.appendChild(catImage);
        catInfoContainer.appendChild(catInfoWrapper);

        // Скрыть сообщение о загрузке
        Notiflix.Loading.remove();
      })
      .catch(error => {
        console.error("Ошибка при загрузке информации о кошке:", error);
        error.hidden = false;
        // Показать сообщение об ошибке
        Notiflix.Notify.failure('Failed to load cat information');
        // Скрыть сообщение о загрузке
        Notiflix.Loading.remove();
      });
  }
});

fetchBreeds(breedSelect);

// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "live_Tw25qqZGTgRzQUEFXOfLqmslZZwx9HXbjDePGI0ZChRJtxUAscxAhnVEo8KUClDE";

// import { fetchBreeds, fetchCatByBreed } from './cat-api';
// import Notiflix from 'notiflix';
// // import SlimSelect from 'slim-select';

// const breedSelect = document.querySelector(".breed-select");

// // new SlimSelect({
// //   select: breedSelect,
// //   dataAttributeValue: 'data-color', 
// // });

// const loader = document.querySelector('.loader');
// const error = document.querySelector('.error');

// loader.hidden = true;
// error.hidden = true;

// export const BASE_URL = 'https://api.thecatapi.com/v1';

// breedSelect.addEventListener('change', () => {
//   const selectedBreedId = breedSelect.value;

//   if (selectedBreedId) {
//     loader.hidden = false;
    
//     fetchCatByBreed(selectedBreedId)
//     .then(catData => {
//       const catInfoContainer = document.querySelector('.cat-info');
//       catInfoContainer.innerHTML = '';

//       const catInfoWrapper = document.createElement("div");
//       catInfoWrapper.style.display = "flex";

//       const catImage = document.createElement("img");
//       catImage.src = catData.url;
//       catImage.alt = catData.name;
//       catImage.style.width = "50%";
//       catImage.style.height = "auto";

//       catImage.style.maxHeight = '300px';
//       catImage.style.width = 'auto';
//       catImage.style.border = '5px double gray';
//       catImage.style.flex = "1";

//       catImage.loading = "lazy";

//       const textInfoContainer = document.createElement("div");
//       textInfoContainer.style.flex = "2";  
//       textInfoContainer.style.display = "flex";
//       textInfoContainer.style.flexDirection = "column";
//       textInfoContainer.style.alignItems = "flex-start";

//       const catName = document.createElement("h2");
//       catName.textContent = catData.breeds[0].name;
//       catName.style.margin = "0";

//       const catDescription = document.createElement("p");
//       catDescription.textContent = `Description: ${catData.breeds[0].description}`;

//       const catTemperament = document.createElement("p");
//       catTemperament.textContent = `Temperament: ${catData.breeds[0].temperament}`;

//       textInfoContainer.appendChild(catName);
//       textInfoContainer.appendChild(catDescription);
//       textInfoContainer.appendChild(catTemperament);

//       catInfoWrapper.appendChild(textInfoContainer);
//       catInfoWrapper.appendChild(catImage);
//       catInfoContainer.appendChild(catInfoWrapper);

//       loader.hidden = true;
//     })
//     .catch(error => {
//       console.error("Ошибка при загрузке информации о кошке:", error);
//       error.hidden = false;
//       loader.hidden = true;
//     });
//   }
// });

// fetchBreeds(breedSelect);
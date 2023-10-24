import axios from 'axios';
import Notiflix from 'notiflix'; 
const BASE_URL = 'https://api.thecatapi.com/v1';

const selectEl = document.querySelector('.breed-select');

export async function fetchBreeds(breedSelect, onSuccess, onError) {
  
    axios.get(`${BASE_URL}/breeds`)
      .then(response => {
        const data = response.data;
  
        data.forEach(breed => {
          const option = document.createElement("option");
          option.value = breed.id; 
          option.text = breed.name;
          breedSelect.appendChild(option);

          selectEl.classList.remove("is-hidden");
        });
  
        if (onSuccess) {
          onSuccess();
        }
      })
      .catch(err => {
        Notiflix.Notify.failure('Oops! Something went wrong. Please try again.'); 
        
  
        if (onError) {
          onError();
        }
      });
  }

export async function fetchCatByBreed(breedId) {
  // Notiflix.Loading.standard('Loading cat info, please wait...'); 

  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}&include_breeds=true`)
    .then(response => {
      console.log(response.data);  
      return response.data[0];
  })
     
    .then(catData => {
      Notiflix.Loading.remove(); 
      return catData;
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops! Something went wrong. Please try again.'); 
      Notiflix.Loading.remove();
      throw error;
    });
}
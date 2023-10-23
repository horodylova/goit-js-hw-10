import axios from 'axios';
import Notiflix from 'notiflix'; 
import { BASE_URL } from './index';

const error = document.querySelector('.error');
const loader = document.querySelector('.loader');

loader.hidden = true;
error.hidden = true;

export async function fetchBreeds(breedSelect, onSuccess, onError) {
  Notiflix.Loading.standard('Loading breeds, please wait...'); 
  
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
        Notiflix.Notify.failure('Oops! Something went wrong. Please try again.'); 
        
  
        if (onError) {
          onError();
        }
        Notiflix.Notify.failure('Oops! Something went wrong. Please try again.'); 
      });
  }

export async function fetchCatByBreed(breedId) {
  Notiflix.Loading.standard('Loading cat info, please wait...'); 

  const BASE_URL = 'https://api.thecatapi.com/v1';

  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}&include_breeds=true`)
    .then(response => response.data[0])
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
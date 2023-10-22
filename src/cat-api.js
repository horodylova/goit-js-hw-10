import axios from 'axios';
import { BASE_URL } from './index'

export async function fetchBreeds(breedSelect, onSuccess, onError) {

  
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

export async function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1';

  try {
        const response = await axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`);
        return response.data[0];
    } catch (error) {
        console.error("Ошибка при загрузке информации о котах:", error);
        throw error;
    }
}
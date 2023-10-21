import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_Tw25qqZGTgRzQUEFXOfLqmslZZwx9HXbjDePGI0ZChRJtxUAscxAhnVEo8KUClDE";


import PLoader from 'ploader';
const loader = new PLoader({
    container: "loader-container",
  });
  
const breedSelect = document.querySelector("breed-select");
breedSelect.id = "breedSelect";

// fetchBreeds(){
//     fetch(`https://api.example.com/data?option=${selectedValue}`)
//     .then(response => response.json())
//     .then(data => {
//       const resultElement = document.getElementById("result");
//       resultElement.innerHTML = `Выбранная опция: ${selectedValue}, Результат: ${data.result}`;
//     })
//     .catch(error => {
//       console.error("Ошибка при выполнении запроса:", error);
//     });
//     });
// }



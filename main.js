import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'


function getMovie1(movieID) {
  axios.get(`${BASE_URL}${movieID}?${API_KEY}`)
  .then(response => movie1.textContent = "ok")
  .catch(error => console.error(error))
}

/* 453395 */
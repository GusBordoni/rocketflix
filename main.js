const API_KEY = 'api_key=6deb0d8ac5e8817e9d9d7b6c5127e97b';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=pt-BR';


function getMovie(movieID) {
  axios.get(`${BASE_URL}${movieID}?${API_KEY}`)
  .then(response => movie1.textContent = response.data.original_title)
  .catch(error => console.error(error))
}

function wtfBro() {
  console.log('wtffff')
}

/* 453395 */
const API_KEY = 'api_key=6deb0d8ac5e8817e9d9d7b6c5127e97b';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=pt-BR';


function getPopularMovie() {
  const randomPage = Math.floor(Math.random() * 500);
  const randomItem = Math.floor(Math.random() * 20);
  axios.get(`${BASE_URL}popular?${API_KEY}&${language}&page=${randomPage}`)
  .then(response => {
    moviePoster.src = IMG_URL+response.data.results[randomItem].poster_path
    movieTitle.textContent = response.data.results[randomItem].title
    movieDesc.textContent = response.data.results[randomItem].overview
  })
  .catch(error => console.error(error))
}

/* tmdb key v3
6deb0d8ac5e8817e9d9d7b6c5127e97b */
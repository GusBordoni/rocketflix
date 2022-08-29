const API_KEY = 'api_key=6deb0d8ac5e8817e9d9d7b6c5127e97b';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=pt-BR';
var movieID;

async function getRandomMovie() {
try {
  const randomPage = Math.floor(Math.random() * 499 + 1);
  const randomItem = Math.floor(Math.random() * 20);
  const genreList = [];
  const buyList = [];
  const rentList = [];

  const moviesPage = await axios.get(`${BASE_URL}popular?${API_KEY}&${language}&page=${randomPage}`)
  const movieID = await moviesPage.data.results[randomItem].id
  const movieDetails = await axios.get(`${BASE_URL}${movieID}?${API_KEY}&${language}`)
  const movieAvailability = await axios.get(`${BASE_URL}${movieID}/watch/providers?${API_KEY}`)

  const mLink = 'https://www.themoviedb.org/movie/' + movieDetails.data.id

/*   console.log(movieDetails.data.id)
  console.log(movieDetails.data) */
  /* console.log(movieAvailability.data.results.BR.buy)
  console.log(movieAvailability.data.results.BR.rent) */

  for(i = 0; i < movieAvailability.data.results.BR.flatrate[0].length; i++){
    buyList.push(movieAvailability.data.results.BR.flatrate[0].provider_name)
  }
  console.log(movieAvailability.data.results.BR.flatrate[0].provider_name)
// aquiiiiiiiiiiiiiiiiiiiiii
  moviePoster.style.display = 'flex'
  moviePoster.src = IMG_URL+movieDetails.data.poster_path
  movieTitle.innerHTML = `<a href="${mLink}" target="_blank" class="titleLink"> ${movieDetails.data.title} (${movieDetails.data.release_date.slice(0,4)})</a>`

  for(i = 0; i < movieDetails.data.genres.length; i++){
    genreList.push(movieDetails.data.genres[i].name)
  }
  movieGenre.textContent = genreList.join(' • ')

  if(movieDetails.data.vote_average != 0) {
    movieRating.textContent = 'NOTA TMDB: ' + movieDetails.data.vote_average.toFixed(1)  
  } else {
    movieRating.textContent = '(Não há votos suficientes para exibir uma nota para o filme.)'
  }

  if(movieDetails.data.overview != "") {
    movieDesc.textContent = movieDetails.data.overview  
  } else {
    movieDesc.innerHTML = `<p class="noDescText">Não há descrição do filme em português. Saiba mais em: <br/><a href="${mLink}" target="_blank" class="noDescLink">${movieDetails.data.title} - At The Movie Database <img class="noDescImg" src="./assets/new-window.svg"></a></p>`
  }

  if(movieDetails.data.runtime/60 < 1) {
    movieRuntime.textContent = 'Duração: ' + (movieDetails.data.runtime % 60) + 'min'
  } else {
    movieRuntime.textContent = 'Duração: ' + Math.floor(movieDetails.data.runtime / 60) + 'h' +  (movieDetails.data.runtime % 60) + 'min'
  }


} catch (error) {
  console.log(error)
}
}


/* tmdb key v3
6deb0d8ac5e8817e9d9d7b6c5127e97b */
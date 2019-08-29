//INFO GENERAL
const API_KEY = "e0b04ff59adaecdf17841706f387eba8";
let paginaActual = 1;
const body = document.getElementById(`body`);
//CONTAINER CATEGORIAS
const popular = document.getElementById('show-movies-popular');
const topRated = document.getElementById('show-movies-top-rated');
const upcoming = document.getElementById(`show-movies-upcoming`);
const nowPlaying = document.getElementById(`show-movies-now-playing`);
//SEARCH
const search = document.getElementById(`search`);

//BANNER
const bannerSection = document.getElementById(`banner`);
let bannerTitle = document.getElementById(`title-banner`);
// ASIDE
const buttonPopular = document.getElementById(`category-popular`);
const buttonTopRated = document.getElementById(`category-top-rated`);
const buttonUpcoming = document.getElementById(`category-upcoming`);
const buttonNowPlaying = document.getElementById(`category-now-playing`);
const menuAside = document.getElementById(`lista-categorias`);
const clickActual = null;
const buttonLogo = document.getElementById(`img-logo`);
//MAIN DE TODAS LAS PELICULAS POR CATEGORIA
const allMoviesContainer = document.getElementById(`container-movies`);
const bodyDown = document.getElementsByClassName(`section-down`)[0];
const buttonLoadMore = document.getElementById(`load-more`);
const sectionAllMovies = document.getElementById(`allmovies-for-category`);
const titleCategory = document.getElementById(`title-category`);
let peliculas = allMoviesContainer.children[0];
const numbersMovie = document.getElementById(`numbers-movies`);
//VIEW ALL
const viewAll = document.getElementsByClassName(`section`); 
// MODAL
let movieTitle = document.getElementById(`movie-title-text`);
let movieProfile = document.getElementById(`movie-profile`);
let movieGenre = document.getElementById(`movie-details-genre-text`);
let movieDate = document.getElementById(`movie-details-date-text`);
let moviePoster = document.getElementById(`movie-poster-background`);
let movieOverview = document.getElementById(`movie-overview`);
const modalBackground = document.getElementsByClassName(`fondo-black-modal`)[0];
const modalBox = document.getElementsByClassName(`modal-box`)[0];
let movieTagline = document.getElementById(`movie-tagline`);
const movieClose = document.getElementById(`modal-button-close`);

//TRAER LAS CINCO PELIS POR CADA PELICULA
const updateCategory = (url, container) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let peliculas = container.children[0];
        container.innerHTML = "";
        const seleccionadas = data.results.slice(0, 5);
        for(const sel of seleccionadas){
            let nuevaPelicula = peliculas.cloneNode(true);
            nuevaPelicula.children[0].src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${sel.poster_path}`;
            nuevaPelicula.children[1].innerHTML = sel.title;
            container.appendChild(nuevaPelicula);
            nuevaPelicula.onclick = () =>{
                modalBackground.classList.remove(`ocultar`);
                modalBox.classList.remove(`ocultar`);
                showModal(sel.id);
            }
        }
    })
}
updateCategory(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, popular);
updateCategory(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`, topRated);
updateCategory(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`, upcoming);
updateCategory(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`, nowPlaying);

//TRAER TODAS LAS PELICULAS POR CATEGORIA
//menuAside 0 = logo; 1 = popular; 2 = top rated; 3 =upcoming; 4 = now playing

const getInfo = (category, title) => {
    paginaActual = 1;
    allMoviesContainer.innerHTML = "";
    sectionAllMovies.classList.remove(`ocultar`);
    bannerSection.classList.add(`ocultar`);
    bodyDown.classList.add(`ocultar`);
    getNumberMovies(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&page=${paginaActual}`);
    allMovies(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&page=${paginaActual}`, title);
    buttonLoadMore.onclick = () =>{
        paginaActual++;
        allMovies(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&page=${paginaActual}`, title)
    }

}
//POPULAR
buttonPopular.onclick = () =>{
    buttonTopRated.style.backgroundColor = `white`;
    buttonUpcoming.style.backgroundColor = `white`;
    buttonNowPlaying.style.backgroundColor = `white`;
    getInfo("popular", "Popular Movies");
    buttonPopular.style.backgroundColor = `whitesmoke`;
}
viewAll[0].children[1].onclick = () => {
    buttonTopRated.style.backgroundColor = `white`;
    buttonUpcoming.style.backgroundColor = `white`;
    buttonNowPlaying.style.backgroundColor = `white`;
    getInfo("popular", "Popular Movies");
    buttonPopular.style.backgroundColor = `whitesmoke`;
}
//TOP RATED MOVIES
buttonTopRated.onclick = () =>{
    buttonPopular.style.backgroundColor = `white`;
    buttonUpcoming.style.backgroundColor = `white`;
    buttonNowPlaying.style.backgroundColor = `white`;
    getInfo("top_rated", "Top Rated Movies");
    buttonTopRated.style.backgroundColor = `whitesmoke`;
}
viewAll[1].children[1].onclick = () => {
    buttonPopular.style.backgroundColor = `white`;
    buttonUpcoming.style.backgroundColor = `white`;
    buttonNowPlaying.style.backgroundColor = `white`;
    getInfo("top_rated", "Top Rated Movies");
    buttonTopRated.style.backgroundColor = `whitesmoke`;
}
//UPCOMING MOVIES
buttonUpcoming.onclick = () =>{
    buttonPopular.style.backgroundColor = `white`;
    buttonTopRated.style.backgroundColor = `white`;
    buttonNowPlaying.style.backgroundColor = `white`;
    getInfo("upcoming", "Upcoming Movies");
    buttonUpcoming.style.backgroundColor = `whitesmoke`;
}
viewAll[2].children[1].onclick = () => {
    buttonPopular.style.backgroundColor = `white`;
    buttonTopRated.style.backgroundColor = `white`;
    buttonNowPlaying.style.backgroundColor = `white`;
    getInfo("upcoming", "Upcoming Movies");
    buttonUpcoming.style.backgroundColor = `whitesmoke`;
}
//NOW PLAYING MOVIES 
buttonNowPlaying.onclick = () =>{
    buttonPopular.style.backgroundColor = `white`;
    buttonTopRated.style.backgroundColor = `white`;
    buttonUpcoming.style.backgroundColor = `white`;
    getInfo("now_playing", "Now Playing Movies");
    buttonNowPlaying.style.backgroundColor = `whitesmoke`;
}
viewAll[3].children[1].onclick = () => {
    buttonPopular.style.backgroundColor = `white`;
    buttonTopRated.style.backgroundColor = `white`;
    buttonUpcoming.style.backgroundColor = `white`;
    getInfo("now_playing", "Now Playing Movies");
    buttonNowPlaying.style.backgroundColor = `whitesmoke`;
}

//OBTENER NUMERO DE RESULTADOS DE PELICULAS POR CATEGORÍA
const getNumberMovies = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {     
        numbersMovie.innerText = `${data.total_results.toLocaleString()} results`;
    })
}
//UNICA FUNCION PARA TRAER TODAS LAS PELICULAS DEPENDIENDO LA URL(CATEOGRIA)
const allMovies = (url, title) =>{
    fetch(url)
    .then(response => response.json())
    .then(data => {
        
        const seleccionadas = data.results.slice(0, 20);
        titleCategory.innerText = title;
        for(const sel of seleccionadas){
            let nuevaPelicula = peliculas.cloneNode(true);
            if(sel.poster_path != null){
                nuevaPelicula.children[0].src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${sel.poster_path}`;
                
            } else{
                nuevaPelicula.children[0].src = "../imagenes/no-image.png";
            }
            nuevaPelicula.children[1].innerHTML = sel.title;
            allMoviesContainer.appendChild(nuevaPelicula);
            nuevaPelicula.onclick = () =>{
                modalBackground.classList.remove(`ocultar`);
                modalBox.classList.remove(`ocultar`);
                showModal(sel.id);
            }
        }
        buttonLoadMore.innerText = "LOAD MORE";
        
    }
    )
}
//INFO PELICULA BUSCADA POR PALABRA CLAVE
const searchKeyWord = (url, title) => {
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        titleCategory.innerText = title;
        let seleccionadas = data.results.slice(0, 20);
        
        if(data.results.length >= 1){ 
        for(const sel of seleccionadas){
            let nuevaPelicula = peliculas.cloneNode(true);
            if(sel.poster_path != null){
                nuevaPelicula.children[0].src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${sel.poster_path}`;
            } else {
                nuevaPelicula.children[0].src = "../imagenes/no-image.png";
            }
            
            nuevaPelicula.children[1].innerHTML = sel.title;
            allMoviesContainer.appendChild(nuevaPelicula);
            nuevaPelicula.onclick = () =>{
                modalBackground.classList.remove(`ocultar`);
                modalBox.classList.remove(`ocultar`);
                showModal(sel.id);
            }
        }
        buttonLoadMore.innerText = "LOAD MORE";
        sectionAllMovies.appendChild(buttonLoadMore);
     } else{
        bannerTitle.innerText = `Nothing Found`;
        sectionAllMovies.classList.add(`ocultar`);
        bannerTitle.style.fontSize = `30px`;
        bannerTitle.style.fontFamily = `"Roboto", sans-serif`;
        bannerTitle.style.fontWeight = `500`;
        bannerSection.style.height = `740px`;

    }
    })
}
search.onkeypress = event => {
   
    if(event.keyCode === 13){
       
        if(search.value){ 
            bodyDown.classList.add(`ocultar`);
            paginaActual = 1;
            allMoviesContainer.innerHTML = "";
            sectionAllMovies.classList.remove(`ocultar`)
            getNumberMovies(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search.value}&page=${paginaActual}`);
            
            searchKeyWord(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search.value}&page=${paginaActual}`, "Search Results")
            buttonLoadMore.onclick = () =>{
                paginaActual++;
                allMovies(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search.value}&page=${paginaActual}`, "Search Results")
            }
        } 
    } 
}
//MODAL
const showModal = peliculaId => {
    fetch(`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data =>{    
        movieGenre.innerText = "";
        movieTitle.innerText = data.title;
        for(let i = 0; i < data.genres.length; i++){
            if(data.genres.length > 1){
                movieGenre.innerText += ` ${data.genres[i].name}, `;
            } else {
                movieGenre.innerText += data.genres[i].name;
            }
        }
        
        movieTagline.innerText = data.tagline;
        movieDate.innerText = data.release_date;
        movieProfile.src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.poster_path}`;        
        moviePoster.style = `background-image: url("https://image.tmdb.org/t/p/w500${data.backdrop_path}")`;
        movieOverview.innerText = data.overview;
        document.body.style.overflow = 'hidden';
        movieClose.onclick = () =>{
            modalBackground.classList.add(`ocultar`);
            modalBox.classList.add(`ocultar`);
            document.body.style.overflow = 'auto';
        }
        modalBackground.onclick = () =>{
            modalBackground.classList.add(`ocultar`);
            modalBox.classList.add(`ocultar`);
            document.body.style.overflow = 'auto';
        }
    })
}
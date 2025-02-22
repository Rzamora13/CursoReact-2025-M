const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL
const VITE_BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL


//onjeto que me permite decidir el tamaño de las imagenes
export const IMAGES_SIZES = {
    POSTER: "w500",
    BACKDROP: "original",
}

//---------- FUNCIONES QUE VOY A CREAR PARA LA API ----------\\
// Función para ontener la url de una imagen
// Le paso un path : /alfkasd
export const getImageUrl = (path, size = IMAGES_SIZES.POSTER) => {
    if(!path) return "/placeholder-movie.jpg"
    return `${VITE_BASE_IMAGE_URL}/${size}${path}`;
}

const fetchFromAPI = async (endpoint, language, options = {}) => {
    try {
        const response = await fetch(`${VITE_BASE_URL}${endpoint}?api_key=${VITE_API_TOKEN}&language=${language}&${new URLSearchParams(options)}`);
        if(!response.ok){
            throw new Error("Error en la petición");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return error;
    }
}

// Función para obtener las peliculas populares
export const getPopularMovies = async (language= 'es-ES', page = 1) => {
    return fetchFromAPI("/movie/popular", language, { page });
}

// Detalles de las películas

export const getMovieDetails = async (language= 'es-ES', id) => {
    return fetchFromAPI(`/movie/${id}`, language);
}

// Busqueda de una película por un query de busqueda
export const searchMovies = async(language= 'es-ES', query, page = 1) => {
    return fetchFromAPI("/search/movie", language, { query, page });
}

// Obtener videos de una película
export const getMovieVideos = async (language= 'es-ES', id) => {
    return fetchFromAPI(`/movie/${id}/videos`, language);
}

// Obtener todos los generos de peliculas
export const getGenres = async (language= 'es-ES') =>  {
    return fetchFromAPI('/genre/movie/list', language);
}

// Busqueda de películas con filtros
export const getMovieFilters = async (language= 'es-ES', filters = {}) => {
    const { genre, year, rating, page } = filters
    const options = {
        sort_by: 'popularity.desc',
        page,
        with_genres: genre,
        primary_release_year: year,
        'vote_average.gte': rating,
    }
    return fetchFromAPI('/discover/movie', language, options);
}

// Obtener idiomas disponibles
export const getLanguages = async (language= 'es-ES') => {
    return fetchFromAPI('/configuration/languages', language);
}
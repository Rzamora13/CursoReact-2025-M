import { useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard';
import { useFetch } from '../hooks/useFetch';
import { getGenres, getMovieFilters } from '../services/tmdb';
import LoadingSpinner from '../components/LoadingSpinner';
import { useLanguage } from '../context/LanguageContext'

const MovieList = () => {
    const { language } = useLanguage()
    // Estado para el número de página
    const [page, setPage] = useState(1);
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('')
    const [rating, setRating] = useState('')

    // Me traigo la data de las películas
    const { data: dataGenre } = useFetch(() => getGenres(language), [language]);
    const { data, loading, error } = useFetch(() => getMovieFilters(language, {genre, year, rating, page}), [language, genre, year, rating, page])
    // Que pasa con el scroll
    const handlePageChange = (newPage) => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        setPage(newPage);
    }
    // Si hay error cargando????
    if(error){
        return  (
            <div className='text-center p-10'>
               <h2 className='text-red-600 text-2xl font-bold'>Error al traer las películas</h2> 
                <p className='text-2xl font-medium'>{error.message}</p>
                <Link to='/' className='text-blue-600'>Volver al inicio</Link>
            </div>
        )
    }

  return (
    <div className='space-y-8'>
        <form className='text-center bg-white p-5 rounded-lg shadow-md'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div>
                        <label className='block text-gray-700 font-bold mb-2'>Género</label>
                        <select className='w-full border rounded-lg px-3 py-2' onChange={(e) => setGenre(e.target.value)}>
                            <option value=''>Todos</option>
                            {dataGenre?.genres.map((genre) => (
                                <option key={genre.id} value={genre.id}>{genre.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className='block text-gray-700 font-bold mb-2'>Año</label>
                        <select className='w-full border rounded-lg px-3 py-2' onChange={(e) => setYear(e.target.value)}>
                            <option value=''>Todos</option>
                            {Array.from(new Array(50), (v, i) => new Date().getFullYear() - i).map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className='block text-gray-700 font-bold mb-2'>Valoración</label>
                        <select className='w-full border rounded-lg px-3 py-2' onChange={(e) => setRating(e.target.value)}>
                            <option value=''>Todas</option>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                                <option key={rating} value={rating}>{rating}⭐</option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
        {/* Sección de peliculas*/}
        <section>
            <h2 className='text-2xl font-bold text-sky-950 mb-10'>Películas</h2>
            {loading ? (<LoadingSpinner />) : 
            <>
             {/* Grid de las películas */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                    {data?.results.map((movie) => (
                        // Aqui va el componente MovieCard
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
                {/* Paginación */}
                <div className='flex justify-center mt-8 gap-2'>
                    <button onClick={() => handlePageChange(page-1)} disabled={page === 1} className='px-4 py-2 rounded-lg transition-colors duration-200 bg-sky-800 hover:bg-sky-950'>Anterior</button>
                    <span></span>
                    <button onClick={() => handlePageChange(page+1)} disabled={page === data?.total_pages} className='px-4 py-2 rounded-lg transition-colors duration-200 bg-sky-800 hover:bg-sky-950'>Siguiente</button>
                </div>
            </>}
        </section>
        {console.log(data)}
    </div>
  )
}

export default MovieList
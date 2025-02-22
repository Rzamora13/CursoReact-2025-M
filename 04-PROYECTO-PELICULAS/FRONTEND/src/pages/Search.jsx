import { useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard';
import { useFetch } from '../hooks/useFetch';
import { searchMovies } from '../services/tmdb';
import LoadingSpinner from '../components/LoadingSpinner';
import { useLanguage } from '../context/LanguageContext'

const Search = () => {
    const { language } = useLanguage()
    // Estado para el número de página
    const [page, setPage] = useState(1);
    // Estado para la query de búsqueda
    const [query, setQuery] = useState('');

    // Me traigo la data de las películas
    const {data, loading, error} = useFetch(() => searchMovies(language, query, page), [language, query, page]);
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
        <header className='text-right'>
         <input  className='border rounded-xl px-3 py-1' type='text' name='search' placeholder='Buscar pelicula...' onChange={(e) => setQuery(e.target.value)}/> 🔍
        </header>
        {/* Sección de peliculas populares*/}
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

export default Search
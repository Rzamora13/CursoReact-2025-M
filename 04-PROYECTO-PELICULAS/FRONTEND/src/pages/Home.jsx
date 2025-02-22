import { useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard';
import { useFetch } from '../hooks/useFetch';
import { getPopularMovies } from '../services/tmdb';
import LoadingSpinner from '../components/LoadingSpinner';
import { useLanguage } from '../context/LanguageContext'

const Home = () => {
    const { language } = useLanguage()
    // Estado para el número de página
    const [page, setPage] = useState(1);

    // Me traigo la data de las películas
    const {data, loading, error} = useFetch(() => getPopularMovies(language, page), [language, page]);
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
        <header className='text-center'>
            <h1 className='text-4xl font-bold text-sky-950'>Bienvenido al VideoClub</h1>
            <p className='text-lg font-medium mt-2 text-sky-900'>Descubre las películas más populares del momento</p>
        </header>
        {/* Sección de peliculas populares*/}
        <section>
            <h2 className='text-2xl font-bold text-sky-950 mb-10'>Películas populares</h2>
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
    </div>
  )
}

export default Home
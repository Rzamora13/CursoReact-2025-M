import { Link } from 'react-router-dom'
import { getImageUrl } from '../services/tmdb'
import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext'
import { useToast } from '../context/ToastContext';


const MovieCard = ({ movie }) => {
  const { favorites, addFavorites, deleteFavorites } = useContext(FavoritesContext)
  const { showToast } = useToast()
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
  const isFavorite = favorites.some((favorite) => favorite.id === movie.id)
  const handleFavoriteChange = (e) => {
    e.preventDefault()
    isFavorite ? (deleteFavorites(movie.id), showToast('Pelicula eliminada de favoritos 💔', 'error')) : (addFavorites(movie), showToast('Pelicula añadida a favoritos ❤'))
    e.target.reset()
  }
  
  return (
    <Link to={`/movies/${movie.id}`} className='bg-sky-800'>
      <article className='card transform transition-transform duration-300 hover:scale-105'>
        <div className='relative aspect-[2/3]'>
          <img src={getImageUrl(movie.poster_path)} alt={movie.title} className='object-cover w-full h-full rounded-lg shadow-lg' />
          <button className='absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-2 rounded' onClick={handleFavoriteChange} >{isFavorite ? '❤' : '🖤'}</button>
          <div className='absolute top-2 right-2 bg-black bg-opacity-50 text-white py-1 px-2 rounded'>⭐ {rating}</div>
        </div>
        <div className='p-4'>
          <h3 className='font-bold text-lg line-clamp-2 text-white'>{movie.title}</h3>
          <p className='text-sm text-gray-300'>{movie.release_date}</p>
        </div>
      </article>
    </Link>
  )
}

export default MovieCard
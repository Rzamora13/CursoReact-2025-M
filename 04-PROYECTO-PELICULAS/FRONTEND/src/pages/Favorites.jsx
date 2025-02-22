import { useContext } from "react"
import { FavoritesContext } from '../context/FavoritesContext'
import MovieCard from "../components/MovieCard"

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
      {favorites?.map((favorite) => (
          // Aqui va el componente MovieCard
          <MovieCard key={favorite.id} movie={favorite} />
      ))}
    </div>
  )
}

export default Favorites

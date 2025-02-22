import { Link } from 'react-router-dom';
import { usePokemon } from '../context/PokemonContext';
import { ROUTES } from '../routes/paths';

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = usePokemon();

  if(favorites.length === 0){
    return (
      <div className='text-center mt-8'>
        <h1 className='text-3xl font-bold mb-4'>Favoritos</h1>
        <p className=''>No tienes pokemons favoritos actualmente</p>
        <Link className='text-blue-800 hover:underline block mt-4' to={ROUTES.HOME}>Volver a la pagina de inicio</Link>
      </div>
    )
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3cl font-bold mb-6'>Tus Pokemons favoritos</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {favorites.map(pokemon => (
          <div key={pokemon.id} className='border rounded-lg p-4 shadow-amber-200 shadow-lg'>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}
            className='w-32 h-32 mx-auto' />
            <h2 className='text-xl font-semibold text-center capitalize mt-2'>{pokemon.name}</h2>
            <div className='mt-4 space-y-2'>
              <Link to={`/pokemon/${pokemon.name}`} className='block w-ful text-center bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-800'>Ver detalles</Link>
              <button onClick={() => removeFromFavorites(pokemon.id)} className='w-full text-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800'>Eliminar Favoritos</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoritesPage
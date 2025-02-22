import { useLoaderData, useNavigate } from "react-router-dom"
import { usePokemon } from "../context/PokemonContext";

const PokemonDetailPage = () => {
  const pokemon = useLoaderData();
  const navigate = useNavigate();
  const {addToFavorites} = usePokemon();

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <button className="mb-4 text-blue-800 hover:underline"
          onClick={()=> navigate(-1)}
          >
            Volver
          </button>
          <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}  
          className="w-48 h-48 mx-auto"/>
          <h1 className="text-3xl font-bold text-center capitalize mb-4">{pokemon.name}</h1>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
            <h2 className="text-xl text-amber-600 font-semibold mb-2">Estadisticas</h2>
            {pokemon.stats.map(stat => (
              <div key={stat.stat.name}>
                <span className=" font-semibold capitalize">{stat.stat.name}:{stat.base_stat}</span>
                
              </div>
            ))}
        </div>
        <div>
          <h2 className="text-xl text-amber-600 font-semibold mb-2">Tipos</h2>
            {pokemon.types.map((type) => (
              <span key={type.type.name}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                {type.type.name}</span>
            ))}
      </div>
      <button className="mt-4 bg-amber-400 hover:bg-amber-700  text-white rounded-sm w-32" onClick={()=>addToFavorites(pokemon)}>Añadir a favoritos</button>
        </div>
      </div>
      </div>
  )
}

export default PokemonDetailPage
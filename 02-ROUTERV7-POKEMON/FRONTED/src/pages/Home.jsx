import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { usePokemon } from '../context/PokemonContext'
import Spinner from "../components/Spinner"


const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {addToFavorites} = usePokemon()
  useEffect(() => {
    fetchPokemons();
  }, [])

  const fetchPokemons = async () => {
    try{
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json()

      //Ahora obtengamos la data de todos los pokemons paralelo
      const pokemonsDetails = await Promise.all(
        data.results.map (async (pokemon) => {
          const repon = await fetch (pokemon.url)
          if (!repon.ok) {
            throw new Error("Something went wrong fetching details")
          }
          return await repon.json()
        }))

        //seteo en el estado los pokemonsDetails
        setPokemons(pokemonsDetails)

    }catch(error){
      console.log("Error fetching pokemons", error)
    }finally{
      setIsLoading(false)
    }
  }

  if(isLoading) {
    return <div className="flex justify-center items-center h-screen"><Spinner /></div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pokemons disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {
        pokemons.map((pokemon) => (
          <div key={pokemon.id} className="bg-white shadow-md rounded-md p-6">
            <div className="relative group">
              <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="w-32 h-32 mx-auto transform group-hover:scale-120 transition-transform " />
            </div>
            <h2 className="text-xl font-semibold text-center capitalize mt-2">
              {pokemon.name}
            </h2>
            <div className="flex justify-center space-x-2 mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800"
              onClick={() => addToFavorites(pokemon)}
              >
                Añadir a favoritos
              </button>
              <Link to={`/search/${pokemon.name}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800">
                Ver detalles 
              </Link>
            </div>
          </div>
        ))
       }
      </div>
    </div>
  )
}
export default Home
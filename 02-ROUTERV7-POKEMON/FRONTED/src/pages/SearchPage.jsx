import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const SearchPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault() 

    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLocaleLowerCase()}`)
      if(!response.ok){
        throw new Error("Pokemon no encontrado")
      }
      const data = await response.json()
      console.log(data)
      navigate(`/search/${search.toLocaleLowerCase()}`)
    }catch(error){
      toast.error('Pokemon no encontrado', {style:{background: "#fef2f2", border: "1px solid #ff", color: "#991b1b"}});
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Buscar pokemon</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-2">
          <input 
          type="text" 
          placeholder="Buscar pokemon" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
          />
          <button type='submit' className="bg-rose-300 text-white hover:bg-rose-200 px-4 py-2 rounded-lg">Buscar</button>
        </div>
      </form>
    </div>
  )
}

export default SearchPage
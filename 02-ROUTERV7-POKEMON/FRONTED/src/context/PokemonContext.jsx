import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "sonner";

const PokemonContext = createContext()

export function PokemonProvider({children}){
    const [favorites, setFavorites] = useState([])
    //añadir pokemons a favoritos.
    const addToFavorites = (pokemon) => {
        //Comprobar si el pokemon ya esta en favoritos
        if(favorites.some((p) => p?.id===pokemon.id)){
            //Pokemon repetido, mensaje de error
            toast.error(`El pokemon ${pokemon.name} ya está en favoritos`,{
                style:{
                    background: 'red',
                    color: 'white',
                    border: '1px solid black'
                },
                icon: '⭐'
            })
            return;
        }
        //Añadimos el pokemon a favoritos
        setFavorites((prevFavorites) => [...prevFavorites, pokemon]);
    }

    const removeFromFavorites = (pokemonId) => {
        setFavorites((prevFavorites) => prevFavorites.filter((p) => p?.id !== pokemonId));
        toast.info("Pokemon eliminado de favoritos", {style: {
            background: 'green',
            color: 'white',
            border: '1px solid black'
            },
            icon: '🗑'
        })
    }

    return (
        <PokemonContext.Provider value={{favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </PokemonContext.Provider>
    )

}

export const usePokemon = () => {
    const context = useContext(PokemonContext)
    if(context=== undefined){
        throw new Error('No se ha envolvento el componente en el contexto PokemonProvider')
    }
    return context
}
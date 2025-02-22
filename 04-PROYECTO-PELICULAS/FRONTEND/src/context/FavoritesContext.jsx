import {  createContext, useEffect, useState } from "react";

//Creamos el contexto
export const FavoritesContext = createContext();

//Creamos el provider del contexto
export const FavoritesProvider = ({ children }) => {
    //Utilizo useState para sacar los favoritos del localStorage
    const [favorites, setFavorites] = useState(() => {
        const saveFavorites = localStorage.getItem('favorites');
        return saveFavorites ? JSON.parse(saveFavorites) : [];
    })

    //Utilizo useEffect para guardar los favoritos en el localStorage
    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    //Acciones que puedo realizar con los favoritos
    const addFavorites = (favorite) => {
        setFavorites((prevFavorite) => [...prevFavorite, favorite])
    }

    const deleteFavorites = (favoriteId) => {
        setFavorites((prevFavorite) => prevFavorite.filter((favorite) => favorite.id !== favoriteId))
    }

    return (
        <FavoritesContext.Provider value={{favorites, addFavorites, deleteFavorites}}>
            {children}
        </FavoritesContext.Provider>
    )
    
}

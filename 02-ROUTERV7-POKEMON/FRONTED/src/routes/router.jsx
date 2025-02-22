import { createBrowserRouter } from 'react-router-dom';
import RoutLayout from '../layouts/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import { ROUTES } from '../routes/paths';
import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';
import FavoritesPage from '../pages/FavoritesPage';
import PokemonDetailPage from '../pages/PokemonDetailPage';
import AboutPage from '../pages/AboutPage';

export const router = createBrowserRouter([
    {
        element: <RoutLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home />,
            },
            {
                path: ROUTES.SEARCH,
                element: <SearchPage />,
            },
            {
                path: ROUTES.FAVORITES,
                element: <FavoritesPage />,
            },
            {
                path: ROUTES.POKEMON_DETAIL,
                element: <PokemonDetailPage />,
                errorElement: <ErrorPage />,
                loader: async ({params}) => {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
                    if(!response.ok){
                        throw new Error('Pokemon no encontrado');
                    }
                    return await response.json();
                }
            },
            {
                path: ROUTES.ABOUT,
                element: <AboutPage />,
            },
        ],
    },
]);
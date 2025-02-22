import { createBrowserRouter } from 'react-router-dom';
import Favorites from '../pages/Favorites';
import Reviews from '../pages/Reviews';
import Search from '../pages/Search';
import Home from '../pages/Home';
import MovieList from '../pages/MovieList';
import MovieDetail from '../pages/MovieDetail';
import ErrorPage from '../pages/ErrorPage';
import RootLayout from '../layouts/RootLayout';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'movies',
                element: <MovieList />,
            },
            {
                path: 'movies/:id',
                element: <MovieDetail />,
            },
            {
                path: 'search',
                element: <Search />,
            },
            {
                path: 'reviews',
                element: <Reviews />,
            },
            {
                path: 'favorites',
                element: <Favorites />,
            }
        ]
    }
])
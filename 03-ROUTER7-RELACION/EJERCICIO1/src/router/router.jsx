import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';
import RootLayout from '../layout/RootLayout';
import isAuthenticated from '../helpers/isAutheticated';

const ProtectedRoute = ({ children }) => {
    //Condiciones de autentificación
    if(!isAuthenticated()){
        return <Navigate to='/' replace={true} />;
    }
    return children;
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [{
            index: true,
            element: <Home />
        },
        {
            path: 'profile',
            element: (
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            )
        },
        {
            path: 'dashboard',
            element: (
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            )
        }]
    }
]);
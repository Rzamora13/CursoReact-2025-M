import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import AdminLayout from '../layout/AdminLayout';


export const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        chlidren:[
            {
                index: true,
                element: <Login />
            },
            {
                path: 'admin',
                element: (
                    <ProtectedRoute>
                        <AdminLayout />
                    </ProtectedRoute>
                ),
                children: [
                    {

                    }
                ]    
            }
        ]
    }
]);
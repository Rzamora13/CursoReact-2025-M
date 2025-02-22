import { Link, Outlet, useNavigate } from 'react-router-dom'
import isAutheticated from '../helpers/isAutheticated'

const RootLayout = () => {
    //Hook para moverme entre rutas
    const navigate = useNavigate();

    //Función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

  return (
    <div className='min-h-screen bg-gray-100'>
        <nav className='bg-white shadow-lg'>
          <div className='max-w-6xl mx-auto px-4'>
            <div className='flex justify-between items-center h-16'>
                <Link to='/' className='font-bold text-xl hover:text-gray-800'>Home</Link>
                <Link to='/profile' className='font-bold text-xl hover:text-gray-800'>Profile</Link>
                <Link to='/dashboard' className='font-bold text-xl hover:text-gray-800'>Dashboard</Link>
                {isAutheticated() && (
                    <button className='font-bold bg-red-500 hover:bg-red-800 text-white py-2 px-4 rounded' onClick={handleLogout}>
                        Cerrar sesión
                    </button>
                )}
            </div>
          </div>
        </nav>
        <main className='max-w-6xl mx-auto mt-8 px-4'>
            <Outlet />
        </main>
    </div>
    
  )
}

export default RootLayout
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout
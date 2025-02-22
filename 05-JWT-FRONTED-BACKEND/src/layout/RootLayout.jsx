import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <div className='min-screen bg-gray-100'>
            <Navbar />
            <main className='p-4'>
                <Outlet />
            </main>
        </div>
    </>
  )
}

export default RootLayout
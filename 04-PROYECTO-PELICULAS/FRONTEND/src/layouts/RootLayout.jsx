import { Outlet, NavLink } from 'react-router-dom'
import { getLanguages } from '../services/tmdb';
import { useFetch } from '../hooks/useFetch';
import { useLanguage } from '../context/LanguageContext'

const RootLayout = () => {
  const {language, changeLanguage } = useLanguage()
  const { data } = useFetch(() => getLanguages(language), [language]);
  return (
    <div className='min-h-screen bg-gray-100'>
      <nav className='bg-blue-900 text-white shadow-lg'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-between h-16 items-center'>
            <NavLink to='/' className='text-lg font-bold'>VideoClub</NavLink>
            <div className='flex space-x-4 ml-8'>
              <NavLink to='/movies' className='hover:text-amber-600'>Peliculas</NavLink>
              <NavLink to='/search' className='hover:text-amber-600'>Buscar</NavLink>
              <NavLink to='/reviews' className='hover:text-amber-600'>Reseñas</NavLink>
              <NavLink to='/favorites' className='hover:text-amber-600'>Favoritos</NavLink>
            </div>
            <select value={language} onChange={(e) => changeLanguage(e.target.value)} className='appearance-none border bg-blue-900  border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded'>
              {data?.map((lang) => (
                <option key={lang.iso_639_1} value={lang.iso_639_1}>{lang.english_name}</option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      <main className='max-w-7xl mx-auto px-4 py-6'>
        <Outlet />
      </main>
      
      <footer className='bg-sky-950 text-white text-center p-4'>
        <div className='max-w-7xl mx-auto px-4 mt-auto'>
          <p className='text-center'>VideoClub © 2025</p>
        </div>
      </footer>
    </div>
  )
}

export default RootLayout
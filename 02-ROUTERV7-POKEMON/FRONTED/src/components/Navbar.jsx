import { NavLink } from "react-router-dom"
import { ROUTES } from '../routes/paths';


const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg">
      <div className="container mx-auto p-4 justify-between flex items-center">
        <NavLink to={ROUTES.HOME} className="text-white text-2xl font-bold">POKEDEX</NavLink>
        <div className="space-x-4">
        <NavLink to={ROUTES.HOME} className={({isActive}) => `text-white text-2xl ${isActive ? 'font-bold hover:text-black' : ''}`}>Inicio</NavLink>
        <NavLink to={ROUTES.SEARCH} className={({isActive}) => `text-white text-2xl ${isActive ? 'font-bold hover:text-black' : ''}`}>Buscar</NavLink>
        <NavLink to={ROUTES.FAVORITES} className={({isActive}) => `text-white text-2xl ${isActive ? 'font-bold hover:text-black' : ''}`}>Favoritos</NavLink>
        <NavLink to={ROUTES.ABOUT} className={({isActive}) => `text-white text-2xl ${isActive ? 'font-bold hover:text-black' : ''}`}>About</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
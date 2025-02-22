import { useNavigate } from "react-router-dom"
import isAuthenticated from "../helpers/isAutheticated"

const Home = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    localStorage.setItem('token', '123')
    navigate('/dashboard')
  }

  return (
    <div className="text-center">
      {
        !isAuthenticated() ?  
        (
          <section>
            <h1 className="text-3xl font-bold mb-8">Bienvenido a ejercicio 1 de React Router Dom v7</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>
              Login
            </button>
          </section>
        ) : (
          <h1 className="text-3xl font-bold mb-8">Ya estas logueado</h1>
        )
      }
    </div>
  )
}

export default Home
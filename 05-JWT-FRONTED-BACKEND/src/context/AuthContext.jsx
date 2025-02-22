import { createContext, useState } from "react";

const url = import.meta.env.VITE_BACKEND_URL;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    //Funciones en mi contexto
    // login -> para iniciar sesión
    const login = async (username, password) => {
        try{
            const response = await fetch(`${VITE_BACKEND_URL}/auth/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
                credentials: 'include'
            });
            if(!response.ok){
                return {sucess:false, message: "Usuario o contraseña incorrectos"}
            }
            setIsAuthenticated(true)
            return {sucess:true, message: "Usuario logueado correctamente"}
        }catch(error){
            console.log("Error en login", error)
        }
    }
    // logout -> para cerrar sesión
    //checkAuth -> para verificar si el usuario está autentificado siempre que monte o renderice el componente
    // register -> para registrar un usuario
}
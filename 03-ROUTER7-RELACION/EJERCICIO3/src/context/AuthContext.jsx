import { useState } from "react";
import { useContext } from "react";
import { children } from "react";
import { createContext } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true)
        localStorage.setItem('isAuthenticated', true)
    };

    const logout = () => {
        setIsAuthenticated(false)
        localStorage.removeItem('isAuthenticated')
    };

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout} } >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('Error useAuth')
    }
    return context
}
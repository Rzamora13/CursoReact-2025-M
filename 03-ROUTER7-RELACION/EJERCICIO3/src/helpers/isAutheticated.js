const isAuthenticated = () => {
    //Vas al localStorage y verifica si está la clave token
    return localStorage.getItem('token') ? true : false;
}

export default isAuthenticated;
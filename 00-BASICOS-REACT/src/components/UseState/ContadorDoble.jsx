import { useState } from "react";
const ContadorDoble = () => {
    // ---------- espacio para hooks ----------
    const [friends, setfriends] = useState({Juan: 0, Pedro:0, Maria:0});
    const [promedio, setPromedio] = useState(0)

    // ---------- espacio para declarar funciones ----------
    function handlerClick(nombre, numero = 1){
        setfriends((prevFriends)=> {
            const updatedFriends = {
                ...prevFriends,
                [nombre]: prevFriends[nombre] === 0 && numero < 0 ? 0 : prevFriends[nombre] + numero,
            } 
            promedioAmigos(updatedFriends);
            return updatedFriends;
        });
    }

    const promedioAmigos = (updatedFriends) => {
        const numAmigosArray = Object.values(updatedFriends);
        const totalAmigos = numAmigosArray.reduce((acc, numAmigo)=> acc + numAmigo, 0);
        setPromedio(numAmigosArray.length > 0 ? totalAmigos / numAmigosArray.length : 0);
    }
    //Dudas por que hay que pasarle el updatedFriends a la funcion promedioAmigos

  return (
    <>
        <h1 className="text-2xl bg-cyan-600 text-center">Contador de amigos</h1>
        <div className="text-center mt-2">
            <span className="mb-5">
                Juan tiene <strongs> {friends.Juan} </strongs> amigos
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
            onClick={()=>handlerClick("Juan")}>
                Incrementar
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
            onClick={()=>handlerClick("Juan", -1)}>
                Decrementar
            </button>
        </div>
        <div className="text-center mt-2">
            <span className="mb-5">
                Pedro tiene <strongs> {friends.Pedro} </strongs> amigos
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
            onClick={()=>handlerClick("Pedro")}>
                Incrementar
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
            onClick={()=>handlerClick("Pedro", -1)}>
                Decrementar
            </button>
        </div>
        <div className="text-center mt-2">
            <span className="mb-5">
                Maria tiene <strongs> {friends.Maria} </strongs> amigos
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
            onClick={()=>handlerClick("Maria")}>
                Incrementar
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
            onClick={()=>handlerClick("Maria", -1)}>
                Decrementar
            </button>
        </div>

        <div className="text-center mt-10">
            <span className="mb-5">{promedio}</span>
        </div>
    </>
  )
}

export default ContadorDoble
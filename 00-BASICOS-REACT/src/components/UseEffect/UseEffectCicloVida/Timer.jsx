import { useEffect, useState } from 'react'

const Timer = () => {
    const [counter, setCounter] = useState(0)
    // useEffect(() => {
    //     // NUNCA utilizar funciones ASYNC/AWAIT dentro de useEffect
    //     console.log("Componente montado");
    //     // Si no le paso array de dependencias se ejecuta cada vez que se renderiza
    // })

    // useEffect(() => {
    //     console.log("Componente montado solo una vez");
    // }, [])

    useEffect(() => {
        console.log("Componente renderizado cada vez que se modifica algo del array de dependencias");
        
    }, [counter])
    
  return (
    <>  
        <h1>Timer</h1>
        <p>{counter}</p>
        <button onClick={()=>setCounter((prevCounter)=>prevCounter+1)}>Iniciar</button>
    </>
  )
}

export default Timer
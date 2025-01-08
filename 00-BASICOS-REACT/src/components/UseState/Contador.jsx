import { useState } from "react";

const Contador = () => {
    // ---------- espacio para hooks ----------
    const [total, setTotal] = useState(0)

    // ---------- espacio para declarar funciones ----------
    function handlerClick(numero = 1){
        setTotal(total + numero);
    }

  return (
    <>
        <h1>Contador en React</h1>
        <h2>{total}</h2>
        <button onClick={() => handlerClick()}>Incrementar</button>
        <button onClick={() =>handlerClick(-1)}>Decrementar</button>
    </>
  )
}

export default Contador
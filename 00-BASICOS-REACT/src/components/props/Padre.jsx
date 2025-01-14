
import { useState } from "react"
import Hijo from "./Hijo";

const Padre = () => {
const [counter, setCounter] = useState(0);

  return (
    <div>
        <h1>Hola soy tu padre</h1>
        <Hijo contador = {counter} setCounter= {setCounter}/>
    </div>
  )
}

export default Padre
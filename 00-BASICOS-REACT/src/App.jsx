import Contador from "./components/UseState/Contador"
import ContadorDoble from "./components/UseState/ContadorDoble"
import ContinuacionNumeros from "./components/UseState/ContinuacionNumeros"

const App = () => {
  return (
    <>
      <div className="text-3xl font-bold underline">Hola Mundo</div>
      <Contador />
      <hr className="mt-10"></hr>
      <ContadorDoble />
      <hr className="mt-10"></hr>
      <ContinuacionNumeros />
    </>
  )
}

export default App
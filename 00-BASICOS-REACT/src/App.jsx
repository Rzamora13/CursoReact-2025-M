import Contador from "./components/UseState/Contador"
import ContadorDoble from "./components/UseState/ContadorDoble"
import ContinuacionNumeros from "./components/UseState/ContinuacionNumeros"
import RegistrarFormulario from "./components/UseState/RegistrarFormulario"
import GuitarHero from "./components/UseState/GuitarHero"

const App = () => {
  return (
    <>
      <div className="text-3xl font-bold underline">Hola Mundo</div>
      <Contador />
      <hr className="mt-10"></hr>
      <ContadorDoble />
      <hr className="mt-10"></hr>
      <ContinuacionNumeros />
      <hr className="mt-10"></hr>
      <RegistrarFormulario />
      <hr className="mt-10"></hr>
      <GuitarHero />
    </>
  )
}

export default App
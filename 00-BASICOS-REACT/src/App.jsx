// import ContadorDoble from "./components/UseState/ContadorDoble"
// import ContinuacionNumeros from "./components/UseState/ContinuacionNumeros"
// import RegistrarFormulario from "./components/UseState/RegistrarFormulario"
// import GuitarHero from "./components/UseState/GuitarHero"
// import { useState } from "react"
// import Timer from "./components/UseEffect/UseEffectCicloVida/Timer"
import UsersPlaceHolder from "./components/UseEffect/UseEffectCicloVida/UsersPlaceHolder"

const App = () => {
  // const [contador, setContador] = useState(0)
  // const handleClick = () => {
  //   setContador((prevContador) => prevContador + 1)
  // }
  return (
    <>
      <div className="mx-auto bg-gray-200">
        <div className="text-3xl font-bold underline">Hola Mundo</div>
        {/* <Contador />
        <hr className="mt-10"></hr>
        <ContadorDoble />
        <hr className="mt-10"></hr>
        <ContinuacionNumeros />
        <hr className="mt-10"></hr>
        <RegistrarFormulario />
        <hr className="mt-10"></hr>
        <GuitarHero />
        <hr className="mt-10"></hr>
        <p>{Contador}</p>
        <Padre> /> */}
        <hr className="mt-10"></hr>
        {/* <Timer /> */}
        <UsersPlaceHolder />
      </div>
    </>
  )
}

export default App

// Se plantea un panel de administración (nueva carpeta UseEffect) va a tener los componentes: 
// navUser, main y esto lo va ha englobar un componente llamado gestUser, creamos una carpeta
// data/db.json que contenga 15 usuarios con los campos: username, email, password
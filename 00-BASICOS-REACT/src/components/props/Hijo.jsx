import Nieto from "./Nieto"

const Hijo = (props) => {
    const {contador, setCounter} = props;

    const handleClick = () => {
        setCounter((prevCounter) =>prevCounter + 1)
    }
  return (
    <div>
        <h1>Hola yo soy tu hijo</h1>
        <h2>El contador vale: {contador}</h2>
        <button 
            className="bg-slate-200 px-2 py-5 mb-5 mt-6 hover:bg-blue-200 rounded-md" 
            onClick={handleClick}>
                Aumentar el contador desde el hijo
        </button>
        <Nieto añadirUno = {handleClick}/>
    </div>
  )
}

export default Hijo
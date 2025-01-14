

const Nieto = (props) => {
    const {añadirUno} = props;
  return (
    <div>
        <button 
            className="bg-slate-200 px-2 py-5 mb-5 mt-6 hover:bg-blue-200 rounded-md" 
            onClick={añadirUno}> 
                Añade uno
        </button>
    </div>
  )
}

export default Nieto
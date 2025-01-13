import { useState } from 'react'
import CardGuitar from './CardGuitar';


const initialGuitars = [
    {
        name:"stratocaster",
        price:1200,
        type:"electric",
        image:"",
    },
    {
        name: "telecaster",
        price: 1300,
        type: "electric",
        image: "",
    },
    {
        name: "les paul",
        price: 1500,
        type: "electric",
        image: "",
    },
    {
        name: "sg",
        price: 1400,
        type: "electric",
        image: "",
    },
    {
        name: "flying v",
        price: 1600,
        type: "electric",
        image: "",
    },
    {
        name: "explorer",
        price: 1700,
        type: "electric",
        image: "",
    },
    {
        name: "jaguar",
        price: 1100,
        type: "electric",
        image: "",
    },
    {
        name: "mustang",
        price: 1000,
        type: "electric",
        image: "",
    },
    {
        name: "jazzmaster",
        price: 1250,
        type: "electric",
        image: "",
    },
    {
        name: "firebird",
        price: 1350,
        type: "electric",
        image: "",
    },
    {
        name: "rickenbacker",
        price: 1800,
        type: "electric",
        image: "",
    }
];

const GuitarHero = () => {
    const [filterGuitars, setFilterGuitars] = useState(initialGuitars)
    const [searchTerm, setSearchTerm] = useState("")
    const [filterType, setFilterType] = useState(0)

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase()
        setSearchTerm(value)
        //aquí vendria la funcion que realiza la busqueda
        findGuitars(value, filterType)
    }

    const findGuitars = (search, type) => {
        const dataFiltered = initialGuitars.filter(guitar => guitar.name.toLowerCase().includes(search) && guitar.type.includes(type))
        setFilterGuitars(dataFiltered)
    }

    const handleChangeFilterType = (e) => {
        const value = e.target.value
        setFilterType(value)
        //aquí tengo que filtrar por tipo de guitarra
        findGuitars(searchTerm, value)   
    }
    
  return (
    <div className='max-w-2xl mx-auto bg-white mt-8 p-6 shadow-lg rounded-md'>
        {/* Titulo */}
        <h1 className='text-2xl font-bold text-center mb-6'>Filtro de Guitarras</h1>
        {/* Formulario para buscar */}
        <div className='mb-6'>
            <label className='block text-gray-700 font-medium mb-2'></label>
            <input type='text'
            placeholder='Buscar guitarra'
            value={searchTerm}
            onChange={handleSearch}
            className='w-full p-2 border border-gray-300 rounded-md'/>
        </div>
        {/* Select para filtrar por tipo de guitarra */}
        <div className='mb-6'>
            <label className='block text-gray-700 font-medium mb-2'>Filtrar por tipo de guitarra</label>
            <select
            value={filterType}
            onChange={handleChangeFilterType}
            className='w-full p-2 border border-gray-300 rounded-md'>
                <option value="">Todas</option>
                <option value="electric">Electricas</option>
                <option value="acoustic">Acusticas</option>
                <option value="classic">Clásicas</option>
            </select>
        </div>
        {/* Lista de guitarras */}
        <div>
            {filterGuitars.map(guitar => (
                //aquí tengo que renderizar una cardGuitar
                <CardGuitar key={guitar.name} guitar={guitar}/>
            ))}
            
        </div>
    </div>
  )
}

export default GuitarHero
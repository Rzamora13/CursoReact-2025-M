import { useState } from 'react'
import guitarImage from '../../assets/guitarImage.svg'

const CardGuitar = ({guitar}) => {
    const {name, price, type} = guitar
  return (
    <div key={guitar.name}
    className='bg-gray-100 border p-4 mt-4 rounded-lg shadow-md flex items-center'>
        
        <img src={guitarImage} alt={name} width={80} className='w-20 h-20 object-cover rounded-md ml-4 mr-10'/>
        <div>
            <h2 className='text-lg font-bold'>{name}</h2>
            <p className='text-sm text-gray-700'>{price}€</p>
            <p className='text-xl font-boldm text-gray-700'>{type}</p>
        </div>
    </div>
  )
}

export default CardGuitar
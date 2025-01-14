import { useEffect, useState } from 'react'

const UsersPlaceHolder = () => {
    const [users, setUsers] = useState([])
    const fetchDataPlaceHolder = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            setUsers(await response.json())
        }catch(error){
            throw new Error("Error en la petición", error)
        }
        
    }
    useEffect(() => {
        fetchDataPlaceHolder();
    }, [])
    
  return (
    <div className='bg-gray-200 shadow-lg p-6 flex-col justify-center items-center'>
        {users.map((user) => {
            return (
                <div key={ user.id }className='flex justify-center items-center'>
                    <h2 className='text-xl font-bold mb-2'>UserName:{user.name}</h2>
                    <p className='text-gray-600 mb-4'>City:{user.address.city}</p>
                </div>
            );
        })}
    </div>
  )
}

export default UsersPlaceHolder
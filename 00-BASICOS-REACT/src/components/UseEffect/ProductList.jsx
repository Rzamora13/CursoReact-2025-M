// Lista de productos renderizados
import { useEffect, useState} from 'react'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const fetchProducts = async () => {
        try{
            const response = await fetch('http://localhost:5173/src/data/db2.json')
            if(!response.ok){
                throw new Error("Error en la petición")
            } 
            setProducts(await response.json())
        }catch(error){
            throw new Error("Error en la petición", error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    
  return (
    <div>ProductList</div>
  )
}

export default ProductList
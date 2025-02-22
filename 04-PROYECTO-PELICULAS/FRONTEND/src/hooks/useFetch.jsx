// Hook que se encargue de realizar cualquier petición a un API

import { useEffect, useState } from "react";

export const useFetch = (fetchFunction, dependencies = []) => {
    // Estado para guardar la data
    const [data, setdata] = useState(null);

    // Estado para guardar el loading
    const [loading, setLoading] = useState(true);

    // Estado para guardar el error
    const [error, setError] = useState(null);

    // Función que hace la petición a la api
    const fetchData= async() => {
        try{
            const result = await fetchFunction();
            setdata(result);
        }catch(error){
            setError(error);
        }finally{
            setLoading(false);
        }
        
    }

    useEffect(() => {
      // Creo un objeto para abortar la petición
      const abortController = new AbortController();
      setLoading(true);
      fetchData();     

      return () => {
        // Cuando desmonto el componente aborto la petición
        abortController.abort();
      }
    }, dependencies)

    return {data, loading, error};
    
}
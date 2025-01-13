import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
const stateInitial = 
    {
        nombre: '',
        email: '',
        password: ''
    };

function RegistrarFormulario() {
    //ESTADOS
    
    const [formData, setFormData] = useState(stateInitial);

    // FUNCIONES

    const handlerInputChage = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handlerSubmit = (e) => {
        e.preventDefault();

        if(!formData.nombre.trim() || !formData.email.trim() || !formData.password.trim()){
            console.log("Datos incompletos");
            toast.error("Datos incompletos");
            return;
        }
        console.log("Datos introducidos correctamente");
        console.log(formData.nombre, formData.email, formData.password);
        toast.success(`Usuario registrado con exito con el nombre: ${formData.nombre}`);
        setFormData(stateInitial);
    }

  return (
    <div className="max-w-md mx-auto p-6">
        <ToastContainer />
        <form className="p-6 bg-white shadow-lg rounded-lg"
        onSubmit={handlerSubmit}>
            <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Registrar Usuario</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2 ">Nombre</label>
                <input 
                    type="text"
                    name="nombre" 
                    className="w-full px-3  py-3 border rounded-lg" 
                    placeholder="Ingrese su nombre"
                    value={formData.nombre}
                    onChange={handlerInputChage}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                    type="text"
                    name="email" 
                    className="w-full px-3  py-3 border " 
                    placeholder="Ingrese su email"
                    value={formData.email}
                    onChange={handlerInputChage}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <input 
                    type="password"
                    name="password" 
                    className="w-full px-3  py-3 border " 
                    placeholder="Ingrese su contraseña"
                    value={formData.password}
                    onChange={handlerInputChage}
                />
            </div>
            <button type="submit"
             className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
        </form>
    </div>  
  )
}

export default RegistrarFormulario
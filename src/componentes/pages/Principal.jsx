import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from "../Data.json"
import Formulario_cliente from '../formulario';  
import Buscador from '../Buscador';
import Header from '../Header';



const Pagina_principal = ()=>{
  
    const [ listaclientes, setlistaclientes] = useState(data);
    
    const [ busqueda, setbsuqueda] = useState("");
   
    const agragar_datoscliente = (datos_clientes)=>{
        if (!datos_clientes) {
          return;  
        }
      console.log(datos_clientes)
       var a={ "cotizacion": datos_clientes.cotizacion,
       "nombre": datos_clientes.nombre,
       "correo": datos_clientes.correo,
       "comentario": datos_clientes.comentario}
     setlistaclientes([...listaclientes,a])
  

    }

   const control_de_datos = ()=>{
    if (busqueda!=="") {
        return listaclientes.filter((nose)=> nose.nombre.includes(busqueda))
    }
    return listaclientes
   }

   control_de_datos()
        
        
      
           

    return(
 
        <>
<Header/>

<Buscador
 busqueda={setbsuqueda}
 filtro={busqueda}
/>
         <Formulario_cliente



         agregar_nombre={agragar_datoscliente}
     
         />

         <div className='container'>
         <ul  className="row m-2 gap-1">
        
        {control_de_datos().map((clientes) => (
                    <li key={clientes.cotizacion}  className="col-12 col-sm-4 columnas" >
                        <p> {clientes.cotizacion}</p>
                     <p>{clientes.nombre}</p>
                     <p>{clientes.correo}</p>
                     <p>{clientes.comentario}</p>
                     
                      </li>
          ))}
        
            </ul>
         </div>

            
 
        </>
    )




    
}

export default Pagina_principal;
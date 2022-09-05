import { Button } from 'bootstrap';
import { useState } from 'react';


const Formulario_cliente = (props)=>{
    const [inputnombre, setInputNombre] = useState("");
    const [inputcorreo, setInputcorreo] = useState("");
    const [inputcomentario, setInputcomentario] = useState("");
    const [inputcotizacion, setInputcotizacion] = useState("");

    
    const manejarFormulario = (e) => {
        e.preventDefault();

        var json={ "cotizacion": Number(inputcotizacion),
        "nombre": inputnombre,
        "correo": inputcorreo,
        "comentario": inputcomentario}
     props.agregar_nombre(json)


        setInputNombre("");
        setInputcorreo("")
        setInputcomentario("")
        setInputcotizacion("")
    }
    return(
        <>
        <h3> Registrar cliente</h3>
        <form onSubmit={manejarFormulario} className="row  ">

            <div class="container">
           
            <input type="text" value={inputnombre} onChange={(e) => setInputNombre(e.target.value) } className="col-8 input" placeholder='Nombre'/>
                
                <input type="text" value={inputcorreo} onChange={(e) => setInputcorreo(e.target.value)}  className="col-8 input"  placeholder='Email'/>
                <input type="text" value={inputcomentario} onChange={(e) => setInputcomentario(e.target.value)} className="col-10 input" placeholder='Comentario'/>
                <input type="text" value={inputcotizacion} onChange={(e) => setInputcotizacion(e.target.value)} className="col-8 input"  placeholder='cotizacion'/>

                <button className='col-8 btn-primary'>Agregar Cliente</button>
            </div>
             

                
                
            </form>


        </>
    )

}

export default Formulario_cliente;
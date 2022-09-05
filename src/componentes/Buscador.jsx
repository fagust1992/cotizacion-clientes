 


const Buscador = (props)=>{
    return(

        <>
        <h4> filtra por Nombre</h4>
        
        <input className="input" type="text" value={props.filtro} onChange={(e) => props.busqueda(e.target.value)} placeholder="buscador" />

        </>
        )
}

export default Buscador; 
import "./campoDescripcion.css"

const CampoDescripcion = (props) => {

    const manejarCambio =(e)=>{
        console.log("cambio",e.target.value);
        props.actualizarValor(e.target.value)
    }

    return (
        <div className="campoDescripcion">
            <label >Descripción</label>
            <textarea
                placeholder={props.placeholder}
                required = {props.required}
                value={props.valor}
                onChange={manejarCambio}
            />
        </div>
    )
}

export default CampoDescripcion
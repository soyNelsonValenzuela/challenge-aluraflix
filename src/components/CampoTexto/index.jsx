import "./CampoTexto.css"

const CampoTexto =(props)=>{
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input type={props.type} placeholder={props.placeholder} required={props.required}/>
    </div>
}

export default CampoTexto
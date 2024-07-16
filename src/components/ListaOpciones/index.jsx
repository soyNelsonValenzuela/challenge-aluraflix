import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //metodo map --> arrelo.map((categorias,index) =>{  })

    const categorias = [
        "Front end",
        "Back end",
        "Innovación y gestión",
        
    ]


    const manejarCambio=(e)=>{
        console.log("cambio",e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-opciones">
        <label >Categoría</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccione categoría</option>
            {categorias.map((categorias, index) => <option key={index} value={categorias}>{categorias}</option>)}
        </select>
    </div>
}

export default ListaOpciones
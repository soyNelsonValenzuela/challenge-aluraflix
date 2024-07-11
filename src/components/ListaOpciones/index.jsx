import "./ListaOpciones.css"

const ListaOpciones = () => {

    //metodo map --> arrelo.map((categorias,index) =>{  })

    const categorias = [
        "front end",
        "Back end",
        "Innovación y gestión",
    ]

    return <div className="campo-opciones">
        <label >Categoría</label>
        <select required>
            {categorias.map((categorias,index) => { 
            return <option key={index}>{categorias}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones
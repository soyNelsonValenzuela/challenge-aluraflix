import { useState } from "react"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import styles from "./FormularioNuevoVideo.module.css"
import CampoDescripcion from "../CampoDescripcion"
import BotonForm from "../BotonForm"

const Formulario = () => {

    const [titulo, actualizarTitulo] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [categoria, actualizarCategoria] = useState("")

    const subtitulo = "Complete el formulario para crear una nueva tarjeta de video"


    const manejarEnvio = (e) => {
        e.preventDefault()

        let datosAEnviar={
            titulo: titulo,
            imagen: imagen,
            video:video,
            descripcion: descripcion,
            categoria: categoria
        }
        console.log(datosAEnviar)
    }

    const limpiaFormulario =()=>{
        actualizarTitulo("")
        actualizarImagen("")
        actualizarVideo("")
        actualizarDescripcion("")
        actualizarCategoria("")
    }


    return (
        <>
            <div className={styles.nuevoVideo}>
                <div className={styles.encabezado}>
                    <h1>NUEVO VIDEO</h1>
                    <h4>{subtitulo.toUpperCase()}</h4>
                </div>
                <form onSubmit={manejarEnvio}  onReset={limpiaFormulario}>
                    <h2>Crear Tarjeta </h2>
                    <div className={styles.inputsContainer}>

                        <CampoTexto
                            titulo="Título"
                            placeholder="ingresar titulo"
                            required
                            valor={titulo}
                            actualizarValor={actualizarTitulo}
                        />

                        <ListaOpciones 
                        valor={categoria} 
                        actualizarValor={actualizarCategoria}

                        />

                        <CampoTexto
                            type="url"
                            titulo="Imagen"
                            placeholder="ingrese el enlace de la imagen"
                            required
                            valor={imagen}
                            actualizarValor={actualizarImagen}
                        />

                        <CampoTexto
                            type="url"
                            titulo="Video"
                            placeholder="ingrese el enlace del video"
                            required
                            valor={video}
                            actualizarValor={actualizarVideo}
                        />

                        <CampoDescripcion
                            placeholder="¿de que se trata este video?"
                            required
                            valor={descripcion}
                            actualizarValor={actualizarDescripcion}
                        />
                    </div>

                    <div className={styles.btnContainer}>

                        <BotonForm
                            type="submit"
                            value="Guardar"
                        />

                        <BotonForm
                            type = "reset"
                            value = "Limpiar"
                        />

                    </div>

                </form>

            </div>

        </>
    )
}

export default Formulario
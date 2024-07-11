import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import styles from "./FormularioNuevoVideo.module.css"

const Formulario = () => {

    const subtitulo = "Complete el formulario para crear una nueva tarjeta de video"

    const manejarEnvio =(e)=>{
        e.preventDefault() 
        console.log("manejacion",e);

    }

    return (
        <>
            <div className={styles.nuevoVideo}>
                <div className={styles.encabezado}>
                    <h1>NUEVO VIDEO</h1>
                    <h4>{subtitulo.toUpperCase()}</h4>
                </div>
                <form onSubmit={manejarEnvio} >
                    <h2>Crear Tarjeta </h2>
                    <div className={styles.inputsContainer}>

                        <CampoTexto titulo="Título" placeholder="ingresar titulo" required />
                        <ListaOpciones />
                        <CampoTexto type ="url" titulo="Imagen" placeholder="ingrese el enlace de la imagen" required />
                        <CampoTexto type ="url" titulo="Video" placeholder="ingrese el enlace del video" required />
                        <div className={styles.textArea}>
                            <label >Descripción</label>
                            <textarea required>

                            </textarea>
                        </div>

                        {/* insertar componente caja de texto para descripcion */}

                    </div>

                    <div className={styles.btnContainer}>
                        <button className={styles.btnGuardar} type="submit">GUARDAR</button>
                        <button className={styles.btnLimpiar} type="reset">LIMPIAR</button>
                    </div>

                </form>

            </div>

        </>
    )
}

export default Formulario
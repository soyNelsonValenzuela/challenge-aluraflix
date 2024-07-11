import styles from "./Card.module.css"

const  Card= () =>{
    return (<>

        <div className={styles.card}>
            <figure >
                <img src="public/image 7.png" alt="miniatura video" className={styles.cardImagen} />
                <figcaption className={styles.contenedorBotones}>
                    <button className={styles.btn} >
                        <img src="src/assets/iconos/icono-borrar.png" />
                        <span>BORRAR</span>
                    </button>
                    <button className={styles.btn}>
                        <img src="src/assets/iconos/icono-editar.png"/>
                        <span >EDITAR</span>
                    </button>
                </figcaption>
            </figure>
        </div>

    </>)
}

export default Card

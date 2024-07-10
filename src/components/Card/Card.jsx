import styles from "./Card.module.css"

function Card() {
    return (<>

        <div className={styles.card}>
            <figure >
                <img src="public/image 7.png" alt="miniatura video" className={styles.cardImagen} />
                <figcaption className={styles.contenedorBotones}>
                    <div className={styles.btn} >
                        <img src="src/assets/iconos/icono-borrar.png" />
                        <span>BORRAR</span>
                    </div>
                    <div className={styles.btn}>
                        <img src="src/assets/iconos/icono-editar.png"/>
                        <span >EDITAR</span>
                    </div>
                </figcaption>
            </figure>
        </div>

    </>)
}

export default Card

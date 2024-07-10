

import styles from "./Banner.module.css"
import banner from "../../assets/banner.png"


function Banner() {

    return (
        <main className={styles.fondo} style={{ backgroundImage: `url(${banner})` }}>
            <div className={styles.capa}></div>
            <div className={styles.textContainer}>
                <h1 className={styles.categoria} >FRONT END</h1>
                <h2 className={styles.titulo}>Challenge React</h2>
                <p className={styles.descripcion}>
                    Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                </p>
            </div>


            <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/ov7vA5HFe6w?si=P8NEzKHwAwYelSJU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
            ></iframe>




        </main>
    )

}

export default Banner
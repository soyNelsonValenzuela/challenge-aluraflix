import styles from "./Categoria.module.css"
import Card from "../Card/Card"

function Categoria() {
    return (
        <>
            <section className={styles.categoria}>
                <h3 className={styles.tituloFront} >FRONT END</h3>
                <div className={styles.cardContainer}>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

            <section className={styles.categoria}>
                <h3 className={styles.tituloBack} >BACK END</h3>
                <div className={styles.cardContainer}>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

            <section className={styles.categoria}>
                <h3 className={styles.tituloIyG} >INOVACIÓN Y GESTIÓN</h3>
                <div className={styles.cardContainer}>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </>

    )
}

export default Categoria
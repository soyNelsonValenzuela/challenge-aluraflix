import styles from "./Categoria.module.css"
import Card from "../Card"

const Categoria = (props) => {
    //destructuracion
    const { colorPrimario, titulo } = props.datos

    return (
        <>
            <section className={styles.categoria}>
                <h3 className={styles.titulo} style={{ backgroundColor: colorPrimario }} >{titulo.toUpperCase()}</h3>
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
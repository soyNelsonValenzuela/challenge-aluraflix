import styles from "./Footer.module.css"
import logo from "../../assets/logo.png"


function Footer (){
    return (
        <footer className={styles.footer}>
            <img src={logo} alt=" logo aluraflix" />
            <h4> Desarrollado por <br/>Nelson Valenzuela</h4>
        </footer>
    )
}

export default Footer
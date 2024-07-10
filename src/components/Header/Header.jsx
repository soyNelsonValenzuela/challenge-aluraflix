import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import HeaderBtn from "../HeaderBtn/HeaderBtn"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="logo aluraflix" />
            </Link>
            <nav className={styles.nav}>
                <HeaderBtn url="./">HOME</HeaderBtn>
                <HeaderBtn url ="./nuevoVideo">NUEVO VIDEO</HeaderBtn> 
               
            </nav>


        </header>
    )
}

export default Header
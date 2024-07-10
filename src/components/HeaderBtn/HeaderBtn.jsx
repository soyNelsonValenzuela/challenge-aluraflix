import { NavLink } from "react-router-dom"
import styles from "./HeaderBtn.module.css"

function HeaderBtn({ url, children }) {
    return (
        <NavLink
            to={url}
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link} >
            {children}
        </NavLink>
    )
}

export default HeaderBtn
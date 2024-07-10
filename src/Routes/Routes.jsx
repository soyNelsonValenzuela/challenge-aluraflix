import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header/Header"
import "./AppRoutes.css"
import Banner from "../components/Banner/Banner"
import Categoria from "../components/Categorias/Categoria"
import Footer from "../components/Footer/Footer"

function AppRoutes (){
    return(

        <BrowserRouter>
            <div className="app-container">
                <Header/>
                <Banner/>
                <Categoria/>
                <Footer/>


            </div>
        
        </BrowserRouter>



    )
}

export default AppRoutes
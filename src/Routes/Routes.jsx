import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import "./AppRoutes.css"
import Footer from "../components/Footer"
import Home from "../Pages/Home"
import NuevoVideo from "../Pages/NuevoVideo"

function AppRoutes() {
    return (

        <BrowserRouter>
            <div className="app-container">
                <Header />
                <div className="content">
                    <Routes>
                        <Route index element={<Home />}></Route>
                        <Route path="nuevoVideo" element={<NuevoVideo />}></Route>
                    </Routes>
                </div>

                <Footer />

            </div>

        </BrowserRouter>



    )
}

export default AppRoutes
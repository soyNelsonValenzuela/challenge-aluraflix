import Banner from "../../components/Banner"
import Categoria from "../../components/Categorias"

const Home = () => {

    

    //lista de categorias 
    const categorias = [
        {
            titulo: "front end",
            colorPrimario: "#6BD1FF"
        },
        {
            titulo: "Back end",
            colorPrimario: "#00C86F"
        },
        {
            titulo:  "Innovación y gestión",
            colorPrimario: "#FFBA05"
        }
    ]

    return (
        <>
            <Banner />
            {categorias.map((categoria) => <Categoria datos={categoria} key={categoria.titulo}/>)}
        </>
    )
}

export default Home
import { useContext } from "react"
import { Pagina } from "../pages/Layout"
import { Link } from "react-router-dom"
export function Header() {

    return (
        <header>
            <div className="cabecera">
                <Link to='/' className='logo'>
                    <h1>DEMO Streaming</h1>
                </Link>
                <div className="botones-cabecera">
                    <button id='login'>Log in</button>
                    <button id='freetrial'>Start your free trial</button>
                </div>
            </div>
            <div className="seccion">
                <TextoSeccion />
            </div>
        </header>
    )
}

function TextoSeccion() {
    const { pagina, setPagina } = useContext(Pagina)

    switch (pagina) {
        case 'titulos':
            return (
                <h3 className="seccion">Popular Titles</h3>
            )
        case 'peliculas':
            return (
                <h3 className="seccion">Popular Movies</h3>
            )
        case 'series':
            return (
                <h3 className="seccion">Popular Series</h3>
            )
        default:
            return (
                <h3 className="seccion">Popular Titles</h3>
            )
    }
}
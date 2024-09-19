import { useContext } from "react"
import { Pagina } from "../App"
export function Header() {

    return (
        <header>
            <div className="cabecera">
                <h1>DEMO Streaming</h1>
                <div className="botones-cabecera">
                    <button>Log in</button>
                    <button>Start your free trial</button>
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
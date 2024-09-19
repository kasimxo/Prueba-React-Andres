import { useContext } from "react"
import { Pagina } from "../App"
import { Titles } from "./Titulos"
import { Resultados } from "./Resultados"

export function Main() {
    const { pagina, setPagina } = useContext(Pagina)


    switch (pagina) {
        case 'series':

            return (<Resultados tipo='series' />)
        case 'peliculas':
            return (<Resultados tipo='movie' />)
        case 'titulos':
            return (<Titles />)
        default:

    }


}



import { Resultados } from "../components/Resultados"
import { useContext } from "react"
import { Pagina } from "./Layout"

export function Peliculas() {

    const { pagina, setPagina } = useContext(Pagina)
    setPagina('peliculas')
    return (
        <Resultados tipo='movie' />
    )
}
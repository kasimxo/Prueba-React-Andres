import { Resultados } from "../components/Resultados"
import { useContext } from "react"
import { Pagina } from "./Layout"
export function Series() {
    const { pagina, setPagina } = useContext(Pagina)
    setPagina('series')
    return (
        <Resultados tipo='series' />
    )
}
import { Titles } from "../components/Titulos";
import { useContext } from "react"
import { Pagina } from "./Layout"

export function Inicio() {
    const { pagina, setPagina } = useContext(Pagina)
    setPagina('titulos')
    return (
        <Titles />
    )
}
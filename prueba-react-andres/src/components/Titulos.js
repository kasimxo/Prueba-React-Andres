import { useContext } from 'react'
import imagen from './../assets/placeholder.png'
import { Pagina } from '../App'

export function Titles() {
    let opciones = [<Titulos nombre='series' />, <Titulos nombre='peliculas' />]
    return (
        <main>
            {opciones}
        </main>
    )
}


function Titulos(props) {

    const { pagina, setPagina } = useContext(Pagina)

    let nombre = props.nombre

    let texto = ''
    if (nombre === 'series') {
        texto = 'Popular Series'
    } else if (nombre === 'peliculas') {
        texto = 'Popular Movies'
    }

    function cambiarEscena() {
        setPagina(props.nombre)
    }

    return (

        <button onClick={cambiarEscena} className='carta'>
            <img src={imagen} alt={texto} title={texto} className='placeholder' />
            <p>{texto}</p>
        </button>

    )
}
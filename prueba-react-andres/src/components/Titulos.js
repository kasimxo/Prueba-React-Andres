import { useContext } from 'react'
import imagen from './../assets/placeholder.png'
import { Pagina } from '../pages/Layout'
import { Link } from 'react-router-dom'

export function Titles() {
    let opciones = [<Titulos nombre='series' />, <Titulos nombre='peliculas' />]
    return (
        <main>
            {opciones}
        </main>
    )
}


function Titulos(props) {

    let nombre = props.nombre

    let texto = ''
    if (nombre === 'series') {
        texto = 'Popular Series'
    } else if (nombre === 'peliculas') {
        texto = 'Popular Movies'
    }


    return (
        <Link to={'/' + props.nombre} className='carta'>
            <div className='carta_titulo'>
                <p className='texto_titulo'>{texto === 'Popular Series' ? 'SERIES' : 'MOVIES'}</p>
            </div>
            <p >{texto}</p>
        </Link>
    )
}
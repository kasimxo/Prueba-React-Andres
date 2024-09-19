import data from './../data/sample.json'
import { useState } from 'react'

import placeholder from './../assets/placeholder.png'

export function Resultados(props) {
    let tipo = props.tipo

    const [year, setYear] = useState(2010)
    const [cantidadResultados, setCantidadResultados] = useState(20)
    const [pagina, setPagina] = useState(0)
    const [index, setIndex] = useState(0)


    let entradas = data.entries.filter((elemento) => elemento.programType === tipo)
        .filter((elemento) => elemento.releaseYear >= year)
        .sort((a, b) => a.title.localeCompare(b.title))

    var totalPaginas = 0
    if (document.getElementById('numero_resultados') !== null) {
        totalPaginas = Math.floor(entradas.length / Number.parseInt(document.getElementById('numero_resultados').value)) + 1

    }


    let resultados = []

    for (let i = index; i < cantidadResultados + index; i++) {
        if (entradas[i] !== undefined) {
            resultados.push(<Elemento el={entradas[i]} />)
        }
    }

    function cerrarPopup() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("popupDialog").style.display = "none";
    }
    function filtrar() {
        let yearFiltro = Number.parseInt(document.getElementById('number').value)

        if (Number.isInteger(yearFiltro)) {
            setYear(yearFiltro)
        }
    }
    function modificarNumeroResultados() {
        let cantidadResultadosInput = document.getElementById('numero_resultados').value
        setCantidadResultados(cantidadResultadosInput)
    }
    function paginaAnterior() {
        if (pagina === 0) {
            return
        }
        setPagina(pagina - 1)
        setIndex(index - Number.parseInt(document.getElementById('numero_resultados').value))
    }
    function paginaSiguiente() {
        if (pagina === totalPaginas - 1) {
            return
        }
        setPagina(pagina + 1)
        setIndex(index + Number.parseInt(document.getElementById('numero_resultados').value))
    }
    console.log(index, cantidadResultados, entradas.length)

    return (
        <main>
            <div id='filtros'>
                <div>
                    <label>Filtrar por año</label>
                    &nbsp;
                    <input id="number" type="text" placeholder='2010' />
                    &nbsp;
                    <button onClick={filtrar}>Filtrar</button>
                </div>

                <div>
                    <label >Resultados a mostrar
                        &nbsp;
                        <select name='tipos' id='numero_resultados' onChange={modificarNumeroResultados}>
                            <option value='20'>20</option>
                            <option value='10'>10</option>
                            <option value='5'>5</option>
                        </select>
                    </label>
                </div>
                <div>
                    <button onClick={paginaAnterior}>Anterior</button>
                    &nbsp;
                    <label>{pagina + 1}/{totalPaginas}</label>
                    &nbsp;
                    <button onClick={paginaSiguiente}>Siguiente</button>
                </div>
            </div>
            <div id='popup'></div>
            <div id="popupDialog">
                <div id='texto'></div>
                <button onClick={cerrarPopup}>Cerrar</button>
            </div>
            {resultados}
        </main>
    )
}

function Elemento(props) {
    let el = props.el
    /*"title": "Wolf Creek",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "programType": "series",
      "images": {
                    "Poster Art": {
                    "url": "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
                "width": 1000,
                "height": 1500
        }
      },
                "releaseYear": 2016 */

    const [imagen, setImagen] = useState(el.images['Poster Art'].url)

    function mostrarResultado() {
        document.getElementById("popup").style.display = "block";
        let popup = document.getElementById("popupDialog")
        popup.style.display = "block";
        document.getElementById('texto').innerHTML = '<p>' +
            props.el.title + '<br /><br />'
            + props.el.description + '<br /><br />'
            + props.el.releaseYear + '<br /><br />'
            + '</p>'
    }


    return (
        <article className='carta resultado' onClick={mostrarResultado}>
            <img src={imagen}
                alt={el.title}
                title={el.title}
                className='placeholder'
                //Por si no se puede recuperar la imagen
                onError={({ currentTarget }) => {
                    setImagen(placeholder)
                    currentTarget.onerror = null;
                }} />
            <p>{el.title}</p>
        </article>
    )
}
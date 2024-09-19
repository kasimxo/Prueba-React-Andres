import data from './../data/sample.json'
import { useState } from 'react'

import placeholder from './../assets/placeholder.png'

export function Resultados(props) {
    let tipo = props.tipo
    let entradas = data.entries.filter((elemento) => elemento.programType === tipo)
        .filter((elemento) => elemento.releaseYear >= 2010)
        .sort((a, b) => a.title.localeCompare(b.title))
    let resultados = []
    for (let i = 0; i < 20; i++) {
        resultados.push(<Elemento el={entradas[i]} />)
    }
    function cerrarPopup() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("popupDialog").style.display = "none";
    }

    return (
        <main>
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
            props.el.title + '<br/><br/>'
            + props.el.description + '<br/><br/>'
            + props.el.releaseYear + '<br/><br/>'
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
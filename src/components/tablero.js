import React from 'react'

function Tablero({laberinto}) {
  return (
    <p>{
        laberinto.map( linea =>
            linea.map( ele => <p>{ele}</p>)
            )
    }</p>
  )
}

export default Tablero
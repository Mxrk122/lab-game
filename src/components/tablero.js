import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Wall from './wall'

function Tablero({laberinto, weight, height}) {

    const h = parseFloat(height) + parseFloat(height + 1)

    const w = (Number(weight * 2) + Number( weight + 1 ))

    console.log("height: ", h)
    console.log("weight: ", w)


    const style = css`
    color: blue;
    background: #A0A0A0;
    display: grid;
    grid-template-columns: repeat(${w}, 50px);
    grid-template-rows: repeat(${h}, 50px);
    `

    return (
    <div className = 'tablero' id = 'grid' css = {style} >

        {
            laberinto.map( linea =>
                linea.map( element => {
                    if (element === "-" || element === "|" || element === "+") {
                      return <Wall prop = {element}/>
                    }
                    return <p>{element}</p>
                })
            )
        }

    </div>
  )
}

export default Tablero
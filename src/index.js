//Archivo de entrada de la app
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from "react"
import ReactDOM from "react-dom"
import Tablero from './components/tablero.js'
import { app, h1, input, button } from "./styles.js"

// Metodo para crear laberintos
const crearLaberinto = async (w, h) => {
    const origin = 'https://maze.juanelcaballo.club/?type=json&w=!&h=$'

    const setWeight = origin.replace('!', w)

    const setHeight = setWeight.replace('$', h)

    const value = await fetch(setHeight) //Hago un request de http del laberito
    .then((response) => {//el resultado de la promesa es esta funcion que trae la respuesta
        return response.json()//Este metodo es una promesa
    })
    .then((responseInJson) => {
        return responseInJson
    })

    return value
}

const App = () => {

    // Cambiar el tamaño del laberinto
    const [laberinto, setLaberinto] = React.useState([])
    const [height, setHeight] = React.useState(4)
    const [weight, setWeight] = React.useState(4)

    const setW = (val) => {
        // Al cambiar el valor del input se actualizar el valor
        const value = Number(val.target.value)

        value ? setWeight(value) : weight = 4
    }

    const setH = (val) => {
        // Al cambiar el valor del input se actualizar el valor
        const value = Number(val.target.value)

        value ? setHeight(value) : height = 4
    }

    const changeLab = async () => {
        // Si cambia el laberinto, se actualiza y se recgarga la pagina
        // Esta funcion solicita un cambio ene l laberinto
        const newLaberinto = await crearLaberinto( weight, height )
        setLaberinto(newLaberinto)
    }

    return (
      <div className="app" css={app}>
        <h1 css={h1}>Graffity Labyrinth</h1>
        <input
          type="number"
          placeholder="ingresa el tamaño"
          onChange={setH}
          css = {input}
        ></input>
        <input
          type="number"
          placeholder="ingresa el tamaño"
          onChange={setW}
          css = {input}
        ></input>
        <button onClick={changeLab} css = {button}>¡Crear un laberinto!</button>
        <Tablero laberinto={laberinto} weight={weight} height={height} />
      </div>
    );
}

//Renderiza app y lo pone en el div "root"
ReactDOM.render(<App />, document.getElementById("root"))
//Archivo de entrada de la app
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from "react"
import ReactDOM from "react-dom"
import Tablero from './components/tablero.js'


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

    const [laberinto, setLaberinto] = React.useState([])

    const changeLab = async () => {

        const newLaberinto = await crearLaberinto(4, 4)
        setLaberinto(newLaberinto)
    }

    console.log(laberinto)

    return(
        <div className = "app">
            <h1>Bienvenido al laberinto</h1>
            <button onClick = {changeLab}>¡Crear un laberinto!</button>
            <input placeholder = "ingresa el tamaño"></input>
            <Tablero laberinto = {laberinto}/>
        </div>
    )
}

//Renderiza app y lo pone en el div "root"
ReactDOM.render(<App />, document.getElementById("root"))
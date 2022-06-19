
import './App.css';
import logoSeba from "./imagenes/logoCompleto.png"
import Boton from './componenes/Botones';
import Pantalla from './componenes/Pantalla';
import BotonClear from './componenes/BotonClear';
import { useState } from "react"
import { evaluate } from "mathjs"

function App() {
  const [input, setInput] = useState("")

  const agregarInput = valor =>{
    setInput(input + valor)
  }
  
  const CalcularResultado = () =>{
    if(input){
      setInput(evaluate(input))
    }
    else{alert("por favor ingrese un numero")}
    
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={logoSeba}
        className="freecodecamp-logo"
        alt="logo seba" />
      </div>
      <div className="contenedor-calculadora">
          <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={CalcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={ () => setInput(" ")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

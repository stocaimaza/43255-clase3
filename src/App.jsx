//comentario en linea
/*
  Vamos a trabajar con componentes: es un conjunto de elemento que cumplen una misma función. 
  //Ejemplo: Vamos a desarrollar un formulario dividiendo en componentes. 

*/
import Form from './componentes/Form/Form'
import './App.css'

const App = () => {
  let nombre = "Samuel"
  return (
    <div>
      <h1>Hola, soy un h1</h1>
      <h2 style={{color:"red"}}>Hola, soy un h2</h2>
      <p className="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta sit doloribus harum dolorem voluptates beatae, ullam ratione molestiae vel alias repellat saepe adipisci asperiores quos expedita dolor fugiat nam?</p>
      <img src="https://placekitten.com/200/300" alt="" />
      <Form/>
      {
        /*
        comentario
        en 
        bloque
        */
      }

    </div>
  )
}

export default App
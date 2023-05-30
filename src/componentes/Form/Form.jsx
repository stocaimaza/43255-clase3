import InputText from "../InputText/InputText"
import TextArea from "../TextArea/TextArea"
import Boton from "../Boton/Boton"

const Form = () => {
  return (
    <form>
        <h2>Formulario de Contacto: </h2>
        <InputText/>
        <InputText/>
        <TextArea/>
        <Boton/>
    </form>
  )
}

export default Form
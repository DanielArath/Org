import "./Equipo.css"
import Colaborador from "../Colaboradores"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
//Aqui estamos haciendo una destructuracion que es hacer hcer mas chico el codigo quitando tantos props
//lo que estamos haciendo abajos es decirle a Vs que nos genere una cons de cada uno y que lo sacaremos de props.datos
// es como si estuvieramos haciendo esto const colorPrimario = props.datos.colorPrimario solo que es mucho mas corto y facil como lo pusimos

    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.8)
    }
    const estiloTitulo = {borderColor: colorPrimario}
//El .length que esta abajo sirve para ver o contabilizar cuantos elementos existen dentro de la variable y en esta 
//situacion lo estanos ocupando para saber cuantos colaboradores tiene "colaboradores" y si es mayor a 0 lo muestre 
// y si no no muestre nada 
 
//Esto esta muy interesante ya que estamos creando un typo de input para cambiar de color le color secundario, primero 
//le estamos estamos dicinedo al input que va a ser tipo color con el type, le dimos la clase y le estamos diciendo que
// que su valor inicial sera el colorSecundario como nos marcaba error ya que el navegador no se puede hacer cargo de eso
// agregamos el evento onChange para que cada que se haga un cambio en el input nos muestre en donde fue, que fue en (e)
// pusimos punto target para que nos diga exactamente dodne fue y el value para ver cual fue el color que se seleciono en el input
    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input 
                    type="color" 
                    className="input-color"
                    value={colorPrimario}
                    onChange={(e) => {
                        actualizarColor(e.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

//haz acuerdate subnormal

export default Equipo
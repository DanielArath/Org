import "./ListaOpciones.css";

//Props sirve para traer variables de otros archivos por ejemplo props.actualizarEquipo que en realidad se encuentra
//en el archivo formulario y lo estamos mandando a llamar con los props hay otro ejemplo en el archivo campoTexto

const ListaOpciones = (props) =>{

  //.map solo funciona con arreglos, ademas de que ssiempre se va a empezar por 0,como vemos en este ejemplo 
  // programacion es 0  front end es 1 y asi sucesivamente, 
  //como se puede ver estamos diciendo que el arreglo equipo se le va a agregar el .map entoces las variables que tiene 
  // dentro se le va a llamar equipo despues le estamos diciendo que nos va a regresar el contenido de equipo dentro de una opcion  
  //tambien no es necesario poner el return solo no ponemos las llaves que estan despues de la flecha y listo
  
    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Selecionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones











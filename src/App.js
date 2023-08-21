import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from'./componentes/Header/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
const [mostrarFormulario,actualizarMostrar] = useState(false)
const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }
])

const [equipos, actualizarEquipos] = useState([
  {
    id: uuid(),
    titulo: "Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"
  },
  {
    id: uuid(),
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF"
  },
  {
    id: uuid(),
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2"
  },
  {
    id: uuid(),
    titulo: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"
  },
  {
    id: uuid(),
    titulo: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"
  },
  {
    id: uuid(),
    titulo: "Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"
  },
  {
    id: uuid(),

    titulo: "Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
  },
])

const cambiarMostrar = () => {
  actualizarMostrar (!mostrarFormulario)
}

const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)  
/*El Spread Operator se acctiva o se escribe ponindo 3 puntitos dentro de unos corchetes y sirve como para copear 
lo que tenga dentro del arreglo colaboradores y como en este caso estamos diciendo que actualizarColaboradores es
lo mismo que lo que tenga colaboradores guardara lo que en este caso serian los datos del formulario y se le psarian
a colaborador*/
    actualizarColaboradores ([...colaboradores,colaborador])
}

const eliminarColaborador = (id) => {
  console.log("Eliminar Colaborador", id)
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
}

const actualizarColor = (color, id) => {
  console.log("Actualizar: ", color, id)
  const equiposActualizados = equipos.map ((equipo) => {
    if(equipo.id === id) {
      equipo.colorPrimario = color
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
}

//Importante este es el arreglo para agregar un nuevo equipo y esta parte funciona de esta manera, aqui estamos mandando a
//llamar a actualizarEquipos porque ahi es donde se encuentran nuestros equipos y ponemos los corchetes para decirle que es 
//un arreglo, le estamos diciendo que copie lo que tiene dentro equipos y con las llaves le estamos diciendo que le vamos
// a agregar un nuevo objeto que seria la copia de los datos que seria el nuevo equipo y despues nada mas le estamos agregando
//un id unico recuerda poner los parectesis para mandarlo a llamar  

const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid() }])
}

const like = (id) => {
  console.log("like", id)
  const favActualizado = colaboradores.map((colaborador) => {
    if (colaborador.id === id) {
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(favActualizado
    )
}

//Como funciona Ternario : Ternario es como unn if en la funcion de abajo le estamos diciendo que si la variable
//mostrarFormulario es true va a mostrar el formulario y si no va a motrar un div vacio 
// Asi es la formula 

  return (
    <div >
      <Header/>
      {/*mostrarFormulario === true ? <Formulario/> : <div></div>*/}
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}  
        crearEquipo={crearEquipo}      
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar}/>

{/*Cada ves que necesitemos mmandar una prop a otro archivo necesitamos añadircelo primero como lo vemos en el ejemplo
 de abajo, primero tenemos que decir como se va a llamar claramente lo llamaremos igual que este archivo para no 
 confundirnos y despues entre llaves ponemos la contante que queremos enviar que en este caso es colaboradores
 si revisas bien tambien lo hicimos con registrarColaborador, con cambiarMostrar y otros */}

{/*La key sirve para que react sepa exactamente a quien se esta refiriendo por ejemplo en equipo se agrego una key para
que cuando borraramos a un colaborador no se borraran todos y regularmente suele ponerse index pero tambien le 
pudimos haber puesto nombre, solo qu si habian dos personas con el mismo nombre se hubieran borrado los 2 por eso lo mas 
facil seria index como en ese caso pero tambien se puede hacer lo que hicimos abajo que le pusimos key equipo.titulo
y lo que hace es que la key va a tomar a equipo.titulo y lo que tengra dentro que en este caso son los titulos de los 
colaboradores ese sera el contenido de la key */}
      { 
         equipos.map ((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter ( colaborador => colaborador.equipo === equipo.titulo)} 
          eliminarColaborador ={eliminarColaborador}
          actualizarColor = {actualizarColor}
          like={like}
          />
        )
      }
      <Footer/>
    </div>
  );
}

export default App;

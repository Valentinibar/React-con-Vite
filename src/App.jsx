
import './App.css'
import ClassComponentPepito, {OtroComponente} from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponents'
import Listado from './Components/Listado'
// Al poner export default en la ClassComponent.jsx, no importa que nombre le asignamos a la importacion,
// ya que hace referencia solamente a la ClassComponent

// Cuando es un export comun, se escribe entre llaves y con la clase tal cual, en este caso ClassComponent
// import {ClassComponent} from './Components/ClassComponent'


function App() {

let notaMariaSilva = 8
let notaValentinIbar = 9
let notaGretelBruing = 10
let notaJosesito = 7
let notaJuani = 10
let notaLaurita = 9

return (

<>
<ClassComponentPepito />
<OtroComponente />

<img src= "src\img\digital.png" alt="foto" />

<FuncComponent />

<Listado  notaMariaSilva = {notaMariaSilva} 
notaValentin = {notaValentinIbar}
notaGretelBruing = {notaGretelBruing}
notaJose = {notaJosesito}
notaJuani = {notaJuani}
notaLaura = {notaLaurita}
/>


</>
)
}

export default App

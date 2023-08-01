

const  Listado = (props)=>{
console.log(props)

    return (
        <ul>
        <li>Maria Silva Nota: {props.notaMariaSilva} </li>
        <li>Valentin Ibar Nota: {props.notaValentin} </li>
        <li>Gretel Bruing Nota: {props.notaGretelBruing} </li>
        <li>Jose Pablo Medero Nota: {props.notaJose}</li>
        <li>Juan Ignacio Araujo Nota: {props.notaJuani}</li>
        <li>Laura Toda Nota: {props.notaLaura}</li>
    </ul>

    )
}

export default Listado


//funcion saludar
let nombre
function saludar () {
    let nombre = prompt ("Ingrese su nombre completo")
    alert (
        "Bienvenido/a " + nombre + " al simulador de CONTROL DE INSUMOS" 
    )
}

saludar ();
// Declaracion de variables
let decision
let user
let pass

function choice () {
    decision = prompt (" Elija la opcion correspondiente: \n 1: Compras/Ingresos \n 2: Produccion/Egresos ")

    if (decision === "1") {
        user = prompt ('Ingrese el usuario').toLowerCase()
        pass = prompt ('Ingrese contraseña')
        // Ingreso de usuario COMPRAS
        if (user === 'compras' && pass === '1234') 
        { alert ('Bienvenido Compras') } 
        else { alert ('Usuario o Contraseña incorrectos, Intentelo de nuevo')
        choice ();
        }
    }
    if (decision === "2") {
        user = prompt ('Ingrese el usuario').toLowerCase()
        pass = prompt ('Ingrese contraseña')
        // Ingreso de usuario PRODUCCION
        if (user === 'produccion' && pass === '1234') 
        { alert ('Bienvenido Produccion') } 
        else { alert ('Usuario o Contraseña incorrectos, Intentelo de nuevo')
        choice ();
        }
    }
    
}
choice ();

//funcion productos
let ingreso
let valorFibra
let valorResina
let valorCatalizador
let valorGelcoat
function ingresos () {
    ingreso = prompt(
        "Elija el material a ingresar al almacen \n 1: Fibra de vidrio \n 2: Resina \n 3: Catalizador \n 4: Gelcoat "
    )
if ( ingreso === "1" ) {
    alert ("Elegiste Fibra de vidrio")
    let valorFibra = prompt ("Especifique la cantidad en kg")
    alert ("Se registro el ingreso de "+ valorFibra + "KG de Fibra de vidrio")
    console.log (valorFibra)
    
} else if (ingreso === "2") {
    alert ("Elegiste Resina")
    let valorResina = prompt ("Especifique la cantidad en kg")
    alert ("Se registro el ingreso de "+ valorResina + "KG de Resina" )
    console.log (valorResina)
    
} else if (ingreso === "3") {
    alert ("Elegiste Catalizador")
    let valorCatalizador = prompt ("Especifique la cantidad en kg")
    alert ("Se registro el ingreso de "+ valorCatalizador + "KG de Catalizador")
    console.log (valorCatalizador)
    
} else if (ingreso === "4") {
    alert ("Elegiste Gelcoat")
    let valorGelcoat = prompt ("Especifique la cantidad en kg")
    alert ("Su rentabilidad es de " + valorGelcoat + "Kg de gelcoat")
    console.log (valorGelcoat)
    
}
} 
ingresos ();

// // funcion decision
// function choice () {
//     decision = prompt (
//         "¿Desea continuar con la inversion? \n 1: Si \n 2: Ver otros instrumentos \n 3: Finalizar simulador"
//     )
// if (decision === "1") {
//     alert ("Inversion confirmada")
// } else if (decision === "2") {
//     productos ();
// } else if (decision === "3") {
//     alert ("Gracias por su visita, lo esperamos pronto.")
//     alert (x + y + z + c)
// }
// }
// choice ();
// // bucle 
// while (decision !=="3") {
//     if (decision === "2") {
//         choice ()
//     } 
// }







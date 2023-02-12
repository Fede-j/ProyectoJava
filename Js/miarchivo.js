
//funcion saludar

function saludar () {
    let nombre = prompt ("Ingrese su nombre")
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
    decision = prompt (" Elija la opcion correspondiente: \n 1: Administrador \n 2: Produccion ")

    if (decision === 1) {
        let user = prompt ('Ingrese el usuario').toLowerCase()
        let pass = prompt ('Ingrese contraseña')
        // Ingreso de usuario ADMINISTRADOR
        if (user === 'administracion' && pass === '1234') 
        { alert ('Bienvenido Administrador') } 
        else { alert ('Usuario o Contraseña incorrectos, Intentelo de nuevo')
        }
    }
    if (decision === 2) {
        let user = prompt ('Ingrese el usuario').toLowerCase()
        let pass = prompt ('Ingrese contraseña')
        // Ingreso de usuario ADMINISTRADOR
        if (user === 'produccion' && pass === '1234') 
        { alert ('Bienvenido Administrador') } 
        else { alert ('Usuario o Contraseña incorrectos, Intentelo de nuevo')
        }
    }
    
}
















// //funcion productos

// function productos () {
//     producto = prompt(
//         "elija uno de nuestros productos \n 1: Acciones \n 2: Criptomonedas \n 3: Bonos \n 4: Plazo fijo "
//     )
// if ( producto === "1" ) {
//     alert ("Elegiste Acciones")
//     let valor = prompt ("Ingrese monto de inversion")
//     alert ("Su rentabilidad es de " + (valor * 1.1).toFixed(2))
//     console.log (valor)
    
// } else if (producto === "2") {
//     alert ("Elegiste Criptomonedas")
//     let valor = prompt ("Ingrese monto de inversion")
//     alert ("Su rentabilidad es de " + (valor * 1.03).toFixed(2))
//     console.log (valor)
    
// } else if (producto === "3") {
//     alert ("Elegiste Bonos")
//     let valor = prompt ("Ingrese monto de inversion")
//     alert ("Su rentabilidad es de " + (valor * 1.05).toFixed(2))
//     console.log (valor)
    
// } else if (producto === "4") {
//     alert ("Elegiste plazo fijo")
//     let valor = prompt ("Ingrese monto de inversion")
//     alert ("Su rentabilidad es de " + (valor * 1.11).toFixed(2))
//     console.log (valor)
    
// }
// } 
// productos ();

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







// function primeraFuncion(){
//     console.log("Uno")
//     console.log("Dos")
//     console.log("Tres")
// }

// // invocacion de funcion
// primeraFuncion()
// primeraFuncion()
// primeraFuncion()




// declaracion de funcion

function funcionQueDevuelveValor(){

    console.log("Uno")
    // return 19;
    console.log("Dos")
    console.log("Tres")
    return "la funcion ha retaornado una cadena de texto"
}

// let valorDeFunction = funcionQueDevuelveValor()

// console.log(valorDeFunction)

// console.log(funcionQueDevuelveValor)

// function saludar(nombre,edad) {
//     console.log(`Hola mi nombre es ${nombre} y tengo ${edad}`)
    
// }

function saludar(nombre = "Desconocido",edad = 0) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad}`)
    
}


// saludar("Joel",30)
// saludar()

funcionDeclarada()

function funcionDeclarada() {
    console.log("Esta es una funcion declarada puede invocarse en cualquier parte de nuestro código, incluso antes de que la funcion sea declarada")
}

funcionDeclarada()


// funcion anónima

// funcionExpresada()


const funcionExpresada = function(){
    console.log("esto es una funcion expresada, es decir se le ha asignado como valor a una variable, si invocamos esta function antes de su definicion JS nos dirá...")
}

funcionExpresada()


// funcionExpresada2()

const funcionExpresada2 = () => {
    console.log("esto es una funcion expresada2222, es decir se le ha asignado como valor a una variable, si invocamos esta function antes de su definicion JS nos dirá...")
}

funcionExpresada2()
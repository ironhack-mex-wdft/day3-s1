let carro = {
    // key: value
    llantas: 4,
    modelo: 2000,
    color: "rojo",
    radio: null,
    aditamentos: {
        aireAcondicionado: true,
        portavasos: {
            color: ["negro", "gris", "blanco"],
            asientos: 2
        }
    }
}

for( let propiedad in carro ){
    // SINTAXIS - SÓLO TRABAJA CON BRACKET NOTATION
    console.log(`La propiedad es: ${propiedad} y su valor ${carro[propiedad]}`)
}

// DOT NOTATION - NOTACIÓN DE PUNTO
console.log(carro.color) // "rojo"
console.log(carro.radio) // null
console.log(carro.llantas) // 4

console.log(carro.aditamentos.portavasos)
console.log(carro.aditamentos.portavasos.asientos)

console.log(carro.aditamentos.portavasos.color[1])

// AGREGAR UNA PROPIEDAD CON DOT NOTATION
carro.cajuela = "Amplia con tapetito"
console.log(carro)


// BRACKET NOTATION - NOTACIÓN DE CORCHETES
let teacher = {
    "teacher Name": {
        "nombre": "Mike",
        "apellido": "Nieva"
    },
    "nacimiento": "México"
}

console.log(teacher["teacher Name"]["apellido"])
console.log(teacher["nacimiento"]) // "México"

// AGREGAR UNA PROPIEDAD CON BRACKET NOTATION
teacher["teacher Name"]["age"] = 33
console.log(teacher)

// let departamento = {
//     recamaras: 3,
//     añoConstr: 2000,
//     m2: 60,
//     modo: [
//         {
//             renta: true,
//             venta: false
//         },
//         {},
//         {},
//         {}
//     ]
// }

// [  ,  ,  , ]


/// OBJECT - IN OPERATOR
// [propiedad a buscar] in [el nombre del objeto]

console.log('llantas' in carro) // true
console.log("color" in carro)
console.log("motor" in carro)

// UPDATE OBJECTS
carro.color = "verde"
console.log(carro)

// UPDATE OBJECTS W/ BRACKETS

teacher["teacher Name"]["nombre"] = "Miguel"
console.log(teacher)

// BORRADO DE PROPIEDADES OBJETOS
delete carro.color



// OBTENER PROPIEDADES EN LISTA
// Genera un arreglo con cada propiedad en el nivel inicial
let licuados = { 
    licuado1: "chocolate" , 
    licuado2: "fresa", 
    licuado3: "platano" 
} 
        // sabor = la representación de cada propiedad
        // menu = el nombre del objeto real
for (let sabor in licuados) {
    console.log (`La propiedad es ${sabor}  y su valor ${licuados[sabor]}`)
} 


// OBJECT.KEYS
// Me da un arreglo de propiedades
console.log(Object.keys(licuados))

// OBJECT.VALUES
// Me da un arreglo de los valores
console.log(Object.values(licuados))


const consolasVideojuegos = {
    consola1: "Xbox",
    consola2: "Nintendo",
}

// consolasVideojuegos = "No hay"
consolasVideojuegos.consola1 = "PS5"

console.log(consolasVideojuegos)
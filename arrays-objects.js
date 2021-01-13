// Arreglo
const students = [
    "Bob",
    "Susy",
    "Ted",
    "Sarah",
    "Bill"
  ];

// console.log(students[0]); // Bob

// Objeto
const bob   = { name: "Bob", age: 17 };
const susy  = { name: "Susy", age: 18 };
const ted   = { name: "Ted", age: 18 };
const sarah = { name: "Sarah", age: 20 };
const bill  = { name: "Bill", age: 19 };

// console.log(bob.name); // <== Bob
// console.log(susy.age); // <== 18

// TIPOS DE DATOS
    // PRIMITIVOS
        // NUMBER, STRING, BOOLEAN, null, undefined
    // NO PRIMITIVOS
        // ARRAY, OBJECT


const estudiantes = [ 
    12, //number
    "Jorge", // string
    true,  // boolean
    ["Mike", 34, null],  // array
    {nombre: "Hugo", nacionalidad: "Mexicana"}  // object
]

const paises = [
    {
        nombre: "México",
        idioma: "Español",
        estados: {
            norte: ["Nuevo León", "Tijuana", "Sonora"],
            centro: [
                {
                    nombre: "CDMX",
                    palabraReservada: "Quesadilla con queso"
                }
            ],
            sur: ["Yucatán"]
        }
    },
    {
        nombre: "Alemania",
        idioma: "Alemán"
    },
    {
        nombre: "Canadá",
        idioma: ["Francés", "Inglés"]
    }
]


console.log(paises[0].estados.centro[0].palabraReservada)


// EMPUJAR OBJETOS HACIA UN ARREGLO
students.push({ name: "Steve", age: 25 });
const bob1 = { name: "Bob", age: 21 };
students.push(bob1);

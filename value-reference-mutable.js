/// VALORES PRIMITIVOS
/// Podemos hacer la referencia sin problema

// let price1 = 20.99;
// let price2 = 20.99;
// console.log(price1 === price2); // => true

// let name1 = 'Ana';
// let name2 = 'Ana';
// console.log(name1 === name2); // => true


let price1 = 20.99;
let price2 = price1;
console.log(price1 === price2); // => true

console.log(price2)

/// VALORES NO PRIMITIVOS

// OBJETO
// const book1 = {
//     author: 'Charlotte Bronte',
// };

// const book2 = book1;

// console.log(book1); // => { author: 'Charlotte Bronte' }
// console.log(book2); // => { author: 'Charlotte Bronte' }

// book1.author = 'Jane Austen';

// console.log(book1); // => { author: 'Jane Austen' }
// console.log(book2); // => { author: 'Jane Austen' }

// book2.author = 'Edith Wharton';

// console.log(book1); // => { author: 'Edith Wharton' }
// console.log(book2); // => { author: 'Edith Wharton' }

/*EJEMPLO */
// object:
const book1 = {
    author: 'Charlotte Bronte',
  };

const book2 = book1; // => copy the book1 into the new object - book2
console.log(book1 === book2); // => true

// array:
const students = ['Ana', 'John', 'Fabio'];
const ironhackers = students;
console.log(students === ironhackers); // => true

console.log(students)
console.log(ironhackers)


/// PARA REALMENTE COPIAR OBJETOS
// 1. OBJECT.ASSIGN()
// Es un método para hacer un "fork" de un objeto
const bookOriginal = {
    author: 'Charlotte Bronte',
  };

const bookFotocopia = Object.assign({},bookOriginal)
console.log(bookFotocopia)

console.log(bookOriginal === bookFotocopia) // False

// 2. for ... in
const book5 = {
    author: 'Charlotte Bronte',
}
const book6 = {}; // => INITIALIZED EMPTY OBJECT

for (let propiedad in book5) {
    book6[propiedad] = book5[propiedad];
}

book5.author = 'William Shakespeare'; // => changed the original

console.log(book5); // => { author: 'William Shakespeare' } ==> changed
console.log(book6); // => { author: 'Charlotte Bronte' } ==> DIDN'T CHANGE



// COMPARACIÓN DE OBJETOS
const estudiante1 = {
    name: "Mike"
}

const estudiante2 = {
    name: "Mike"
}
// LA ÚNICA FORMA DE OBTENER UN TRUE ES POR REFERENCIA
// SI NO ES POR REFERENCIA, UN OBJETO O UN ARREGLO AL EVALUARLOS EN COMPARACIÓN, LES VA A DEVOLVER UN FALSE
console.log(estudiante1 === estudiante2) // False

const estudiante3 = {
    name: "Jorge"
}

const estudiante4 = estudiante3
console.log(estudiante3 === estudiante4) // True

// COPIAR CON ARREGLOS
// Estamos generando una fotocopia (Forked)
// 1. SPREAD OPERATOR

const estudiantesOriginal = ["Rob", "Alejandro", "Dani"]

const estudiantesOriginalYNuevos = [...estudiantesOriginal, "Viviana", "Diego A", "Diego B"]

console.log(estudiantesOriginal)
console.log(estudiantesOriginalYNuevos)




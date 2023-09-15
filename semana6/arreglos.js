const personas1 = ["Pablo", "Juan", "Pedro", "Maria", "Lucia"]
console.log(personas1[3]);

// Push: Agrega un elemento al final del arreglo
personas1.push("Alejandro")


// length: Para contar la cantidad de elementos del arreglo
console.log(personas1.length);
console.log(personas1);

// pop: Elimina el ultimo elemento del arreglo y retorna el elemento eliminado
const eliminado = personas1.pop();
console.log("Personas despues del POP", personas1, eliminado);

// unshift: agrega un elemento al inicio de la lista
personas1.unshift("Primer elemento");
console.log("Personas unshif", personas1);

// shit
personas1.shift()
console.log("Personas shift", personas1);

// for
const numeros = [1,2,3,4,5,6,7,8,9,10];
const producto = 5;
const resultado=[];
const resultado2=[];


for (let i = 0; i < numeros.length; i++) {
    const operacion = numeros[i]*producto;
    resultado.push(operacion)
    
}

console.log("for",resultado);


for (const numero of numeros) {
    resultado2.push(numero*producto)
}

console.log("for of",resultado2);


const palabra = "monitor";

const vocales = ["a", "e", "i", "o", "u"]
let contador = 0
let contador2 = 0
let letraActual = ""

for (const letra of palabra) {
  for (const vocal of vocales) {
    if (letra == vocal) {
      contador++ 
    }
  }
}

for (const letra of palabra) {
  if (!"aeiou".includes(letra)) {
    contador2++
  }
}

console.log("contador", contador)
console.log("contador2", contador2)

// map
// forEach

// Map retorna un array y ForEach solo itera

// Ejemplo de calculadora
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map Retorna el array donde a cada elemento de numeros lo ha
// multiplicado * 
const resultado3 = numeros.map(function (numerito) {
  return numerito * 5
})

console.log(resultado3)

const personas = [
    {
      name: "Pedro",
      lastname: "Peres",
      age: 21
    },
    {
      name: "Juan",
      lastname: "Zapata",
      age: 22
    },
    {
      name: "Maria",
      lastname: "Gonzales",
      age: 25
    }
  ]
  
  // Reto solo quiero obtener los nombres de las personas y guardarlos en un array
  const nombres = personas.map((persona) => persona.name)

  const ages = personas.map((persona) => persona.age * 10)
// ahora quier las edades pero multiplicas x 10
// '[21, 22, 25]'
// '[210, 220, 250]'
console.log(ages)
  
  console.log(nombres)

  function calcular(n1, n2) {
    return n1 + n2
  }
  
  const calcular2 = (n1, n2) => {
    return n1 + n2
  }
  
  // Si solo tenemos una linea dentro de la funcion esta puede abreviarse
  const calcular3 = (n1, n2) => n1 + n2
  
  const division = (n1, n2) => {
    if (n2 === 0) return "No valido"
    return n1 / n2
  }
  
  calcular2(1, 2)
  calcular2(2, 3)

  const esPar = (numero) => {
    if (numero % 2 === 0) {
      return true
    } else {
      return false
    }
  }

  const nombre = undefined
const edad = 18
console.log(nombre ?? "Nombre no encontrado")
console.log(nombre ? nombre : "Nombre no encontrado")
console.log(edad >= 18 ? "Es mayor de Edad" : "Es menor de edad")

// Crear una funcion que reciba un numero es indique si es par, esta retorna true si no false

// Nivel 1
const esPar1 = (numero) => {
    if (numero % 2 === 0) {
      return true
    } else {
      return false
    }
  }
  
  // Nivel 2
  const esParSilvia1 = (numero) => {
    if (numero % 2 === 0) return true
    return false  
  }
  
  const nombre1 = undefined
  const edad1 = 18
  // Nulish coelscing operator ??
  console.log(nombre1 ?? "Nombre no encontrado")
  // Operador ternario true ? si : no
  console.log(nombre1 ? nombre1 : "Nombre no encontrado")
  console.log(edad1 >= 18 ? "Es mayor de Edad" : "Es menor de edad")
  
  const esParJose = (num) => num % 2 === 0 ? true : false
  
  const esParRel = numero => numero % 2 === 0
  esParRel(20)

  // filter
// find
const numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filtras los numeros que sea multiplo de 3
// filter: retorna un array con el filtro
const numerosFiltrados = numeros5.filter((numer) => numer % 3 === 0)

const numerosFiltrados2 = numeros5.filter((numer) => {
  return numer % 3 === 0
})

const numerosFiltrados3 = numeros5.filter(function(numer) {
  if(numer % 3 === 0) {
    return numer
  }
})

console.log(numerosFiltrados)
console.log(numerosFiltrados2)
console.log(numerosFiltrados3)

const nombre = 'Marcos';
const apellido = 'Arellano';
const dni = '70033520';


const datos = nombre + " " + apellido + " " + dni
const datos2 = `Datos: ${nombre} ${apellido} ${dni}`

// Formas de consola
console.log("Concatenacion", datos);
console.log("tempate string", datos2);
console.log("Info");
console.warn("Warn");
console.error("Error");

//operadores matematicos

console.log("Suma1", 2+2);
console.log("Suma2", 2+"2");
console.log("Resta1", 20 - 10);
console.log("Resta2",20-"5");
console.log("Division1",1300/5);
console.log("Division2", 1300/"5");
console.log("Multiplicacion", 20*6);
console.log("Residio MOOD", 40%5);
console.log("Residio MOOD", 40/3);
console.log("Raiz cuadrada", Math.sqrt(100));
console.log("Potencia", Math.pow(4, 0.5));
console.log("Potencia", 4**2);
console.log("PI", Math.PI);

// Operadores de compracion retornan un boolean (true/fale)
//Igualdad
//doble igual solo compara el valor
console.log(2=="2");
//triple igual compara el valor y el tipo de dato
console.log(2==="2");
//diferencia
console.log("Diferencia1", 2!="2");
//
console.log("Diferencia2",2!=="2");
//mayor menor..
console.log(100>10);
console.log(10>100);
console.log(10<100);
console.log(100<10);
console.log(101>=100);
console.log(101<=100);

//condicionales
console.log("====== Condicionales ======");

let edad =15;
if(edad>=18){
    console.log("La persona es mayor de edad");
}else{
    console.log("la persona es menor de edad");
}


const numero=Number("21") //prompt("Escribe un numero");

console.log(typeof Number(numero));

if (Number(numero)%2===0) {
    console.log("el numero es par");
} else {
    console.log("el numero es impar");
}

if (numero>10 && numero<20 && typeof numero==="number") {
    console.log("Este numero esta entre 10 y 20");
}else{
    console.log("No cumple las condiciones");
}

if (numero>10 || numero<20 || typeof numero==="number") {
    console.log("Este numero cumple alguna condicion");
}else{
    console.log("No cumple las condiciones");
}

console.log("======= Fecha ======");
const fecha = new Date();
const hora = fecha.getHours()

if (hora<12) {
    console.log("Buenos días");
}else if (hora<18) {
    console.log("Buenas tardes");
}else if (hora<20) {
    console.log("Buenas tardes en argentina");
} else{
    console.log("Buenas noches");
}
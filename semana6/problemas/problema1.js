
// for (let i = 1; i <= 100; i++) {
//     if (i%15===0) {
//         console.log("fizzbuzz");
//     }else if (i%3===0) {
//     console.log("fizz");
//    } else if (i%5===0) {
//     console.log("buzz");
//    }else{
//     console.log(i);
//    }
// }

function validatefizzbuzz(numero) {
    const m3 = numero%3===0;
    const m5 = numero%5===0;
    const m15 = numero%15===0;

    const respuesta = m15 ? "fizzbuzz":m3 ? "fizz": m5 ? "buzz": numero;

    return respuesta

}

for(i=1; i<=100;i++){
    console.log(validatefizzbuzz(i));
}


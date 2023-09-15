//bloque de codigo que hara algo

//Recomendaciones
//* El nombre de la funcion sea un verbo infinitivo (ar,er,....)
// Recibir
// numero1=n1
// numero2=n2
// operador =+-*

function calcular(n1,n2,operador) {
    if (operador==="+") {
        return n1+n2
    }else if (operador==="-") {
        return n1-n2
    }else if (operador==="*") {
        return n1*n2
    }else if (operador==="/") {
        if (n2 !== 0) {
            return n1/n2
        }else{
            return "No es posible dividir entre cero"
        }
    }else{
        return "Operador no identificado/valido"
    }
}

function calcular2(n1,n2,operador) {
    if (operador==="+") return n1+n2
    if (operador==="-") return n1-n2
    if (operador==="*") return n1*n2

    if (operador==="/") {
        if (n2 !== 0) {
            return n1/n2
        }else{
            return "No es posible dividir entre cero"
        }
    }else{
        return "Operador no identificado/valido"
    }
}

function calcular3(n1,n2,operador) {
    if (n2===0 && operador==="/") return "No es posible dividir entre 0"
        
    const operaciones = {
        "+": n1+n2,
        "-": n1-n2,
        "*": n1*n2,
        "/": n1/n2,
        "Potencia":n1**n2
    }

    return operaciones[operador] ??"Operacion no valida";
}

//siempre debemos llamar a la funcion
console.log(calcular3(23,45,"+"));
console.log(calcular3(18,22,"/"));
console.log(calcular3(18,22,")"));
console.log(calcular3(2,5,"Potencia"));

function calcular4(n1,n2,operador) {
    try{
        return eval(`${n1}${operador}${n2}`)==Infinity
            ? "Operacion No valida"
            :eval(`${n1}${operador}${n2}`);
    }catch (err){
        return err
    }
}

function calcular5(n1, n2, operador) {
    try {
      const res = eval(`${n1}${operador}${n2}`);
      return isFinite(res) ? res : "Operacion No valida";
    } catch (err) {
      return err;
    }
  }
const form = document.querySelector("#form-register")
const button = document.querySelector("button");

function setStyleToButton(validate) {
    if (validate) {
      // activar boton
      button.classList.remove("bg-purple-800/50", "cursor-no-drop");
      button.classList.add("bg-purple-800", "cursor-pointer");
      button.removeAttribute("disabled");
    } else {
      // deshabilitar boton
      button.classList.remove("bg-purple-800", "cursor-pointer");
      button.classList.add("bg-purple-800/50", "cursor-no-drop");
      button.setAttribute("disabled", true);
    }
  }

function verifyIfAllInputsAreNotEmpty() {
    // traer todos los inputs
    const inputs = document.querySelectorAll("input");

    const validate =
        Array.from(inputs)
        .map((input) => input.value)
        .filter((value) => value).length === 4;

    setStyleToButton(validate);

    // const inputValues = {};
  
    // for (const input of inputs) {
    //   inputValues[input.name] = input.value;
    // }
  
    // const validate =
    //   Object.values(inputValues).filter((value) => value).length === 4;
  }

function verifyIfEmptyInput(element) {

    verifyIfAllInputsAreNotEmpty()

    const ifPAfterInput = document.querySelector(`#${element.name}`);

    if (element.value.length >0) {
        element.classList.remove("border", "border-red-500")
        if (ifPAfterInput) ifPAfterInput.remove()
    }else{
        if (element.dataset.validation ==="false") return;

        element.classList.add("border", "border-red-500")

        if (!ifPAfterInput) {
            const p = document.createElement("p"); // <p></p>
            p.textContent = "Completa este campo"; // <p>Completa este campo</p>
            p.setAttribute("id", element.name); // <p id="full-name">Completa este campo</p>
            p.classList.add("mt-1", "text-xs", "text-red-500");
            element.after(p);
        }
        
        
    }
}

// los eventos tiene un sentido especial y unico
// onsubmit tiene parametro llamado event

form.onsubmit = function (event){

    event.preventDefault();

    const inputs= this.querySelectorAll("input");

    const values ={}
    
    for (const input of inputs) {
        values[input.name] =input.value
        verifyIfEmptyInput(input)
    }

    // vamos a guardar los valores del objeto en un array y verificar si alguno esta vacio

    const inputValues = Object.values("values");

    const validacion = inputValues.find((value)=>!value);
    
    console.log(typeof validacion);

    
    

    if (typeof validacion === "string") {
        alert("Completo todos los campos");
        return;
    }

}
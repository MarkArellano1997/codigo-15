//vamos a cambiar el color del body

//paso 1 podemos obtener un elemento desde js

const cuerpoDeLaWeb = document.getElementsByTagName("body")

console.log("getElementsByTagName", cuerpoDeLaWeb[0]);

const body = document.querySelector("body")

console.log("querySelector", body);

// cuerpoDeLaWeb2.style.backgroundColor = "red"
// cuerpoDeLaWeb2.style.fontSize = "30px"

body.style.cssText=`
background-color: green;
font-size: 20px;
`

const secondaryTitles = document.getElementsByTagName("h2")

for (const item of secondaryTitles) {
    console.log(item);
}

console.log("--------");

const secondaryTitles2 = document.querySelectorAll("h2")
secondaryTitles2.forEach((item)=>{
    console.log(item);
})

// obtener elemento por ID

// antigua
const title = document.getElementById("title");

// moderna
const title2 = document.querySelector("#title");

// obtener elemento por class
// antigua
const imageAvengers = document.getElementsByClassName("img-avengers");
console.log(imageAvengers);

// moderna
const imageAvengers2= document.querySelector(".img-avengers");

const btnChangeWeb = document.querySelector("#btn-change-web")

btnChangeWeb.onclick = function () {

    imageAvengers2.src = "https://i.blogs.es/1f665b/dragon-ball-super-broly_img2/1366_2000.jpeg"

    imageAvengers2.style.cssText = `
    width: 200px;
    `

    title2.textContent = "Dragon Ball"
};
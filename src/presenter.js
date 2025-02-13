import saludar from "./saludar";
import obtenerSaludoHora from "./hora"; 
import obtenerEdad from "./edad"; 


const second = document.querySelector("#segundo-numero");

const form = document.querySelector("#saludar-form");
const form2 = document.querySelector("#nombre-form");
const form3 = document.querySelector("#hora-form");
const form4 = document.querySelector("#name-gender-form");
const form5 = document.querySelector("#age-form");
const form6 = document.querySelector("#lenguaje-form");


const div = document.querySelector("#resultado-saludar");
const div2 = document.querySelector("#resultado-nombre");
const div3 = document.querySelector("#resultado-hora");
const div4 = document.querySelector("#resultado-genero");
const div5 = document.querySelector("#resultado-edad");
const div6 = document.querySelector("#resultado-lenguaje");

const horaDiv = document.querySelector("#hora-actual");
const botonHora = document.querySelector("#actualizar-hora");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p>" + saludar() + "</p>";
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  div2.innerHTML = `<p>Hola ${nombre}</p>`;
});

form3.addEventListener("submit", (event) => {
  event.preventDefault();
  div3.innerHTML = "<p>" + obtenerSaludoHora() + "</p>";
});

form4.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombregen = document.querySelector("#nombre-gender").value;
  const genero = document.querySelector("#genero").value;
  
  div4.innerHTML = `<p>Hola ${nombregen} de genero: ${genero} </p>`;
});

form5.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombregen = document.querySelector("#nombre-gender2").value;
  const genero2 = document.querySelector("#genero2").value;
  const edad = document.querySelector("#edad").value;
  if(edad>30)
  {
    div5.innerHTML = "<p>Hola " + obtenerEdad(edad, genero2) +  nombregen + " de genero: " + genero2 + "</p>";
  }
  else
  {
    div5.innerHTML = "<p>Hola " +  nombregen + " de genero: " + genero2 + "</p>";
  }
  
});

form6.addEventListener("submit", (event) => {
  event.preventDefault();

  const idioma = document.querySelector("#idioma").value;
  div6.innerHTML = "<p>" + obtenerSaludoIdioma(idioma) + "</p>";
});
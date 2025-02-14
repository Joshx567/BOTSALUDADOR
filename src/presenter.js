import saludar from "./saludar";
import obtenerSaludoHora from "./hora"; 
import obtenerEdad from "./edad"; 
import obtenerSaludoIdioma from "./lenguaje";
import SaludoCompleto from "./saludocompleto";

const form = document.querySelector("#saludar-form");
const form2 = document.querySelector("#nombre-form");
const form3 = document.querySelector("#hora-form");
const form4 = document.querySelector("#name-gender-form");
const form5 = document.querySelector("#age-form");
const form6 = document.querySelector("#lenguaje-form");
const form7 = document.querySelector("#complete-form");

const div = document.querySelector("#resultado-saludar");
const div2 = document.querySelector("#resultado-nombre");
const div3 = document.querySelector("#resultado-hora");
const div4 = document.querySelector("#resultado-genero");
const div5 = document.querySelector("#resultado-edad");
const div6 = document.querySelector("#resultado-lenguaje");
const div7 = document.querySelector("#resultado-formulario-completo");

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
  
  div4.innerHTML = `<p>Hola ${nombregen} de género: ${genero} </p>`;
});

form5.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.querySelector("#nombre-gender2").value;
  const genero = document.querySelector("#genero2").value;
  const edad = parseInt(document.querySelector("#edad").value, 10);
  if(edad>30)
  {
    div5.innerHTML = "<p>Hola " + obtenerEdad(edad, genero) +  nombre + " de genero: " + genero + "</p>";
  }
  else
  {
    div5.innerHTML = "<p>Hola " +  nombre + " de genero: " + genero + "</p>";
  }
  
});

form6.addEventListener("submit", (event) => {
  event.preventDefault();
  const idioma = document.querySelector("#idioma").value;
  div6.innerHTML = "<p>" + obtenerSaludoIdioma(idioma) + "</p>";
});

form7.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.querySelector("#nombre-gender7").value;
  const genero = document.querySelector("#genero7").value;
  const edad = parseInt(document.querySelector("#edad7").value, 10);
  const idioma = document.querySelector("#idioma7").value;
  const hora = new Date().getHours(); // Obtiene la hora actual del PC

  div7.innerHTML = "<p>" + SaludoCompleto(nombre, genero, edad, idioma, hora) + "</p>";
});

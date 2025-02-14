function obtenerSaludoIdioma(lenguaje) {
    
    if(lenguaje == "spanish")
        {
          saludo = "Saludos desde la pagina web";
        }
        if(lenguaje == "english")
        {
          saludo = "Greetings from the website";
        }

    return saludo;
}

  export default obtenerSaludoIdioma;
    
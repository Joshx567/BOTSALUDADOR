function obtenerSaludoHora() {
    let hora = new Date().getHours(); // Obtiene la hora actual del PC
    let saludo;

    if (hora >= 5 && hora < 12) {
        saludo = "¡Buenos días!";
    } else if (hora >= 12 && hora < 18) {
        saludo = "¡Buenas tardes!";
    } else {
        saludo = "¡Buenas noches!";
    }

    return saludo;
}

  export default obtenerSaludoHora;
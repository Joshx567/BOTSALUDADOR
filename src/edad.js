function obtenerEdad(edad, genero) {
    
    if (edad > 30) 
    {
        if((genero == "masculino") )
        {
            saludo = "Sr. ";
        }
        if((genero == "femenino") )
        {
            saludo = "Sra. ";
        }
    } 

    return saludo;
}

  export default obtenerEdad;
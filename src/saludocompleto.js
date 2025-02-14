function SaludoCompleto(nombre, genero, edad, idioma, hora) 
{    
    if(idioma == "spanish")
    {
        if(edad>30)
        {
            if(genero == "femenino")
            {
                if(hora >= 5 && hora < 12) 
                    {
                        saludo = "Buenos dias Sra "+ nombre;
                    }
                    else if (hora >= 12 && hora < 18)
                    {
                        saludo = "Buenas tardes Sra "+ nombre;
                    }
                    else {
                        saludo = "Buenas noches Sra "+ nombre;
                    }
            }
            else if(genero == "masculino")
            {
                if(hora >= 5 && hora < 12) 
                    {
                        saludo = "Buenos dias Sr "+ nombre;
                    }
                    else if (hora >= 12 && hora < 18)
                    {
                        saludo = "Buenas tardes Sr "+ nombre;
                    }
                    else {
                        saludo = "Buenas noches Sr "+ nombre;
                    }
            }
        }
        else
        {
            if(genero == "femenino")
                {
                    if(hora >= 5 && hora < 12) 
                        {
                            saludo = "Buenos dias "+ nombre;
                        }
                        else if (hora >= 12 && hora < 18)
                        {
                            saludo = "Buenas tardes "+ nombre;
                        }
                        else {
                            saludo = "Buenas noches "+ nombre;
                        }
                }
            else if(genero == "masculino")
            {
                    if(hora >= 5 && hora < 12) 
                        {
                            saludo = "Buenos dias "+ nombre;
                        }
                        else if (hora >= 12 && hora < 18)
                        {
                            saludo = "Buenas tardes "+ nombre;
                        }
                        else {
                            saludo = "Buenas noches "+ nombre;
                        }
            }
        }
    }
    if(idioma == "english")
    {
        if(edad>30)
            {
                if(genero == "femenino")
                {
                    if(hora >= 5 && hora < 12) 
                        {
                            saludo = "Good morning Madam "+ nombre;
                        }
                        else if (hora >= 12 && hora < 18)
                        {
                            saludo = "Good afternoon Madam "+ nombre;
                        }
                        else {
                            saludo = "Good evening Madam "+ nombre;
                        }
                }
                else if(genero == "masculino")
                {
                    if(hora >= 5 && hora < 12) 
                        {
                            saludo = "Good morning Sr "+ nombre;
                        }
                        else if (hora >= 12 && hora < 18)
                        {
                            saludo = "Good afternoon Sr "+ nombre;
                        }
                        else {
                            saludo = "Good evening Sr "+ nombre;
                        }
                }
            }
            else
            {
                if(genero == "femenino")
                    {
                        if(hora >= 5 && hora < 12) 
                            {
                                saludo = "Good morning "+ nombre;
                            }
                            else if (hora >= 12 && hora < 18)
                            {
                                saludo = "Good afternoon "+ nombre;
                            }
                            else {
                                saludo = "Good evening "+ nombre;
                            }
                    }
                    else if(genero == "masculino")
                    {
                        if(hora >= 5 && hora < 12) 
                            {
                                saludo = "Good morning "+ nombre;
                            }
                            else if (hora >= 12 && hora < 18)
                            {
                                saludo = "Good afternoon "+ nombre;
                            }
                            else {
                                saludo = "Good evening "+ nombre;
                            }
                    }
            }
    }

    return saludo;
}

  export default SaludoCompleto;
    
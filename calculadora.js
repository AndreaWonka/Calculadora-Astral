// Función para determinar el signo zodiacal basado en la fecha de nacimiento
function obtenerSignoZodiacal(fechaNacimiento) {
    const fecha = new Date(fechaNacimiento);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Los meses en JavaScript van de 0 a 11

    if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
        return "Acuario";
    } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
        return "Piscis";
    } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
        return "Aries";
    } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
        return "Tauro";
    } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
        return "Géminis";
    } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
        return "Cáncer";
    } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
        return "Leo";
    } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
        return "Virgo";
    } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
        return "Libra";
    } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
        return "Escorpio";
    } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
        return "Sagitario";
    } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
        return "Capricornio";
    }
}

// Función para determinar el ascendente y descendente basado en el signo zodiacal
function obtenerAscendenteDescendente(signo) {
    const ascendentesDescendentes = {
        "Aries": { ascendente: "Libra", descendente: "Aries" },
        "Tauro": { ascendente: "Escorpio", descendente: "Tauro" },
        "Géminis": { ascendente: "Sagitario", descendente: "Géminis" },
        "Cáncer": { ascendente: "Capricornio", descendente: "Cáncer" },
        "Leo": { ascendente: "Acuario", descendente: "Leo" },
        "Virgo": { ascendente: "Piscis", descendente: "Virgo" },
        "Libra": { ascendente: "Aries", descendente: "Libra" },
        "Escorpio": { ascendente: "Tauro", descendente: "Escorpio" },
        "Sagitario": { ascendente: "Géminis", descendente: "Sagitario" },
        "Capricornio": { ascendente: "Cáncer", descendente: "Capricornio" },
        "Acuario": { ascendente: "Leo", descendente: "Acuario" },
        "Piscis": { ascendente: "Virgo", descendente: "Piscis" }
    };

    return ascendentesDescendentes[signo];
}

// Función principal que se ejecuta cuando se hace clic en el botón de "Calcular"
function calcularAscendenteDescendente() {
    // Obtener los valores de los campos de entrada
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const horaNacimiento = document.getElementById("horaNacimiento").value;
    const lugarNacimiento = document.getElementById("lugarNacimiento").value;

    // Obtener el signo zodiacal basado en la fecha de nacimiento
    const signo = obtenerSignoZodiacal(fechaNacimiento);

    // Obtener el ascendente y descendente basado en el signo zodiacal
    const { ascendente, descendente } = obtenerAscendenteDescendente(signo);

    // Mostrar el resultado en la página
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Signo Zodiacal: ${signo}</p>
        <p>Ascendente: ${ascendente}</p>
        <p>Descendente: ${descendente}</p>
    `;
}

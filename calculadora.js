// Función para determinar el signo zodiacal basado en la fecha de nacimiento
function obtenerSignoZodiacal(fechaNacimiento) {
    const fecha = new Date(fechaNacimiento); // Convertir la fecha de nacimiento a un objeto Date
    const dia = fecha.getDate(); // Obtener el día de la fecha
    const mes = fecha.getMonth() + 1; // Obtener el mes de la fecha (los meses en JavaScript van de 0 a 11, por eso se suma 1)

    // Array de objetos que representan los signos zodiacales y sus rangos de fechas
    const signos = [
        { signo: "Capricornio", desde: { mes: 12, dia: 22 }, hasta: { mes: 1, dia: 19 } },
        { signo: "Acuario", desde: { mes: 1, dia: 20 }, hasta: { mes: 2, dia: 18 } },
        { signo: "Piscis", desde: { mes: 2, dia: 19 }, hasta: { mes: 3, dia: 20 } },
        { signo: "Aries", desde: { mes: 3, dia: 21 }, hasta: { mes: 4, dia: 19 } },
        { signo: "Tauro", desde: { mes: 4, dia: 20 }, hasta: { mes: 5, dia: 20 } },
        { signo: "Géminis", desde: { mes: 5, dia: 21 }, hasta: { mes: 6, dia: 20 } },
        { signo: "Cáncer", desde: { mes: 6, dia: 21 }, hasta: { mes: 7, dia: 22 } },
        { signo: "Leo", desde: { mes: 7, dia: 23 }, hasta: { mes: 8, dia: 22 } },
        { signo: "Virgo", desde: { mes: 8, dia: 23 }, hasta: { mes: 9, dia: 22 } },
        { signo: "Libra", desde: { mes: 9, dia: 23 }, hasta: { mes: 10, dia: 22 } },
        { signo: "Escorpio", desde: { mes: 10, dia: 23 }, hasta: { mes: 11, dia: 21 } },
        { signo: "Sagitario", desde: { mes: 11, dia: 22 }, hasta: { mes: 12, dia: 21 } }
    ];

    // Encontrar y devolver el signo zodiacal correspondiente
    return signos.find(s =>
        (mes === s.desde.mes && dia >= s.desde.dia) || 
        (mes === s.hasta.mes && dia <= s.hasta.dia)
    )?.signo || null; // Si no se encuentra el signo, devolver null
}

// Función para determinar el ascendente y descendente basado en el signo zodiacal
function obtenerAscendenteDescendente(signo) {
    // Objeto que contiene los ascendentes y descendentes para cada signo zodiacal
    const ascendentesDescendentes = {
        "Aries": {
            ascendente: "Libra",
            descendente: "Aries",
            descripcion: "Relaciones: Buscas equilibrio y armonía en tus relaciones. Te atraen personas justas y diplomáticas. Parejas y Asociaciones: Prefieres relaciones que te permitan mantener tu independencia mientras encuentras un equilibrio justo y armonioso."
        },
        "Tauro": {
            ascendente: "Escorpio",
            descendente: "Tauro",
            descripcion: "Relaciones: Valoras la profundidad y la intensidad emocional en tus relaciones. Te atraen personas apasionadas y leales. Parejas y Asociaciones: Buscas relaciones que sean transformadoras y que te permitan explorar emociones profundas."
        },
        // Continúa con todas las entradas para otros signos de forma similar
        "Piscis": {
            ascendente: "Virgo",
            descendente: "Piscis",
            descripcion: "Relaciones: Buscas orden y practicidad en tus relaciones. Te atraen personas detallistas y serviciales. Parejas y Asociaciones: Prefieres relaciones que te brinden estructura y que te ayuden a mantener los pies en la tierra mientras exploras tu creatividad."
        }
    };

    // Devolver el ascendente y descendente correspondiente al signo
    return ascendentesDescendentes[signo];
}

// Función principal que se ejecuta cuando se hace clic en el botón de "Calcular"
function calcularAscendenteDescendente() {
    const fechaNacimiento = document.getElementById("fechaNacimiento").value; // Obtener la fecha de nacimiento del input
    if (!fechaNacimiento) { // Verificar si la fecha de nacimiento no está vacía
        alert("Por favor, introduce tu fecha de nacimiento."); // Mostrar un mensaje de alerta si está vacía
        return; // Salir de la función
    }

    const signo = obtenerSignoZodiacal(fechaNacimiento); // Obtener el signo zodiacal basado en la fecha de nacimiento
    if (!signo) { // Verificar si el signo zodiacal es válido
        alert("Fecha de nacimiento inválida. Por favor, intenta de nuevo."); // Mostrar un mensaje de alerta si es inválida
        return; // Salir de la función
    }

    // Obtener el ascendente y descendente basado en el signo zodiacal
    const { ascendente, descendente, descripcion } = obtenerAscendenteDescendente(signo);

    console.log("Fecha Nacimiento:", fechaNacimiento);
    console.log("Signo Zodiacal:", signo);
    console.log("Ascendente:", ascendente, "Descendente:", descendente);

    // Mostrar los resultados en el div de resultados
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Signo Zodiacal: ${signo}</p>
        <p>Ascendente: ${ascendente}</p>
        <p>Descendente: ${descendente}</p>
        <p>Descripción: ${descripcion}</p>
    `;
}

// Añadir el evento de clic al botón para calcular el ascendente y descendente
document.getElementById("botonCalcular").addEventListener("click", calcularAscendenteDescendente);
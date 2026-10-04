

let idiomaModulo1 = "es";
let idiomaModulo2 = "es";
let idiomaModulo3 = "es";
let idiomaModulo4 = "es";
let idiomaModulo5 = "es";
let idiomaModulo3Pomodoro = "es";


function cambiarTexto(id, texto) {
    const elemento = document.getElementById(id);

    if (elemento) {
        elemento.textContent = texto;
    }
}


function cambiarHTML(id, contenido) {
    const elemento = document.getElementById(id);

    if (elemento) {
        elemento.innerHTML = contenido;
    }
}



function traducirSubmenu(prefijo, idioma) {

    const nombresEspanol = [
        "Módulo 1",
        "Módulo 2",
        "Módulo 3",
        "Módulo 4",
        "Módulo 5"
    ];

    const nombresIngles = [
        "Module 1",
        "Module 2",
        "Module 3",
        "Module 4",
        "Module 5"
    ];

    const nombres =
        idioma === "en" ? nombresIngles : nombresEspanol;

    for (let i = 1; i <= 5; i++) {

        cambiarTexto(
            prefijo + i,
            nombres[i - 1]
        );
    }


    const submenu = document.querySelector(".submenu");

    if (submenu) {

        const enlaces = submenu.querySelectorAll("a");

        enlaces.forEach(function(enlace, indice) {

            if (indice < 5) {
                enlace.textContent = nombres[indice];
            }

        });
    }
}



function mostrarInformacion(tipo) {

    const informacion = document.getElementById("informacion");

    if (!informacion) {
        return;
    }

    if (idiomaModulo1 === "en") {

        if (tipo === "equilibrio") {

            informacion.innerHTML =
                "<strong>⚖️ Balanced use:</strong><br>" +
                "Balanced use means organizing your screen time while also making time for rest, study and other activities.";

        }

        else if (tipo === "salud") {

            informacion.innerHTML =
                "<strong>💙 Health and wellbeing:</strong><br>" +
                "Taking care of digital wellbeing also means getting enough rest, maintaining good posture and avoiding excessive device use.";

        }

        else if (tipo === "vida") {

            informacion.innerHTML =
                "<strong>🌱 Personal life and study:</strong><br>" +
                "Technology should complement our lives and not replace personal, family, academic and social activities.";
        }

    }

    else {

        if (tipo === "equilibrio") {

            informacion.innerHTML =
                "<strong>⚖️ Uso equilibrado:</strong><br>" +
                "El uso equilibrado significa organizar el tiempo frente a las pantallas y también dedicar tiempo al descanso, el estudio y otras actividades.";

        }

        else if (tipo === "salud") {

            informacion.innerHTML =
                "<strong>💙 Salud y bienestar:</strong><br>" +
                "Cuidar el bienestar digital también implica descansar adecuadamente, mantener una buena postura y evitar el uso excesivo de dispositivos.";

        }

        else if (tipo === "vida") {

            informacion.innerHTML =
                "<strong>🌱 Vida personal y estudio:</strong><br>" +
                "La tecnología debe complementar nuestra vida y no reemplazar las actividades personales, familiares, académicas y sociales.";
        }
    }
}




let respuestas = {};

function seleccionarRespuesta(pregunta, respuesta, boton) {

    respuestas[pregunta] = respuesta;

    const botones =
        boton.parentElement.querySelectorAll("button");

    botones.forEach(function(botonActual) {
        botonActual.classList.remove("seleccionado");
    });

    boton.classList.add("seleccionado");

    if (
        respuestas[1] &&
        respuestas[2] &&
        respuestas[3]
    ) {

        let puntos = 0;

        if (respuestas[1] === "poco") {
            puntos++;
        }

        if (respuestas[2] === "poco") {
            puntos++;
        }

        if (respuestas[3] === "poco") {
            puntos++;
        }

        const resultado =
            document.getElementById("resultado-test");

        if (!resultado) {
            return;
        }

        if (idiomaModulo1 === "en") {

            if (puntos === 3) {

                resultado.innerHTML =
                    "<strong>Your result: 3/3</strong><br>" +
                    "Excellent! You have quite balanced digital habits.<br>" +
                    "Tip: keep maintaining moments of rest and disconnection.";

            }

            else if (puntos === 2) {

                resultado.innerHTML =
                    "<strong>Your result: 2/3</strong><br>" +
                    "You're doing well! You have good habits, but there are still some areas you can improve.<br>" +
                    "Tip: try to better organize your study and rest time.";

            }

            else {

                resultado.innerHTML =
                    "<strong>Your result: " + puntos + "/3</strong><br>" +
                    "You can improve your digital habits.<br>" +
                    "Tip: establish schedules for screen use and avoid distractions while studying.";
            }

        }

        else {

            if (puntos === 3) {

                resultado.innerHTML =
                    "<strong>Tu resultado: 3/3</strong><br>" +
                    "¡Excelente! Tienes hábitos digitales bastante equilibrados.<br>" +
                    "Consejo: continúa manteniendo espacios de descanso y desconexión.";

            }

            else if (puntos === 2) {

                resultado.innerHTML =
                    "<strong>Tu resultado: 2/3</strong><br>" +
                    "¡Vas bien! Tienes buenos hábitos, pero todavía puedes mejorar algunos.<br>" +
                    "Consejo: intenta organizar mejor tus momentos de estudio y descanso.";

            }

            else {

                resultado.innerHTML =
                    "<strong>Tu resultado: " + puntos + "/3</strong><br>" +
                    "Puedes mejorar tus hábitos digitales.<br>" +
                    "Consejo: establece horarios para el uso de pantallas y evita distracciones durante el estudio.";
            }
        }
    }
}




function mostrarBeneficio(habito) {

    const resultado =
        document.getElementById("resultado-beneficio");

    if (!resultado) {
        return;
    }

    if (idiomaModulo1 === "en") {

        if (habito === "descanso") {

            resultado.innerHTML =
                "<strong>😴 Sleep well:</strong><br>" +
                "Getting enough sleep helps recover energy, improve concentration and maintain better wellbeing during the day.";

        }

        else if (habito === "pausas") {

            resultado.innerHTML =
                "<strong>📵 Take breaks:</strong><br>" +
                "Taking breaks while using screens helps reduce eye strain and allows you to regain concentration.";

        }

        else if (habito === "familia") {

            resultado.innerHTML =
                "<strong>👨‍👩‍👧 Screen-free time:</strong><br>" +
                "Spending time without devices encourages communication, personal relationships and balance between digital and everyday life.";
        }

    }

    else {

        if (habito === "descanso") {

            resultado.innerHTML =
                "<strong>😴 Dormir bien:</strong><br>" +
                "Dormir adecuadamente ayuda a recuperar energía, mejorar la concentración y mantener un mejor bienestar durante el día.";

        }

        else if (habito === "pausas") {

            resultado.innerHTML =
                "<strong>📵 Hacer pausas:</strong><br>" +
                "Tomar descansos durante el uso de pantallas ayuda a reducir el cansancio visual y permite recuperar la concentración.";

        }

        else if (habito === "familia") {

            resultado.innerHTML =
                "<strong>👨‍👩‍👧 Tiempo sin pantallas:</strong><br>" +
                "Compartir momentos sin dispositivos favorece la comunicación, las relaciones personales y el equilibrio entre la vida digital y la vida cotidiana.";
        }
    }
}




function cambiarIdiomaModulo1(idioma) {

    idiomaModulo1 = idioma;

    if (idioma === "en") {

        cambiarTexto("menu-inicio", "Home");
        cambiarTexto("menu-modulos", "Modules ▾");
        cambiarTexto("menu-creditos", "Credits");

        cambiarTexto("m1-menu-inicio", "Home");
        cambiarTexto("m1-menu-modulos", "Modules ▾");
        cambiarTexto("m1-menu-creditos", "Credits");

        traducirSubmenu("submenu-modulo", "en");
        traducirSubmenu("m1-submenu-modulo", "en");

        cambiarTexto("etiqueta-modulo1", "MODULE 1");
        cambiarTexto("m1-etiqueta", "MODULE 1");

        cambiarTexto(
            "titulo-modulo1",
            "What is digital wellbeing?"
        );

        cambiarTexto(
            "m1-titulo",
            "What is digital wellbeing?"
        );

        cambiarTexto(
            "descripcion-modulo1",
            "Digital wellbeing means maintaining a healthy and balanced relationship with technology. It does not mean stopping the use of devices, but learning to use them in a way that benefits our lives, studies, rest and relationships."
        );

        cambiarTexto(
            "m1-elementos-titulo",
            "Discover the elements of digital wellbeing"
        );

        cambiarTexto(
            "m1-tarjetas-titulo",
            "Discover the elements of digital wellbeing"
        );

        cambiarTexto(
            "m1-tarjetas-instruccion",
            "Click on each card to learn more."
        );

        cambiarTexto(
            "m1-tarjeta1",
            "Balanced use"
        );

        cambiarTexto(
            "m1-tarjeta1-desc",
            "Learn to better organize the time you spend in front of screens."
        );

        cambiarTexto(
            "m1-tarjeta2",
            "Health and wellbeing"
        );

        cambiarTexto(
            "m1-tarjeta2-desc",
            "Take care of your rest, concentration and health while using technology."
        );

        cambiarTexto(
            "m1-tarjeta3",
            "Personal life and study"
        );

        cambiarTexto(
            "m1-tarjeta3-desc",
            "Find a balance between the digital world and your daily activities."
        );

        cambiarTexto(
            "informacion",
            "Click on a card to discover more information."
        );

        cambiarTexto(
            "m1-quiz-titulo",
            "How are your digital habits?"
        );

        cambiarTexto(
            "m1-quiz-descripcion",
            "Answer these questions to learn more about your technology habits."
        );

        cambiarTexto(
            "m1-pregunta1",
            "1. How much time do you normally spend in front of a screen?"
        );

        cambiarTexto("m1-r1-1", "Less than 2 hours");
        cambiarTexto("m1-r1-2", "Between 2 and 5 hours");
        cambiarTexto("m1-r1-3", "More than 5 hours");

        cambiarTexto(
            "m1-pregunta2",
            "2. Do you usually take breaks from screens during the day?"
        );

        cambiarTexto("m1-r2-1", "Yes, frequently");
        cambiarTexto("m1-r2-2", "Sometimes");
        cambiarTexto("m1-r2-3", "Almost never");

        cambiarTexto(
            "m1-pregunta3",
            "3. Do you use your phone while studying?"
        );

        cambiarTexto("m1-r3-1", "Almost never");
        cambiarTexto("m1-r3-2", "Sometimes");
        cambiarTexto("m1-r3-3", "Frequently");

        cambiarTexto(
            "resultado-test",
            "Select an answer for each question."
        );

        cambiarTexto(
            "m1-beneficios-titulo",
            "🌱 Discover the benefits of good digital habits"
        );

        cambiarTexto(
            "m1-beneficios-instruccion",
            "Select a habit to learn about one of its benefits."
        );

        cambiarTexto(
            "m1-beneficio-descanso",
            "😴 Sleep well"
        );

        cambiarTexto(
            "m1-beneficio-pausas",
            "📵 Take breaks"
        );

        cambiarTexto(
            "m1-beneficio-familia",
            "👨‍👩‍👧 Screen-free time"
        );

        cambiarTexto(
            "resultado-beneficio",
            "Select a habit to discover its benefit."
        );

        cambiarTexto(
            "m1-boton-inicio",
            "← Home"
        );

        cambiarTexto(
            "m1-boton-beneficios",
            "Benefits →"
        );

        cambiarTexto(
            "m1-boton-modulo2",
            "Module 2 →"
        );

    }

    else {

        cambiarTexto("menu-inicio", "Inicio");
        cambiarTexto("menu-modulos", "Módulos ▾");
        cambiarTexto("menu-creditos", "Créditos");

        cambiarTexto("m1-menu-inicio", "Inicio");
        cambiarTexto("m1-menu-modulos", "Módulos ▾");
        cambiarTexto("m1-menu-creditos", "Créditos");

        traducirSubmenu("submenu-modulo", "es");
        traducirSubmenu("m1-submenu-modulo", "es");

        cambiarTexto("etiqueta-modulo1", "MÓDULO 1");
        cambiarTexto("m1-etiqueta", "MÓDULO 1");

        cambiarTexto(
            "titulo-modulo1",
            "¿Qué es el bienestar digital?"
        );

        cambiarTexto(
            "m1-titulo",
            "¿Qué es el bienestar digital?"
        );

        cambiarTexto(
            "descripcion-modulo1",
            "El bienestar digital consiste en mantener una relación saludable y equilibrada con la tecnología. No significa dejar de utilizar los dispositivos, sino aprender a usarlos de una forma que beneficie nuestra vida, nuestro estudio, nuestro descanso y nuestras relaciones."
        );

        cambiarTexto(
            "m1-elementos-titulo",
            "Descubre los elementos del bienestar digital"
        );

        cambiarTexto(
            "m1-tarjetas-titulo",
            "Descubre los elementos del bienestar digital"
        );

        cambiarTexto(
            "m1-tarjetas-instruccion",
            "Haz clic sobre cada tarjeta para conocer más."
        );

        cambiarTexto(
            "m1-tarjeta1",
            "Uso equilibrado"
        );

        cambiarTexto(
            "m1-tarjeta1-desc",
            "Aprende a distribuir mejor el tiempo que utilizas frente a las pantallas."
        );

        cambiarTexto(
            "m1-tarjeta2",
            "Salud y bienestar"
        );

        cambiarTexto(
            "m1-tarjeta2-desc",
            "Cuida tu descanso, concentración y salud mientras utilizas la tecnología."
        );

        cambiarTexto(
            "m1-tarjeta3",
            "Vida personal y estudio"
        );

        cambiarTexto(
            "m1-tarjeta3-desc",
            "Encuentra un equilibrio entre el mundo digital y las actividades de tu vida diaria."
        );

        cambiarTexto(
            "informacion",
            "Haz clic en una tarjeta para descubrir más información."
        );

        cambiarTexto(
            "m1-quiz-titulo",
            "¿Cómo están tus hábitos digitales?"
        );

        cambiarTexto(
            "m1-quiz-descripcion",
            "Responde estas preguntas para conocer mejor tus hábitos relacionados con el uso de la tecnología."
        );

        cambiarTexto(
            "m1-pregunta1",
            "1. ¿Cuánto tiempo pasas normalmente frente a una pantalla?"
        );

        cambiarTexto("m1-r1-1", "Menos de 2 horas");
        cambiarTexto("m1-r1-2", "Entre 2 y 5 horas");
        cambiarTexto("m1-r1-3", "Más de 5 horas");

        cambiarTexto(
            "m1-pregunta2",
            "2. ¿Sueles descansar de las pantallas durante el día?"
        );

        cambiarTexto("m1-r2-1", "Sí, con frecuencia");
        cambiarTexto("m1-r2-2", "Algunas veces");
        cambiarTexto("m1-r2-3", "Casi nunca");

        cambiarTexto(
            "m1-pregunta3",
            "3. ¿Utilizas el celular mientras estudias?"
        );

        cambiarTexto("m1-r3-1", "Casi nunca");
        cambiarTexto("m1-r3-2", "Algunas veces");
        cambiarTexto("m1-r3-3", "Frecuentemente");

        cambiarTexto(
            "resultado-test",
            "Selecciona una respuesta en cada pregunta."
        );

        cambiarTexto(
            "m1-beneficios-titulo",
            "🌱 Descubre los beneficios de los buenos hábitos digitales"
        );

        cambiarTexto(
            "m1-beneficios-instruccion",
            "Selecciona un hábito para conocer uno de sus beneficios."
        );

        cambiarTexto(
            "m1-beneficio-descanso",
            "😴 Dormir bien"
        );

        cambiarTexto(
            "m1-beneficio-pausas",
            "📵 Hacer pausas"
        );

        cambiarTexto(
            "m1-beneficio-familia",
            "👨‍👩‍👧 Tiempo sin pantallas"
        );

        cambiarTexto(
            "resultado-beneficio",
            "Selecciona un hábito para descubrir su beneficio."
        );

        cambiarTexto(
            "m1-boton-inicio",
            "← Inicio"
        );

        cambiarTexto(
            "m1-boton-beneficios",
            "Beneficios →"
        );

        cambiarTexto(
            "m1-boton-modulo2",
            "Módulo 2 →"
        );
    }
}



function mostrarHabito(habito) {

    const informacion =
        document.getElementById("informacion-habito");

    if (!informacion) {
        return;
    }

    if (idiomaModulo2 === "en") {

        if (habito === "descanso") {

            informacion.innerHTML =
                "<strong>😴 Take breaks from screens:</strong><br>" +
                "Taking breaks while using devices allows your eyes to rest, regain concentration and avoid tiredness.";

        }

        else if (habito === "estudio") {

            informacion.innerHTML =
                "<strong>📚 Take care of your study time:</strong><br>" +
                "While studying, it is recommended to reduce digital distractions and use technology only when necessary.";

        }

        else if (habito === "equilibrio") {

            informacion.innerHTML =
                "<strong>⚖️ Maintain balance:</strong><br>" +
                "A healthy digital habit means combining device use with rest, study, physical activity and time with other people.";
        }

    }

    else {

        if (habito === "descanso") {

            informacion.innerHTML =
                "<strong>😴 Descansar de las pantallas:</strong><br>" +
                "Realizar pausas durante el uso de dispositivos permite descansar la vista, recuperar la concentración y evitar el cansancio.";

        }

        else if (habito === "estudio") {

            informacion.innerHTML =
                "<strong>📚 Cuidar el estudio:</strong><br>" +
                "Durante el estudio es recomendable reducir las distracciones digitales y utilizar la tecnología únicamente cuando sea necesaria.";

        }

        else if (habito === "equilibrio") {

            informacion.innerHTML =
                "<strong>⚖️ Mantener el equilibrio:</strong><br>" +
                "Un hábito digital saludable consiste en combinar el uso de dispositivos con el descanso, el estudio, la actividad física y el tiempo con otras personas.";
        }
    }
}




function mostrarTiempo(tipo) {

    const informacion =
        document.getElementById("informacion-tiempo");

    if (!informacion) {
        return;
    }

    if (idiomaModulo2 === "en") {

        if (tipo === "organizar") {

            informacion.innerHTML =
                "<strong>🗓️ Organize your time:</strong><br>" +
                "Organizing your time helps you complete your activities without feeling that you have to do everything at once. You can use an agenda or task list to plan study, rest and entertainment.";

        }

        else if (tipo === "distracciones") {

            informacion.innerHTML =
                "<strong>📵 Reduce distractions:</strong><br>" +
                "Notifications, social media and messages can interrupt concentration. A useful strategy is to silence notifications or move your phone away when you need to focus.";

        }

        else if (tipo === "descanso") {

            informacion.innerHTML =
                "<strong>🌙 Make time for rest:</strong><br>" +
                "Rest is also important for maintaining digital balance. Take breaks while using screens and reserve moments of the day to disconnect.";
        }

    }

    else {

        if (tipo === "organizar") {

            informacion.innerHTML =
                "<strong>🗓️ Organizar el tiempo:</strong><br>" +
                "Organizar tu tiempo te ayuda a cumplir tus actividades sin sentir que debes hacer todo al mismo tiempo. Puedes utilizar una agenda o una lista de tareas para planificar tus momentos de estudio, descanso y entretenimiento.";

        }

        else if (tipo === "distracciones") {

            informacion.innerHTML =
                "<strong>📵 Reducir las distracciones:</strong><br>" +
                "Las notificaciones, redes sociales y mensajes pueden interrumpir la concentración. Una buena estrategia es silenciar las notificaciones o alejar el celular cuando necesites concentrarte.";

        }

        else if (tipo === "descanso") {

            informacion.innerHTML =
                "<strong>🌙 Reservar tiempo para descansar:</strong><br>" +
                "El descanso también es importante para mantener un buen equilibrio digital. Es recomendable hacer pausas durante el uso de pantallas y reservar momentos del día para desconectarse.";
        }
    }
}




function recomendarTiempo(actividad) {

    const recomendacion =
        document.getElementById("recomendacion-tiempo");

    if (!recomendacion) {
        return;
    }

    if (idiomaModulo2 === "en") {

        if (actividad === "estudio") {

            recomendacion.innerHTML =
                "<strong>📚 Recommendation:</strong><br>" +
                "Find a quiet place, silence notifications and set a specific time to study without distractions.";

        }

        else if (actividad === "descanso") {

            recomendacion.innerHTML =
                "<strong>🌙 Recommendation:</strong><br>" +
                "Use your rest periods to step away from screens, relax and recover your energy.";

        }

        else if (actividad === "entretenimiento") {

            recomendacion.innerHTML =
                "<strong>🎮 Recommendation:</strong><br>" +
                "Enjoy digital entertainment, but set a time limit so it does not replace study or rest.";
        }

    }

    else {

        if (actividad === "estudio") {

            recomendacion.innerHTML =
                "<strong>📚 Recomendación:</strong><br>" +
                "Busca un lugar tranquilo, silencia las notificaciones y establece un tiempo específico para estudiar sin distracciones.";

        }

        else if (actividad === "descanso") {

            recomendacion.innerHTML =
                "<strong>🌙 Recomendación:</strong><br>" +
                "Aprovecha tus momentos de descanso para alejarte un poco de las pantallas, relajarte y recuperar energía.";

        }

        else if (actividad === "entretenimiento") {

            recomendacion.innerHTML =
                "<strong>🎮 Recomendación:</strong><br>" +
                "Disfruta del entretenimiento digital, pero establece un límite de tiempo para evitar que ocupe el espacio destinado al estudio o al descanso.";
        }
    }
}




let respuestasRutina = {};

function responderRutina(pregunta, respuesta, boton) {

    respuestasRutina[pregunta] = respuesta;

    const botones =
        boton.parentElement.querySelectorAll("button");

    botones.forEach(function(botonActual) {
        botonActual.classList.remove("seleccionado");
    });

    boton.classList.add("seleccionado");

    if (
        respuestasRutina[1] &&
        respuestasRutina[2] &&
        respuestasRutina[3]
    ) {

        let puntos = 0;

        if (respuestasRutina[1] === "correcta") puntos++;
        if (respuestasRutina[2] === "correcta") puntos++;
        if (respuestasRutina[3] === "correcta") puntos++;

        const resultado =
            document.getElementById("resultado-rutina") ||
            document.getElementById("m2r-resultado");

        if (!resultado) {
            return;
        }

        if (idiomaModulo2 === "en") {

            if (puntos === 3) {

                resultado.innerHTML =
                    "<strong>Excellent! 3/3</strong><br>" +
                    "Your answers show healthy digital habits. Keep maintaining a balance between technology, study and rest.";

            }

            else if (puntos === 2) {

                resultado.innerHTML =
                    "<strong>You're doing well! 2/3</strong><br>" +
                    "You have good digital habits, but you can still improve some aspects of your routine.";

            }

            else {

                resultado.innerHTML =
                    "<strong>Result: " + puntos + "/3</strong><br>" +
                    "You can improve some digital habits. Remember to take breaks, reduce distractions and balance your screen time.";
            }

        }

        else {

            if (puntos === 3) {

                resultado.innerHTML =
                    "<strong>¡Excelente! 3/3</strong><br>" +
                    "Tus respuestas muestran hábitos digitales saludables. Continúa manteniendo un equilibrio entre la tecnología, el estudio y el descanso.";

            }

            else if (puntos === 2) {

                resultado.innerHTML =
                    "<strong>¡Vas bien! 2/3</strong><br>" +
                    "Tienes buenos hábitos digitales, pero todavía puedes mejorar algunos aspectos de tu rutina.";

            }

            else {

                resultado.innerHTML =
                    "<strong>Resultado: " + puntos + "/3</strong><br>" +
                    "Puedes mejorar algunos hábitos digitales. Recuerda hacer pausas, reducir las distracciones y equilibrar el tiempo frente a las pantallas.";
            }
        }
    }
}




function cambiarIdiomaModulo2(idioma) {

    idiomaModulo2 = idioma;

    if (idioma === "en") {

        cambiarTexto("m2-menu-inicio", "Home");
        cambiarTexto("m2-menu-modulos", "Modules ▾");
        cambiarTexto("m2-menu-creditos", "Credits");

        traducirSubmenu("m2-submenu-modulo", "en");

        cambiarTexto("m2-etiqueta", "MODULE 2");

        cambiarTexto(
            "m2-titulo",
            "Healthy Digital Habits"
        );

        cambiarTexto(
            "m2-descripcion",
            "Healthy digital habits help us use technology in a more balanced way. Small actions such as taking breaks from screens, organizing our activities and taking care of our study time can improve our experience with technology."
        );

        cambiarTexto(
            "m2-tarjetas-titulo",
            "Keys to managing your time better"
        );

        cambiarTexto(
            "m2-tarjetas-instruccion",
            "Click on each card to learn more."
        );

        cambiarTexto(
            "m2-tarjeta1",
            "😴 Take breaks from screens"
        );

        cambiarTexto(
            "m2-tarjeta1-desc",
            "Taking breaks while using devices helps take care of your wellbeing and concentration."
        );

        cambiarTexto(
            "m2-tarjeta2",
            "📚 Take care of your study time"
        );

        cambiarTexto(
            "m2-tarjeta2-desc",
            "Avoiding digital distractions allows you to make better use of the time dedicated to academic activities."
        );

        cambiarTexto(
            "m2-tarjeta3",
            "⚖️ Maintain balance"
        );

        cambiarTexto(
            "m2-tarjeta3-desc",
            "Combining technology use with other activities helps maintain healthier habits."
        );

        cambiarTexto(
            "m2-quiz-titulo",
            "🗓️ Quiz: Build a healthy digital routine"
        );

        cambiarTexto(
            "m2-quiz-descripcion",
            "Answer the following questions to find out how healthy your daily technology routine is."
        );

        cambiarTexto(
            "m2-pregunta1",
            "1. What do you do when you need to study?"
        );

        cambiarTexto(
            "m2-p1-correcta",
            "📚 I remove distractions and concentrate"
        );

        cambiarTexto(
            "m2-p1-incorrecta",
            "📱 I constantly check social media"
        );

        cambiarTexto(
            "m2-pregunta2",
            "2. What is recommended after spending a lot of time in front of a screen?"
        );

        cambiarTexto(
            "m2-p2-correcta",
            "👀 Take a break and rest"
        );

        cambiarTexto(
            "m2-p2-incorrecta",
            "💻 Continue without taking a break"
        );

        cambiarTexto(
            "m2-pregunta3",
            "3. How can you maintain a balanced digital routine?"
        );

        cambiarTexto(
            "m2-p3-correcta",
            "⚖️ Combine technology, study, rest and other activities"
        );

        cambiarTexto(
            "m2-p3-incorrecta",
            "📱 Use devices throughout the entire day"
        );

        cambiarTexto(
            "resultado-rutina",
            "Answer all three questions to see your result."
        );

        cambiarTexto(
            "m2-boton-anterior",
            "← Module 1"
        );

        cambiarTexto(
            "m2-boton-rutina",
            "Routine →"
        );

        cambiarTexto(
            "m2-boton-modulo1",
            "← Module 1"
        );

        cambiarTexto(
            "m2-boton-modulo3",
            "Module 3 →"
        );

    }

    else {

        cambiarTexto("m2-menu-inicio", "Inicio");
        cambiarTexto("m2-menu-modulos", "Módulos ▾");
        cambiarTexto("m2-menu-creditos", "Créditos");

        traducirSubmenu("m2-submenu-modulo", "es");

        cambiarTexto("m2-etiqueta", "MÓDULO 2");

        cambiarTexto(
            "m2-titulo",
            "Hábitos digitales saludables"
        );

        cambiarTexto(
            "m2-descripcion",
            "Los hábitos digitales saludables nos ayudan a utilizar la tecnología de una manera más equilibrada. Pequeñas acciones como descansar de las pantallas, organizar nuestras actividades y cuidar nuestros momentos de estudio pueden mejorar nuestra experiencia con la tecnología."
        );

        cambiarTexto(
            "m2-tarjetas-titulo",
            "Claves para administrar mejor tu tiempo"
        );

        cambiarTexto(
            "m2-tarjetas-instruccion",
            "Haz clic sobre cada tarjeta para conocer más."
        );

        cambiarTexto(
            "m2-tarjeta1",
            "😴 Descansar de las pantallas"
        );

        cambiarTexto(
            "m2-tarjeta1-desc",
            "Realizar pausas durante el uso de dispositivos ayuda a cuidar el bienestar y la concentración."
        );

        cambiarTexto(
            "m2-tarjeta2",
            "📚 Cuidar el estudio"
        );

        cambiarTexto(
            "m2-tarjeta2-desc",
            "Evitar distracciones digitales permite aprovechar mejor el tiempo dedicado a las actividades académicas."
        );

        cambiarTexto(
            "m2-tarjeta3",
            "⚖️ Mantener el equilibrio"
        );

        cambiarTexto(
            "m2-tarjeta3-desc",
            "Combinar el uso de la tecnología con otras actividades ayuda a mantener hábitos más saludables."
        );

        cambiarTexto(
            "m2-quiz-titulo",
            "🗓️ Quiz: construye una rutina digital saludable"
        );

        cambiarTexto(
            "m2-quiz-descripcion",
            "Responde las siguientes preguntas para conocer qué tan saludable es tu rutina diaria con la tecnología."
        );

        cambiarTexto(
            "m2-pregunta1",
            "1. ¿Qué haces cuando necesitas estudiar?"
        );

        cambiarTexto(
            "m2-p1-correcta",
            "📚 Alejo las distracciones y me concentro"
        );

        cambiarTexto(
            "m2-p1-incorrecta",
            "📱 Reviso constantemente las redes sociales"
        );

        cambiarTexto(
            "m2-pregunta2",
            "2. ¿Qué es recomendable hacer después de pasar bastante tiempo frente a una pantalla?"
        );

        cambiarTexto(
            "m2-p2-correcta",
            "👀 Hacer una pausa y descansar"
        );

        cambiarTexto(
            "m2-p2-incorrecta",
            "💻 Continuar sin hacer ninguna pausa"
        );

        cambiarTexto(
            "m2-pregunta3",
            "3. ¿Cómo puedes mantener una rutina digital equilibrada?"
        );

        cambiarTexto(
            "m2-p3-correcta",
            "⚖️ Combinar tecnología, estudio, descanso y otras actividades"
        );

        cambiarTexto(
            "m2-p3-incorrecta",
            "📱 Utilizar dispositivos durante todo el día"
        );

        cambiarTexto(
            "resultado-rutina",
            "Responde las tres preguntas para conocer tu resultado."
        );

        cambiarTexto(
            "m2-boton-anterior",
            "← Módulo 1"
        );

        cambiarTexto(
            "m2-boton-rutina",
            "Rutina →"
        );

        cambiarTexto(
            "m2-boton-modulo1",
            "← Módulo 1"
        );

        cambiarTexto(
            "m2-boton-modulo3",
            "Módulo 3 →"
        );
    }
}




function cambiarIdiomaModulo2Rutina(idioma) {

    idiomaModulo2 = idioma;

    if (idioma === "en") {

        cambiarTexto("m2r-menu-inicio", "Home");
        cambiarTexto("m2r-menu-modulos", "Modules ▾");
        cambiarTexto("m2r-menu-creditos", "Credits");

        traducirSubmenu("m2r-submenu-modulo", "en");

        cambiarTexto("m2r-etiqueta", "MODULE 2");

        cambiarTexto(
            "m2r-titulo",
            "Healthy digital routine"
        );

        cambiarTexto(
            "m2r-descripcion",
            "A healthy digital routine helps us organize our use of technology, study time, rest and other daily activities."
        );

        cambiarTexto(
            "m2r-quiz-titulo",
            "🗓️ Quiz: Build a healthy digital routine"
        );

        cambiarTexto(
            "m2r-quiz-descripcion",
            "Answer the questions to find out how healthy your daily technology routine is."
        );

        cambiarTexto(
            "m2r-pregunta1",
            "1. What do you do when you need to study?"
        );

        cambiarTexto(
            "m2r-p1-correcta",
            "📚 I remove distractions and concentrate"
        );

        cambiarTexto(
            "m2r-p1-incorrecta",
            "📱 I constantly check social media"
        );

        cambiarTexto(
            "m2r-pregunta2",
            "2. What is recommended after spending a lot of time in front of a screen?"
        );

        cambiarTexto(
            "m2r-p2-correcta",
            "👀 Take a break and rest"
        );

        cambiarTexto(
            "m2r-p2-incorrecta",
            "💻 Continue without taking a break"
        );

        cambiarTexto(
            "m2r-pregunta3",
            "3. How can you maintain a balanced digital routine?"
        );

        cambiarTexto(
            "m2r-p3-correcta",
            "⚖️ Combine technology, study, rest and other activities"
        );

        cambiarTexto(
            "m2r-p3-incorrecta",
            "📱 Use devices throughout the entire day"
        );

        cambiarTexto(
            "m2r-resultado",
            "Answer all three questions to see your result."
        );

        cambiarTexto(
            "m2r-boton-anterior",
            "← Module 2"
        );

        cambiarTexto(
            "m2r-boton-siguiente",
            "Module 3 →"
        );

    }

    else {

        cambiarTexto("m2r-menu-inicio", "Inicio");
        cambiarTexto("m2r-menu-modulos", "Módulos ▾");
        cambiarTexto("m2r-menu-creditos", "Créditos");

        traducirSubmenu("m2r-submenu-modulo", "es");

        cambiarTexto("m2r-etiqueta", "MÓDULO 2");

        cambiarTexto(
            "m2r-titulo",
            "Rutina digital saludable"
        );

        cambiarTexto(
            "m2r-descripcion",
            "Una rutina digital saludable nos ayuda a organizar el uso de la tecnología, el tiempo de estudio, el descanso y otras actividades diarias."
        );

        cambiarTexto(
            "m2r-quiz-titulo",
            "🗓️ Quiz: construye una rutina digital saludable"
        );

        cambiarTexto(
            "m2r-quiz-descripcion",
            "Responde las preguntas para conocer qué tan saludable es tu rutina diaria con la tecnología."
        );

        cambiarTexto(
            "m2r-pregunta1",
            "1. ¿Qué haces cuando necesitas estudiar?"
        );

        cambiarTexto(
            "m2r-p1-correcta",
            "📚 Alejo las distracciones y me concentro"
        );

        cambiarTexto(
            "m2r-p1-incorrecta",
            "📱 Reviso constantemente las redes sociales"
        );

        cambiarTexto(
            "m2r-pregunta2",
            "2. ¿Qué es recomendable hacer después de pasar bastante tiempo frente a una pantalla?"
        );

        cambiarTexto(
            "m2r-p2-correcta",
            "👀 Hacer una pausa y descansar"
        );

        cambiarTexto(
            "m2r-p2-incorrecta",
            "💻 Continuar sin hacer ninguna pausa"
        );

        cambiarTexto(
            "m2r-pregunta3",
            "3. ¿Cómo puedes mantener una rutina digital equilibrada?"
        );

        cambiarTexto(
            "m2r-p3-correcta",
            "⚖️ Combinar tecnología, estudio, descanso y otras actividades"
        );

        cambiarTexto(
            "m2r-p3-incorrecta",
            "📱 Utilizar dispositivos durante todo el día"
        );

        cambiarTexto(
            "m2r-resultado",
            "Responde las tres preguntas para conocer tu resultado."
        );

        cambiarTexto(
            "m2r-boton-anterior",
            "← Módulo 2"
        );

        cambiarTexto(
            "m2r-boton-siguiente",
            "Módulo 3 →"
        );
    }
}




function mostrarCronograma(momento) {

    const informacion =
        document.getElementById("informacion-cronograma");

    if (!informacion) {
        return;
    }

    if (idiomaModulo3 === "en") {

        if (momento === "mañana") {

            informacion.innerHTML =
                "<strong>🌅 Morning:</strong><br>" +
                "Use this time to organize your activities, study and start your day with a clear plan.";

        }

        else if (momento === "tarde") {

            informacion.innerHTML =
                "<strong>☀️ Afternoon:</strong><br>" +
                "You can continue your academic or personal activities and take short breaks to maintain concentration.";

        }

        else if (momento === "noche") {

            informacion.innerHTML =
                "<strong>🌙 Evening:</strong><br>" +
                "Reduce screen use, finish your pending activities and prepare for a good night's rest.";
        }

    }

    else {

        if (momento === "mañana") {

            informacion.innerHTML =
                "<strong>🌅 Mañana:</strong><br>" +
                "Utiliza este momento para organizar tus actividades, estudiar y comenzar el día con un plan claro.";

        }

        else if (momento === "tarde") {

            informacion.innerHTML =
                "<strong>☀️ Tarde:</strong><br>" +
                "Puedes continuar con tus actividades académicas o personales y realizar pequeñas pausas para mantener la concentración.";

        }

        else if (momento === "noche") {

            informacion.innerHTML =
                "<strong>🌙 Noche:</strong><br>" +
                "Reduce el uso de pantallas, termina tus actividades pendientes y prepárate para descansar bien.";
        }
    }
}




function cambiarIdiomaModulo3(idioma) {

    idiomaModulo3 = idioma;

    if (idioma === "en") {

        cambiarTexto("m3-menu-inicio", "Home");
        cambiarTexto("m3-menu-modulos", "Modules ▾");
        cambiarTexto("m3-menu-creditos", "Credits");

        traducirSubmenu("m3-submenu-modulo", "en");

        cambiarTexto("m3-etiqueta", "MODULE 3");

        cambiarTexto(
            "m3-titulo",
            "Time Management"
        );

        cambiarTexto(
            "m3-descripcion",
            "Learning to organize our time allows us to make better use of our digital, academic and personal activities. In this module, you will learn some strategies to organize your activities and include moments of rest."
        );

        cambiarTexto(
            "m3-cronograma-titulo",
            "🕐 Activity Schedule"
        );

        cambiarTexto(
            "m3-cronograma-descripcion",
            "Select a time of day to learn about an activity you can do during that period."
        );

        cambiarTexto("m3-manana", "🌅 Morning");
        cambiarTexto("m3-tarde", "☀️ Afternoon");
        cambiarTexto("m3-noche", "🌙 Evening");

        cambiarTexto(
            "m3-boton-anterior",
            "← Module 2"
        );

        cambiarTexto(
            "m3-boton-pomodoro",
            "Pomodoro →"
        );

    }

    else {

        cambiarTexto("m3-menu-inicio", "Inicio");
        cambiarTexto("m3-menu-modulos", "Módulos ▾");
        cambiarTexto("m3-menu-creditos", "Créditos");

        traducirSubmenu("m3-submenu-modulo", "es");

        cambiarTexto("m3-etiqueta", "MÓDULO 3");

        cambiarTexto(
            "m3-titulo",
            "Gestión del tiempo"
        );

        cambiarTexto(
            "m3-descripcion",
            "Aprender a organizar nuestro tiempo nos permite aprovechar mejor nuestras actividades digitales, académicas y personales. En este módulo conocerás algunas estrategias para organizar tus actividades y mantener momentos de descanso."
        );

        cambiarTexto(
            "m3-cronograma-titulo",
            "🕐 Cronograma de actividades"
        );

        cambiarTexto(
            "m3-cronograma-descripcion",
            "Selecciona un momento del día para conocer una actividad que puedes realizar en ese horario."
        );

        cambiarTexto("m3-manana", "🌅 Mañana");
        cambiarTexto("m3-tarde", "☀️ Tarde");
        cambiarTexto("m3-noche", "🌙 Noche");

        cambiarTexto(
            "m3-boton-anterior",
            "← Módulo 2"
        );

        cambiarTexto(
            "m3-boton-pomodoro",
            "Pomodoro →"
        );
    }
}




function mostrarPomodoro(tipo) {

    const informacion =
        document.getElementById("informacion-pomodoro");

    if (!informacion) {
        return;
    }

    if (idiomaModulo3Pomodoro === "en") {

        if (tipo === "concentracion") {

            informacion.innerHTML =
                "<strong>📚 Concentration time:</strong><br>" +
                "Focus your attention on one activity and avoid distractions.";

        }

        else if (tipo === "descanso") {

            informacion.innerHTML =
                "<strong>☕ Break time:</strong><br>" +
                "Take a short break to rest and recover your energy.";

        }

        else if (tipo === "repetir") {

            informacion.innerHTML =
                "<strong>🔄 Repeat the cycle:</strong><br>" +
                "After the break, start another concentration period.";
        }

    }

    else {

        if (tipo === "concentracion") {

            informacion.innerHTML =
                "<strong>📚 Tiempo de concentración:</strong><br>" +
                "Mantén tu atención en una sola actividad y evita las distracciones.";

        }

        else if (tipo === "descanso") {

            informacion.innerHTML =
                "<strong>☕ Tiempo de descanso:</strong><br>" +
                "Haz una pausa corta para descansar y recuperar energía.";

        }

        else if (tipo === "repetir") {

            informacion.innerHTML =
                "<strong>🔄 Repetir el ciclo:</strong><br>" +
                "Después del descanso, comienza nuevamente un periodo de concentración.";
        }
    }
}



function cambiarIdiomaModulo3Pomodoro(idioma) {

    idiomaModulo3Pomodoro = idioma;

    if (idioma === "en") {

        cambiarTexto("m3p-menu-inicio", "Home");
        cambiarTexto("m3p-menu-modulos", "Modules ▾");
        cambiarTexto("m3p-menu-creditos", "Credits");

        traducirSubmenu("m3p-submenu-modulo", "en");

        cambiarTexto("m3p-etiqueta", "MODULE 3");

        cambiarTexto(
            "m3p-titulo",
            "Pomodoro Technique"
        );

        cambiarTexto(
            "m3p-descripcion",
            "The Pomodoro Technique consists of organizing work or study time into periods of concentration and breaks."
        );

        cambiarTexto(
            "m3p-pomodoro-titulo",
            "🍅 Pomodoro Technique"
        );

        cambiarTexto(
            "m3p-pomodoro-descripcion",
            "Learn the basic steps of this technique to better organize your study or work periods."
        );

        cambiarTexto(
            "m3p-concentracion",
            "Concentration time"
        );

        cambiarTexto(
            "m3p-concentracion-desc",
            "Focus your attention on one activity."
        );

        cambiarTexto(
            "m3p-descanso",
            "Break time"
        );

        cambiarTexto(
            "m3p-descanso-desc",
            "Take a break to recover your energy."
        );

        cambiarTexto(
            "m3p-repetir",
            "Repeat the cycle"
        );

        cambiarTexto(
            "m3p-repetir-desc",
            "After the break, you can start again."
        );

        cambiarTexto(
            "informacion-pomodoro",
            "Click on a card to learn more."
        );

        cambiarTexto(
            "m3p-boton-anterior",
            "← Module 3"
        );

        cambiarTexto(
            "m3p-boton-siguiente",
            "Module 4 →"
        );

    }

    else {

        cambiarTexto("m3p-menu-inicio", "Inicio");
        cambiarTexto("m3p-menu-modulos", "Módulos ▾");
        cambiarTexto("m3p-menu-creditos", "Créditos");

        traducirSubmenu("m3p-submenu-modulo", "es");

        cambiarTexto("m3p-etiqueta", "MÓDULO 3");

        cambiarTexto(
            "m3p-titulo",
            "Técnica Pomodoro"
        );

        cambiarTexto(
            "m3p-descripcion",
            "La técnica Pomodoro consiste en organizar el tiempo de trabajo o estudio en periodos de concentración y descansos."
        );

        cambiarTexto(
            "m3p-pomodoro-titulo",
            "🍅 Técnica Pomodoro"
        );

        cambiarTexto(
            "m3p-pomodoro-descripcion",
            "Conoce los pasos básicos de esta técnica para organizar mejor tus periodos de estudio o trabajo."
        );

        cambiarTexto(
            "m3p-concentracion",
            "Tiempo de concentración"
        );

        cambiarTexto(
            "m3p-concentracion-desc",
            "Mantén tu atención en una sola actividad."
        );

        cambiarTexto(
            "m3p-descanso",
            "Tiempo de descanso"
        );

        cambiarTexto(
            "m3p-descanso-desc",
            "Haz una pausa para recuperar energía."
        );

        cambiarTexto(
            "m3p-repetir",
            "Repetir el ciclo"
        );

        cambiarTexto(
            "m3p-repetir-desc",
            "Después del descanso puedes comenzar nuevamente."
        );

        cambiarTexto(
            "informacion-pomodoro",
            "Haz clic en una tarjeta para conocer más."
        );

        cambiarTexto(
            "m3p-boton-anterior",
            "← Módulo 3"
        );

        cambiarTexto(
            "m3p-boton-siguiente",
            "Módulo 4 →"
        );
    }
}




let respuestasSeguridad = {};

function responderSeguridad(numero, respuesta, boton) {

    respuestasSeguridad[numero] = respuesta;

    if (respuesta === "verdadero") {
        boton.style.background = "#D4EDDA";
    }
    else {
        boton.style.background = "#F8D7DA";
    }

    if (
        respuestasSeguridad[1] &&
        respuestasSeguridad[2] &&
        respuestasSeguridad[3]
    ) {

        let puntaje = 0;

        if (respuestasSeguridad[1] === "verdadero") {
            puntaje++;
        }

        if (respuestasSeguridad[2] === "falso") {
            puntaje++;
        }

        if (respuestasSeguridad[3] === "verdadero") {
            puntaje++;
        }

        const resultado =
            document.getElementById("resultado-seguridad");

        if (!resultado) {
            return;
        }

        if (idiomaModulo4 === "en") {

            resultado.textContent =
                "You got " + puntaje + " out of 3 correct.";

        }

        else {

            resultado.textContent =
                "Obtuviste " + puntaje +
                " de 3 respuestas correctas.";
        }
    }
}




function mostrarProteccion(tipo) {

    const informacion =
        document.getElementById("informacion-proteccion") ||
        document.getElementById("m4d-informacion");

    if (!informacion) {
        return;
    }

    if (idiomaModulo4 === "en") {

        if (tipo === "contrasena") {

            informacion.innerHTML =
                "<strong>🔑 Secure passwords:</strong><br>" +
                "Use passwords that are difficult to guess and avoid using the same password for all your accounts.";

        }

        else if (tipo === "privacidad") {

            informacion.innerHTML =
                "<strong>👤 Privacy:</strong><br>" +
                "Avoid sharing unnecessary personal information and check who can access the information you publish online.";

        }

        else if (tipo === "enlaces") {

            informacion.innerHTML =
                "<strong>🔗 Safe links:</strong><br>" +
                "Check the web address and the source before clicking a link, especially when it arrives unexpectedly.";
        }

    }

    else {

        if (tipo === "contrasena") {

            informacion.innerHTML =
                "<strong>🔑 Contraseñas seguras:</strong><br>" +
                "Utiliza contraseñas difíciles de adivinar y evita usar la misma contraseña en todas tus cuentas.";

        }

        else if (tipo === "privacidad") {

            informacion.innerHTML =
                "<strong>👤 Privacidad:</strong><br>" +
                "Evita compartir información personal innecesaria y revisa quién puede acceder a la información que publicas en internet.";

        }

        else if (tipo === "enlaces") {

            informacion.innerHTML =
                "<strong>🔗 Enlaces seguros:</strong><br>" +
                "Revisa la dirección web y el origen antes de abrir un enlace, especialmente cuando llega de forma inesperada.";
        }
    }
}




function cambiarIdiomaModulo4(idioma) {

    idiomaModulo4 = idioma;

    if (idioma === "en") {

        cambiarTexto("m4-menu-inicio", "Home");
        cambiarTexto("m4-menu-modulos", "Modules ▾");
        cambiarTexto("m4-menu-creditos", "Credits");

        traducirSubmenu("m4-submenu-modulo", "en");

        cambiarTexto("m4-etiqueta", "MODULE 4");

        cambiarTexto(
            "m4-titulo",
            "Cybersecurity"
        );

        cambiarTexto(
            "m4-descripcion",
            "Cybersecurity helps us use technology more safely. In this module, you will learn some ways to protect your information and recognize situations that may represent a risk when using the internet."
        );

        cambiarTexto(
            "m4-quiz-titulo",
            "🛡️ True or False"
        );

        cambiarTexto(
            "m4-quiz-descripcion",
            "Read each statement and select whether it is true or false."
        );

        cambiarTexto(
            "m4-pregunta1",
            "1. It is recommended to use different passwords for our important accounts."
        );

        cambiarTexto(
            "m4-pregunta2",
            "2. We can share our password with anyone who asks for it on the internet."
        );

        cambiarTexto(
            "m4-pregunta3",
            "3. It is important to check links before opening them."
        );

        cambiarTexto("m4-p1-verdadero", "✅ True");
        cambiarTexto("m4-p1-falso", "❌ False");
        cambiarTexto("m4-p2-verdadero", "✅ True");
        cambiarTexto("m4-p2-falso", "❌ False");
        cambiarTexto("m4-p3-verdadero", "✅ True");
        cambiarTexto("m4-p3-falso", "❌ False");

        cambiarTexto(
            "resultado-seguridad",
            "Answer all three statements to see your result."
        );

        cambiarTexto(
            "m4-boton-anterior",
            "← Module 3"
        );

        cambiarTexto(
            "m4-boton-datos",
            "Data protection →"
        );

    }

    else {

        cambiarTexto("m4-menu-inicio", "Inicio");
        cambiarTexto("m4-menu-modulos", "Módulos ▾");
        cambiarTexto("m4-menu-creditos", "Créditos");

        traducirSubmenu("m4-submenu-modulo", "es");

        cambiarTexto("m4-etiqueta", "MÓDULO 4");

        cambiarTexto(
            "m4-titulo",
            "Ciberseguridad"
        );

        cambiarTexto(
            "m4-descripcion",
            "La ciberseguridad nos ayuda a utilizar la tecnología de manera más segura. En este módulo aprenderás algunas formas de proteger tu información y reconocer situaciones que pueden representar un riesgo al utilizar internet."
        );

        cambiarTexto(
            "m4-quiz-titulo",
            "🛡️ Verdadero o Falso"
        );

        cambiarTexto(
            "m4-quiz-descripcion",
            "Lee cada afirmación y selecciona si es verdadera o falsa."
        );

        cambiarTexto(
            "m4-pregunta1",
            "1. Es recomendable utilizar contraseñas diferentes para nuestras cuentas importantes."
        );

        cambiarTexto(
            "m4-pregunta2",
            "2. Podemos compartir nuestra contraseña con cualquier persona que nos la solicite por internet."
        );

        cambiarTexto(
            "m4-pregunta3",
            "3. Es importante revisar los enlaces antes de abrirlos."
        );

        cambiarTexto("m4-p1-verdadero", "✅ Verdadero");
        cambiarTexto("m4-p1-falso", "❌ Falso");
        cambiarTexto("m4-p2-verdadero", "✅ Verdadero");
        cambiarTexto("m4-p2-falso", "❌ Falso");
        cambiarTexto("m4-p3-verdadero", "✅ Verdadero");
        cambiarTexto("m4-p3-falso", "❌ Falso");

        cambiarTexto(
            "resultado-seguridad",
            "Responde las tres afirmaciones para conocer tu resultado."
        );

        cambiarTexto(
            "m4-boton-anterior",
            "← Módulo 3"
        );

        cambiarTexto(
            "m4-boton-datos",
            "Protección de datos →"
        );
    }
}




function cambiarIdiomaModulo4Datos(idioma) {

    idiomaModulo4 = idioma;

    if (idioma === "en") {

        cambiarTexto("m4d-menu-inicio", "Home");
        cambiarTexto("m4d-menu-modulos", "Modules ▾");
        cambiarTexto("m4d-menu-creditos", "Credits");

        traducirSubmenu("m4d-submenu-modulo", "en");

        cambiarTexto("m4d-etiqueta", "MODULE 4");

        cambiarTexto(
            "m4d-titulo",
            "Data protection"
        );

        cambiarTexto(
            "m4d-descripcion",
            "Protecting personal data helps us use digital services more safely and responsibly."
        );

        cambiarTexto(
            "m4d-proteccion-titulo",
            "🔐 Data protection"
        );

        cambiarTexto(
            "m4d-proteccion-instruccion",
            "Click on a card to learn a way to protect your personal data."
        );

        cambiarTexto(
            "m4d-contrasena",
            "Secure passwords"
        );

        cambiarTexto(
            "m4d-contrasena-desc",
            "Protect your accounts by using secure passwords."
        );

        cambiarTexto(
            "m4d-privacidad",
            "Privacy"
        );

        cambiarTexto(
            "m4d-privacidad-desc",
            "Take care of the personal information you share."
        );

        cambiarTexto(
            "m4d-enlaces",
            "Safe links"
        );

        cambiarTexto(
            "m4d-enlaces-desc",
            "Check links before entering them."
        );

        cambiarTexto(
            "m4d-informacion",
            "Click on a card to learn more."
        );

        cambiarTexto(
            "informacion-proteccion",
            "Click on a card to learn more."
        );

        cambiarTexto(
            "m4d-boton-anterior",
            "← Module 4"
        );

        cambiarTexto(
            "m4d-boton-siguiente",
            "Module 5 →"
        );

    }

    else {

        cambiarTexto("m4d-menu-inicio", "Inicio");
        cambiarTexto("m4d-menu-modulos", "Módulos ▾");
        cambiarTexto("m4d-menu-creditos", "Créditos");

        traducirSubmenu("m4d-submenu-modulo", "es");

        cambiarTexto("m4d-etiqueta", "MÓDULO 4");

        cambiarTexto(
            "m4d-titulo",
            "Protección de datos"
        );

        cambiarTexto(
            "m4d-descripcion",
            "Proteger los datos personales nos ayuda a utilizar los servicios digitales de una manera más segura y responsable."
        );

        cambiarTexto(
            "m4d-proteccion-titulo",
            "🔐 Protección de datos"
        );

        cambiarTexto(
            "m4d-proteccion-instruccion",
            "Haz clic en una tarjeta para conocer una forma de proteger tus datos personales."
        );

        cambiarTexto(
            "m4d-contrasena",
            "Contraseñas seguras"
        );

        cambiarTexto(
            "m4d-contrasena-desc",
            "Protege tus cuentas utilizando contraseñas seguras."
        );

        cambiarTexto(
            "m4d-privacidad",
            "Privacidad"
        );

        cambiarTexto(
            "m4d-privacidad-desc",
            "Cuida la información personal que compartes."
        );

        cambiarTexto(
            "m4d-enlaces",
            "Enlaces seguros"
        );

        cambiarTexto(
            "m4d-enlaces-desc",
            "Revisa los enlaces antes de ingresar a ellos."
        );

        cambiarTexto(
            "m4d-informacion",
            "Haz clic en una tarjeta para conocer más."
        );

        cambiarTexto(
            "informacion-proteccion",
            "Haz clic en una tarjeta para conocer más."
        );

        cambiarTexto(
            "m4d-boton-anterior",
            "← Módulo 4"
        );

        cambiarTexto(
            "m4d-boton-siguiente",
            "Módulo 5 →"
        );
    }
}




function cambiarIdiomaModulo5(idioma) {

    idiomaModulo5 = idioma;

    if (idioma === "en") {

        cambiarTexto("m5-menu-inicio", "Home");
        cambiarTexto("m5-menu-modulos", "Modules ▾");
        cambiarTexto("m5-menu-creditos", "Credits");

        traducirSubmenu("m5-submenu-modulo", "en");

        cambiarTexto("m5-etiqueta", "MODULE 5");

        cambiarTexto(
            "m5-titulo",
            "Final Assessment"
        );

        cambiarTexto(
            "m5-descripcion",
            "Test what you learned throughout the Digital Balance modules."
        );

        cambiarTexto(
            "m5-boton-anterior",
            "← Module 4"
        );

        cambiarTexto(
            "m5-boton-evaluacion",
            "Final Assessment →"
        );

    }

    else {

        cambiarTexto("m5-menu-inicio", "Inicio");
        cambiarTexto("m5-menu-modulos", "Módulos ▾");
        cambiarTexto("m5-menu-creditos", "Créditos");

        traducirSubmenu("m5-submenu-modulo", "es");

        cambiarTexto("m5-etiqueta", "MÓDULO 5");

        cambiarTexto(
            "m5-titulo",
            "Evaluación final"
        );

        cambiarTexto(
            "m5-descripcion",
            "Pon a prueba lo que aprendiste durante los módulos de Digital Balance."
        );

        cambiarTexto(
            "m5-boton-anterior",
            "← Módulo 4"
        );

        cambiarTexto(
            "m5-boton-evaluacion",
            "Evaluación final →"
        );
    }
}




let respuestasFinales = {};

function responderFinal(numero, respuesta, boton) {

    respuestasFinales[numero] = respuesta;

    if (respuesta === "correcta") {
        boton.style.background = "#D4EDDA";
    }
    else {
        boton.style.background = "#F8D7DA";
    }

    if (
        respuestasFinales[1] &&
        respuestasFinales[2] &&
        respuestasFinales[3] &&
        respuestasFinales[4] &&
        respuestasFinales[5]
    ) {

        let puntaje = 0;

        if (respuestasFinales[1] === "correcta") puntaje++;
        if (respuestasFinales[2] === "correcta") puntaje++;
        if (respuestasFinales[3] === "correcta") puntaje++;
        if (respuestasFinales[4] === "correcta") puntaje++;
        if (respuestasFinales[5] === "correcta") puntaje++;

        const resultado =
            document.getElementById("resultado-final");

        if (!resultado) {
            return;
        }

        if (idiomaModulo5 === "en") {

            resultado.textContent =
                "You got " + puntaje + " out of 5 correct.";

        }

        else {

            resultado.textContent =
                "Obtuviste " + puntaje +
                " de 5 respuestas correctas.";
        }
    }
}




function cambiarIdiomaModulo5Evaluacion(idioma) {

    idiomaModulo5 = idioma;

    if (idioma === "en") {

        cambiarTexto("m5e-menu-inicio", "Home");
        cambiarTexto("m5e-menu-modulos", "Modules ▾");
        cambiarTexto("m5e-menu-creditos", "Credits");

        traducirSubmenu("m5e-submenu-modulo", "en");

        cambiarTexto("m5e-etiqueta", "MODULE 5");

        cambiarTexto(
            "m5e-titulo",
            "Final Assessment"
        );

        cambiarTexto(
            "m5e-descripcion",
            "Answer the five questions and check your score at the end."
        );

        /* PREGUNTA 1 */
        cambiarTexto("m5e-pregunta1", "1. What does good digital wellbeing mean?");
        cambiarTexto("m5e-p1-1", "⚖️ Maintain a balance in technology use");
        cambiarTexto("m5e-p1-2", "📱 Use devices all day long");

        /* PREGUNTA 2 */
        cambiarTexto("m5e-pregunta2", "2. What is recommended after spending a lot of time in front of a screen?");
        cambiarTexto("m5e-p2-1", "👀 Take a break and rest");
        cambiarTexto("m5e-p2-2", "💻 Continue without resting");

        /* PREGUNTA 3 */
        cambiarTexto("m5e-pregunta3", "3. What helps to better organize your time?");
        cambiarTexto("m5e-p3-1", "📅 Plan activities");
        cambiarTexto("m5e-p3-2", "⏰ Leave all activities for the last moment");

        /* PREGUNTA 4 */
        cambiarTexto("m5e-pregunta4", "4. What should you do to protect your personal data?");
        cambiarTexto("m5e-p4-1", "🔐 Take care of your passwords and personal information");
        cambiarTexto("m5e-p4-2", "📢 Share your data with anyone");

        /* PREGUNTA 5 */
        cambiarTexto("m5e-pregunta5", "5. What should you do before opening a suspicious link?");
        cambiarTexto("m5e-p5-1", "🔎 Check where it comes from");
        cambiarTexto("m5e-p5-2", "🔗 Open it immediately");

        cambiarTexto(
            "resultado-final",
            "Answer all five questions to know your score."
        );

        cambiarTexto(
            "m5e-boton-anterior",
            "← Module 5"
        );

        cambiarTexto(
            "m5e-boton-inicio",
            "Home"
        );

    }

    else {

        cambiarTexto("m5e-menu-inicio", "Inicio");
        cambiarTexto("m5e-menu-modulos", "Módulos ▾");
        cambiarTexto("m5e-menu-creditos", "Créditos");

        traducirSubmenu("m5e-submenu-modulo", "es");

        cambiarTexto("m5e-etiqueta", "MÓDULO 5");

        cambiarTexto(
            "m5e-titulo",
            "Evaluación final"
        );

        cambiarTexto(
            "m5e-descripcion",
            "Responde las cinco preguntas y revisa tu puntuación al finalizar."
        );

        /* PREGUNTA 1 */
        cambiarTexto("m5e-pregunta1", "1. ¿Qué significa tener un buen bienestar digital?");
        cambiarTexto("m5e-p1-1", "⚖️ Mantener un equilibrio en el uso de la tecnología");
        cambiarTexto("m5e-p1-2", "📱 Utilizar dispositivos durante todo el día");

        /* PREGUNTA 2 */
        cambiarTexto("m5e-pregunta2", "2. ¿Qué es recomendable hacer después de pasar bastante tiempo frente a una pantalla?");
        cambiarTexto("m5e-p2-1", "👀 Hacer una pausa y descansar");
        cambiarTexto("m5e-p2-2", "💻 Continuar sin descansar");

        /* PREGUNTA 3 */
        cambiarTexto("m5e-pregunta3", "3. ¿Qué ayuda a organizar mejor el tiempo?");
        cambiarTexto("m5e-p3-1", "📅 Planificar las actividades");
        cambiarTexto("m5e-p3-2", "⏰ Dejar todas las actividades para el último momento");

        /* PREGUNTA 4 */
        cambiarTexto("m5e-pregunta4", "4. ¿Qué debes hacer para proteger tus datos personales?");
        cambiarTexto("m5e-p4-1", "🔐 Cuidar tus contraseñas y la información personal");
        cambiarTexto("m5e-p4-2", "📢 Compartir tus datos con cualquier persona");

        /* PREGUNTA 5 */
        cambiarTexto("m5e-pregunta5", "5. ¿Qué debes hacer antes de abrir un enlace sospechoso?");
        cambiarTexto("m5e-p5-1", "🔎 Revisar de dónde proviene");
        cambiarTexto("m5e-p5-2", "🔗 Abrirlo inmediatamente");

        cambiarTexto(
            "resultado-final",
            "Responde las cinco preguntas para conocer tu puntuación."
        );

        cambiarTexto(
            "m5e-boton-anterior",
            "← Módulo 5"
        );

        cambiarTexto(
            "m5e-boton-inicio",
            "Inicio"
        );
    }
}

function cambiarIdioma(idioma) {

    if (idioma === "en") {

        cambiarTexto(
            "subtitulo-principal",
            "Build Healthier Digital Habits"
        );

        cambiarTexto(
            "descripcion-principal",
            "Learn to develop healthy digital habits through interactive content about digital wellbeing, time management and cybersecurity."
        );

        cambiarTexto(
            "boton-comenzar",
            "Start"
        );

        cambiarTexto("menu-inicio", "Home");
        cambiarTexto("menu-modulos", "Modules ▾");
        cambiarTexto("menu-creditos", "Credits");

    }

    else {

        cambiarTexto(
            "subtitulo-principal",
            "Construye hábitos digitales saludables"
        );

        cambiarTexto(
            "descripcion-principal",
            "Aprende a desarrollar hábitos digitales saludables mediante contenido interactivo sobre bienestar digital, gestión del tiempo y ciberseguridad."
        );

        cambiarTexto(
            "boton-comenzar",
            "Comenzar"
        );

        cambiarTexto("menu-inicio", "Inicio");
        cambiarTexto("menu-modulos", "Módulos ▾");
        cambiarTexto("menu-creditos", "Créditos");
    }
}


function cambiarIdiomaCreditos(idioma) {

    if (idioma === "en") {

        cambiarTexto("creditos-menu-inicio", "Home");
        cambiarTexto("creditos-menu-modulos", "Modules ▾");
        cambiarTexto("creditos-menu-creditos", "Credits");

        traducirSubmenu("creditos-submenu-modulo", "en");

        cambiarTexto("creditos-etiqueta", "CREDITS");
        cambiarTexto("creditos-titulo", "Sources and Credits");

        cambiarTexto(
            "creditos-descripcion",
            "This page presents the sources used to support the information in Digital Balance, as well as the credits for the resources used in the project."
        );

        cambiarTexto(
            "creditos-fuentes-titulo",
            "Institutional Sources"
        );

        cambiarTexto(
            "creditos-recursos-titulo",
            "Resources Used"
        );

        cambiarTexto(
            "creditos-enlaces-titulo",
            "Reference Links"
        );

        cambiarHTML(
            "creditos-unesco",
            "UNESCO. (2023). <em>Global education monitoring report 2023: Technology in education: A tool on whose terms?</em> UNESCO."
        );

        cambiarHTML(
            "creditos-cisa",
            "Cybersecurity and Infrastructure Security Agency. (n. d.). <em>Secure Our World.</em> U.S. Department of Homeland Security."
        );

        cambiarHTML(
            "creditos-sic",
            "Superintendencia de Industria y Comercio. (n. d.). <em>Delegatura para la Protección de Datos Personales.</em> Government of Colombia."
        );

        cambiarTexto(
            "creditos-imagenes",
            "The images used in the application were generated using artificial intelligence tools and adapted to the visual design of the project."
        );

        cambiarTexto(
            "creditos-contenido",
            "The textual content of the project was created, reviewed and adapted for educational purposes, using institutional and academic sources as references."
        );

        cambiarTexto(
            "creditos-proyecto",
            "Academic project developed by María Valentina Céspedes Cuenca for the Multimedia Applications course at UNAD."
        );

        cambiarTexto(
            "creditos-enlace-unesco",
            "UNESCO - Technology in education"
        );

        cambiarTexto(
            "creditos-enlace-cisa",
            "CISA - Digital security"
        );

        cambiarTexto(
            "creditos-enlace-sic",
            "Superintendencia de Industria y Comercio - Personal data protection"
        );

        cambiarTexto(
            "creditos-boton-inicio",
            "Back to home"
        );

    }

    else {

        cambiarTexto("creditos-menu-inicio", "Inicio");
        cambiarTexto("creditos-menu-modulos", "Módulos ▾");
        cambiarTexto("creditos-menu-creditos", "Créditos");

        traducirSubmenu("creditos-submenu-modulo", "es");

        cambiarTexto("creditos-etiqueta", "CRÉDITOS");

        cambiarTexto(
            "creditos-titulo",
            "Fuentes y créditos"
        );

        cambiarTexto(
            "creditos-descripcion",
            "En esta página se presentan las fuentes utilizadas para respaldar la información de Digital Balance, así como los créditos de los recursos utilizados en el proyecto."
        );

        cambiarTexto(
            "creditos-fuentes-titulo",
            "Fuentes institucionales"
        );

        cambiarTexto(
            "creditos-recursos-titulo",
            "Recursos utilizados"
        );

        cambiarTexto(
            "creditos-enlaces-titulo",
            "Enlaces de consulta"
        );

        cambiarHTML(
            "creditos-unesco",
            "UNESCO. (2023). <em>Global education monitoring report 2023: Technology in education: A tool on whose terms?</em> UNESCO."
        );

        cambiarHTML(
            "creditos-cisa",
            "Cybersecurity and Infrastructure Security Agency. (s. f.). <em>Secure Our World.</em> U.S. Department of Homeland Security."
        );

        cambiarHTML(
            "creditos-sic",
            "Superintendencia de Industria y Comercio. (s. f.). <em>Delegatura para la Protección de Datos Personales.</em> Gobierno de Colombia."
        );

        cambiarTexto(
            "creditos-imagenes",
            "Las imágenes utilizadas en la aplicación fueron generadas mediante herramientas de inteligencia artificial y adaptadas al diseño visual del proyecto."
        );

        cambiarTexto(
            "creditos-contenido",
            "El contenido textual del proyecto fue elaborado, revisado y adaptado para fines educativos, tomando como referencia fuentes institucionales y académicas."
        );

        cambiarTexto(
            "creditos-proyecto",
            "Proyecto académico desarrollado por María Valentina Céspedes Cuenca para el curso de Aplicaciones Multimedia - UNAD."
        );

        cambiarTexto(
            "creditos-enlace-unesco",
            "UNESCO - Tecnología en la educación"
        );

        cambiarTexto(
            "creditos-enlace-cisa",
            "CISA - Seguridad digital"
        );

        cambiarTexto(
            "creditos-enlace-sic",
            "Superintendencia de Industria y Comercio - Protección de datos personales"
        );

        cambiarTexto(
            "creditos-boton-inicio",
            "Volver al inicio"
        );
    }
}

/* ==========================================
   TRADUCCIÓN Y LÓGICA DE MÓDULO 1 - BENEFICIOS
   ========================================== */

let idiomaModulo1Beneficios = 'es';
let ultimoHabitoSeleccionado = null;

function cambiarIdiomaModulo1Beneficios(idioma) {
    idiomaModulo1Beneficios = idioma;

    if (idioma === "en") {
        cambiarTexto("m1b-menu-inicio", "Home");
        cambiarTexto("m1b-menu-modulos", "Modules ▾");
        cambiarTexto("m1b-menu-creditos", "Credits");

        traducirSubmenu("m1b-submenu-modulo", "en");

        cambiarTexto("m1b-etiqueta", "MODULE 1");
        cambiarTexto("m1b-titulo", "Benefits of Good Digital Habits");
        cambiarTexto(
            "m1b-descripcion",
            "Good digital habits can help us take care of our rest, organize our time better, and maintain spaces to share with others without constantly relying on screens."
        );

        cambiarTexto("m1b-beneficios-titulo", "🌱 Discover the benefits of good digital habits");
        cambiarTexto("m1b-beneficios-instruccion", "Select a habit to discover one of its benefits.");

        cambiarTexto("m1b-beneficio-descanso", "😴 Good sleep");
        cambiarTexto("m1b-beneficio-pausas", "📵 Take breaks");
        cambiarTexto("m1b-beneficio-familia", "👨‍👩‍👧 Screen-free time");

        cambiarTexto("m1b-boton-anterior", "← Module 1");
        cambiarTexto("m1b-boton-siguiente", "Module 2 →");

        if (ultimoHabitoSeleccionado) {
            mostrarBeneficio(ultimoHabitoSeleccionado);
        } else {
            cambiarTexto("resultado-beneficio", "Select a habit to discover its benefit.");
        }

    } else {
        cambiarTexto("m1b-menu-inicio", "Inicio");
        cambiarTexto("m1b-menu-modulos", "Módulos ▾");
        cambiarTexto("m1b-menu-creditos", "Créditos");

        traducirSubmenu("m1b-submenu-modulo", "es");

        cambiarTexto("m1b-etiqueta", "MÓDULO 1");
        cambiarTexto("m1b-titulo", "Beneficios de los buenos hábitos digitales");
        cambiarTexto(
            "m1b-descripcion",
            "Los buenos hábitos digitales pueden ayudarnos a cuidar nuestro descanso, organizar mejor nuestro tiempo y mantener espacios para compartir con otras personas sin depender constantemente de las pantallas."
        );

        cambiarTexto("m1b-beneficios-titulo", "🌱 Descubre los beneficios de los buenos hábitos digitales");
        cambiarTexto("m1b-beneficios-instruccion", "Selecciona un hábito para conocer uno de sus beneficios.");

        cambiarTexto("m1b-beneficio-descanso", "😴 Dormir bien");
        cambiarTexto("m1b-beneficio-pausas", "📵 Hacer pausas");
        cambiarTexto("m1b-beneficio-familia", "👨‍👩‍👧 Tiempo sin pantallas");

        cambiarTexto("m1b-boton-anterior", "← Módulo 1");
        cambiarTexto("m1b-boton-siguiente", "Módulo 2 →");

        if (ultimoHabitoSeleccionado) {
            mostrarBeneficio(ultimoHabitoSeleccionado);
        } else {
            cambiarTexto("resultado-beneficio", "Selecciona un hábito para descubrir su beneficio.");
        }
    }
}

function mostrarBeneficio(tipo) {
    ultimoHabitoSeleccionado = tipo;

    const mensajes = {
        descanso: {
            es: "😴 Dormir bien: Evitar el uso de pantallas antes de dormir ayuda a conciliar el sueño más rápido y descansar mejor.",
            en: "😴 Good sleep: Avoiding screens before sleeping helps you fall asleep faster and rest better."
        },
        pausas: {
            es: "📵 Hacer pausas: Tomar descansos durante el día reduce la fatiga visual y ayuda a mantener la concentración.",
            en: "📵 Take breaks: Taking breaks during the day reduces eye strain and helps maintain focus."
        },
        familia: {
            es: "👨‍👩‍👧 Tiempo sin pantallas: Dedicar momentos sin dispositivos fortalece la comunicación y convivencia con la familia y amigos.",
            en: "👨‍👩‍👧 Screen-free time: Spending time without devices strengthens communication and interaction with family and friends."
        }
    };

    const mensaje = mensajes[tipo][idiomaModulo1Beneficios] || mensajes[tipo]['es'];
    cambiarTexto("resultado-beneficio", mensaje);
}


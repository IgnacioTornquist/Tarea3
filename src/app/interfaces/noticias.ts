export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
}

export let ListaNoticias:Array<Noticias>=[
{   id:1,
    idCategoria:1,
    titulo:"Lo más reciente sobre la tragedia fatal en el rodaje de Rust",
    autor: "autor noticia 1",
    fecha: "27-10-2021",
    imagen:"imagen2.png",
    texto: "Nuevos detalles sobre el uso y la naturaleza de las armas y la munición utilizadas en el rodaje de la película Rust, donde una directora de fotografía murió a consecuencia de un disparo hecho por el actor Alec Baldwin. Un experto habla cómo es su trabajo y de qué manera se pueden evitar este tipo de tragedias."
},
{   id:2,
    idCategoria:2,
    titulo:"El Palacio de Buckingham anuncia que la reina Isabel II no asistirá a la cumbre de Glasgow sobre cambio climático",
    autor: "autor noticia 2",
    fecha: "27-10-2021",
    imagen:"imagen3.jpg",
    texto: "La semana pasada la monarca de 95 años se sometió a controles médicos preliminares en un hospital de Londres después de cancelar una visita a Irlanda del Norte."
},
{   id:3,
    idCategoria:3,
    titulo:"Cuarto retiro: Comisión de Constitución aprueba en general el proyecto del 10% de las AFP",
    autor: "autor noticia 3",
    fecha: "27-10-2021",
    imagen:"imagen4.png",
    texto: "La iniciativa tuvo tres votos a favor y dos en contra. Parlamentarios aspiran a que la iniciativa sea votada “a la brevedad” en la Sala del Senado. En tanto, la presidenta del Senado, Ximena Rincón, señaló que para que el proyecto pase a Sala la próxima semana, deberá contar con el respaldo de los comités, lo cual será analizado este viernes."
},
{   id:4,
    idCategoria:4,
    titulo:"CORONAVIRUS CDC adelantan quiénes podrían recibir una cuarta dosis y cuándo",
    autor: "autor noticia 4",
    fecha: "27-10-2021",
    imagen:"imagen5.png",
    texto: "Las personas que padecen ciertas condiciones de salud que hacen que estén moderada o gravemente inmunodeprimidas podrían necesitar una cuarta dosis de una vacuna de ARNm contra el covid-19, según los Centros para el Control y la Prevención de Enfermedades de Estados Unidos."
},
{   id:5,
    idCategoria:5,
    titulo:"Detectan señales del que podría ser el primer planeta descubierto fuera de la Vía Láctea",
    autor: "autor noticia 5",
    fecha: "27-10-2021",
    imagen:"imagen6.jpg",
    texto: "Astrónomos han encontrado indicios de lo que podría ser el primer planeta descubierto fuera de nuestra galaxia. Su proceso de identificación es tan complejo como fascinante."
},
{   id:6,
    idCategoria:6,
    titulo:"Santiago Wanderers sigue complicado con el descenso tras caer contra Deportes Antofagasta",
    autor: "autor noticia 6",
    fecha: "27-10-2021",
    imagen:"imagen7.png",
    texto: "El elenco caturro sumó una nueva derrota por 0-1 ante los Pumas que los deja con 18 puntos en el fondo de la clasificación."
},
{   id:7,
    idCategoria:5,
    titulo:"China implementa restricciones para influir en los niños, incluidos los videojuegos",
    autor: "autor noticia 7",
    fecha: "27-10-2021",
    imagen:"imagen8.jpg",
    texto: "Desde la educación hasta los video juegos, China ha presentado nuevas restricciones enfocadas en los niños en un nuevo esfuerzo del gobierno central por intervenir en la vida privada de las familias y potencialmente influir en una nueva generación. David Culver con el reporte."
}
];

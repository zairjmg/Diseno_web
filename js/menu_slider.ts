//@ts-check
const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const secciones = document.querySelectorAll('.seccion');

let tamañoIndicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamañoIndicador + 'px';

let indexSeccionActiva;

const observer = new IntersectionObserver ((entradas,observer) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            // Obtenemos cual es la seccion que esta entrando en pantalla.
			console.log(`La entrada ${entrada.target.id} esta intersectando`);

			// Creamos un arreglo con las secciones y luego obtenemos el index del la seccion que esta en pantalla.
            indexSeccionActiva = [...secciones].indexOf(entrada.target);
            console.log(indexSeccionActiva);
            indicador.style.transform = `translateX(${tamañoIndicador * indexSeccionActiva}px)`;
        }
    });
}, {
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.3
});

// Agregamos un observador para el hero.
observer.observe(document.getElementById('hero'));

//asignar observador a cada seeccion
secciones.forEach(seccion => {observer.observe(seccion)});

//Evento para cuando la pantalla cambie de tamaño.
const onResize = () => {
    tamañoIndicador = menu.querySelector('a').offsetWidth;

    // Cambiamos el tamaño del indicador.
    indicador.style.width = `${tamañoIndicador}px`;

    // Volvemos a posicionar el indicador.
    indicador.style.transform = `translateX(${tamañoIndicador * indexSeccionActiva}px)`;
}

window.addEventListener('resize', onResize);
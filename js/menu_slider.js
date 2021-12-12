var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//@ts-check
var menu = document.getElementById('menu');
var indicador = document.getElementById('indicador');
var secciones = document.querySelectorAll('.seccion');
var tamañoIndicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamañoIndicador + 'px';
var indexSeccionActiva;
var observer = new IntersectionObserver(function (entradas, observer) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            // Obtenemos cual es la seccion que esta entrando en pantalla.
            console.log("La entrada ".concat(entrada.target.id, " esta intersectando"));
            // Creamos un arreglo con las secciones y luego obtenemos el index del la seccion que esta en pantalla.
            indexSeccionActiva = __spreadArray([], secciones, true).indexOf(entrada.target);
            console.log(indexSeccionActiva);
            indicador.style.transform = "translateX(".concat(tamañoIndicador * indexSeccionActiva, "px)");
        }
    });
}, {
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.3
});
// Agregamos un observador para el hero.
observer.observe(document.getElementById('hero'));
//asignar observador a cada seeccion
secciones.forEach(function (seccion) { observer.observe(seccion); });
//Evento para cuando la pantalla cambie de tamaño.
var onResize = function () {
    tamañoIndicador = menu.querySelector('a').offsetWidth;
    // Cambiamos el tamaño del indicador.
    indicador.style.width = "".concat(tamañoIndicador, "px");
    // Volvemos a posicionar el indicador.
    indicador.style.transform = "translateX(".concat(tamañoIndicador * indexSeccionActiva, "px)");
};
window.addEventListener('resize', onResize);

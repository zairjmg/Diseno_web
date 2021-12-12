//@ts-check
var encabezados = document.querySelectorAll('.contenedor .encabezado');
var enlaces = document.querySelectorAll('#enlaces a');
var observer = new IntersectionObserver(function (entradas, observador) {
    console.log(entradas);
    entradas.forEach(function (entradas) {
        if (entradas.isIntersecting) {
            var id_1 = '#' + entradas.target.id;
            history.pushState({}, '', id_1);
            enlaces.forEach(function (enlace) {
                enlace.classList.remove('activo');
                var href = enlace.attributes.href.nodeValue;
                if (href === id_1) {
                    enlace.classList.add('activo');
                }
            });
        }
    });
}, {
    threshold: 1,
    rootMargin: '0px 0px -50% 0px'
});
encabezados.forEach(function (encabezados) {
    observer.observe(encabezados);
});

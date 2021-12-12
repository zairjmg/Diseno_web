//@ts-check
const encabezados = document.querySelectorAll('.contenedor .encabezado');
const enlaces = document.querySelectorAll('#enlaces a');
const observer = new IntersectionObserver((entradas, observador) => {
    console.log(entradas);
    entradas.forEach(entradas => {
        if (entradas.isIntersecting) {
            const id: string = '#' + entradas.target.id;
            history.pushState({}, '', id);

            enlaces.forEach(enlace => {
                enlace.classList.remove('activo');

                const href = enlace.attributes.href.nodeValue;

                if (href === id) {
                    enlace.classList.add('activo');
                }
            });
        }
    });
    
}, {
    threshold: 1,
    rootMargin: '0px 0px -50% 0px'
});

encabezados.forEach(encabezados => {
    observer.observe(encabezados);
});
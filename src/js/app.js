document.addEventListener('DOMContentLoaded', function(){ //como van a ser varias funciones las registro con addEventListener y las mando a llamar 
    iniciarApp();
});

function iniciarApp(){
    navegacionFija();
    crearGaleria(); //una funcion especifica para la galeria
    scrollNav(); 
}

function navegacionFija(){
        const barra = document.querySelector('.header');
        const sobreFestival = document.querySelector('.sobre-festival');
        const body = document.querySelector('body');


        window.addEventListener('scroll', function(){

            if( sobreFestival.getBoundingClientRect().bottom < 0){
                barra.classList.add('fijo');
                body.classList.add('body-scroll');

            } else{
                barra.classList.remove('fijo');
                body.classList.remove('body-scroll');
            }
        });
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( enlace =>{
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView( {behavior: 'smooth'} );
        });
    });
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria_imagenes');

    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="imag/avif">
        <source srcset="build/img/thumb/${i}.webp" type="imag/webp">
        <img width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen de una galeria">
        `; 

        imagen.onclick = function() {
            mostarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostarImagen(id){
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
    <source srcset="build/img/grande/${id}.avif" type="imag/avif">
    <source srcset="build/img/grande/${id}.webp" type="imag/webp">
    <img width="200" height="300" src="build/img/grande/${id}.jpg" alt="Imagen de una galeria">
    `; 

    //Crea el overlay con imagen
    const overlay = document.createElement("div");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");

    // Agrega un botón para cerrar el overlay
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "X";
    closeButton.addEventListener("click", function() {
        const body = document.querySelector("body");        
        body.classList.remove("fijar-body");  
        overlay.remove(); //remove es metodo de js
    });
    overlay.appendChild(closeButton);

    //Anadiendolo al html
    const body = document.querySelector("body");
    body.appendChild(overlay);            
    body.classList.add("fijar-body");  
}
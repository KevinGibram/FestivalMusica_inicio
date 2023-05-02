document.addEventListener('DOMContentLoaded', function(){ //como van a ser varias funciones las registro con addEventListener y las mando a llamar 
    iniciarApp();
});

function iniciarApp(){
    crearGaleria(); //una funcion especifica para la galeria
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria_imagenes');

    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="src/img/thumb/${i}.avif" type="imag/avif">
        <source srcset="src/img/thumb/${i}.webp" type="imag/webp">
        <img width="200" height="300" src="src/img/thumb/${i}.jpg" alt="Imagen de una galeria">
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
    <source srcset="src/img/grande/${id}.avif" type="imag/avif">
    <source srcset="src/img/grande/${id}.webp" type="imag/webp">
    <img width="200" height="300" src="src/img/grande/${id}.jpg" alt="Imagen de una galeria">
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
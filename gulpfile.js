const { src, dest, watch, parallel} = require("gulp");

//css
const sass = require("gulp-sass")(require('sass'));
const plumber =require("gulp-plumber");


//imagenes 
const avif =require("gulp-avif");
const cache =require("gulp-cache");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");

function css(done) {

    src("src/scss/**/*.scss") //identifica el archivo sass
    .pipe( plumber())
    .pipe( sass())          //compilarlo
    .pipe( dest("build/css")); //almacenarla en el disco duro

    done(); // Callback que avisa a gulp cuando llegamos al final
}

function imagenes( done){
    const opcioes = {
        optimizationLavel: 3
    }
    src("src/img/**/*.{png,jpg}")
    .pipe(cache(imagemin(opcioes)))
    .pipe(dest("build/img"));
    done();
}

function versionWebp( done ){
    const opciones = {
        quality: 50
    };

    src("src/img/**/*.{png,jpg}") //identifica el archivo sass
    .pipe( webp(opciones))  //compilarlo
    .pipe( dest("build/img")) //almacenarla en el disco duro
    done();
}

function versionAvif( done ){
    const opciones = {
        quality: 50
    };

    src("src/img/**/*.{png,jpg}") //identifica el archivo sass
    .pipe( avif(opciones))  //compilarlo
    .pipe( dest("build/img")) //almacenarla en el disco duro
    done();
}

function javascript(done){
    src("src/js/*.js")
    .pipe(dest("build/js"));

    done();
}

function dev(done){

watch("src/scss/**/*.scss", css);
watch("src/js/*.js", javascript);

done()
}

exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev);
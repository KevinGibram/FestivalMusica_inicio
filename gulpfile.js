const { src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function css(done) {

    src("src/scss/**/*.scss") //identifica el archivo sass
    .pipe( sass())          //compilarlo
    .pipe(dest("build/css")); //almacenarla en el disco duro

    done(); // Callback que avisa a gulp cuando llegamos al final
}

function dev(done){

watch("src/scss/**/*.scss", css);

done()
}

exports.css = css;
exports.dev = dev;
const { src, dest} = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function css(done) {

    src("src/scss/app.scss") //identifica el archivo sass
    .pipe( sass())          //compilarlo
    .pipe(dest("build/css")); //almacenarla en el disco duro

    done(); // Callback que avisa a gulp cuando llegamos al final
}

exports.css = css;
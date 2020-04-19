// gulpfile.js	
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");

var paths = {	
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        src: "scss/**/*.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "dist"
    }
};

// Define tasks after requiring dependencies
	
function style() {	
    return (
        gulp
            .src(paths.styles.src)
			.pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
			.pipe(postcss([autoprefixer(), cssnano()]))
			.pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.styles.dest))
    );
}	
exports.style = style;

function watch(){
    // gulp.watch takes in the location of the files to watch for changes
    // and the name of the function we want to run on change
    gulp.watch(paths.styles.src, style)
}
exports.watch = watch;
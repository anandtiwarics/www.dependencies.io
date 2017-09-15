var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer")
    concat       = require('gulp-concat')
    hash         = require("gulp-hash"),
    del          = require("del")

var static_src_css = "./static_src/css"
var static_src_scss = "./static_src/scss"
var static_src_img = "./static_src/img"
var static_src_permanent = "./static_src/permanent"

var static_css = "./static/css"
var static_img = "./static/img"
var static_permanent = "./static/permanent"

var style_scss = static_src_scss + "/style.scss"
var bootstrap_custom_scss = static_src_scss + "/bootstrap_custom.scss"

var dropseed_static_dir = "./themes/dropseed-hugo-theme/static_src"
var bootstrap_scss_dir = dropseed_static_dir + "/bootstrap-4.0.0-beta/scss"
var bootstrap_scss = bootstrap_scss_dir + "/bootstrap.scss"
var dropseed_style_scss = dropseed_static_dir + "/scss/style.scss"

// make @imports work even though we're not in the bootstrap scss dir anymore
var scss_importable_dirs = [
    bootstrap_scss_dir,
    static_src_css,
    dropseed_static_dir + "/scss"
]

// A lot of this inspired by
// http://danbahrami.io/articles/building-a-production-website-with-hugo-and-gulp-js/

// Compile SCSS files to CSS
gulp.task("scss", function () {
    del([static_css + "/**/*"])
    // first put our custom bootstrap variables at the top
    // then all of bootstraps scss imports
    // then our final style tweaks
    gulp.src([bootstrap_custom_scss, bootstrap_scss, dropseed_style_scss, style_scss])
        .pipe(concat("app.css"))
        .pipe(sass({
            outputStyle : "compressed",
            includePaths: scss_importable_dirs
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(hash())
        .pipe(gulp.dest(static_css))
        //Create a hash map
        .pipe(hash.manifest("hash.json", false))
        //Put the map in the data directory
        .pipe(gulp.dest("data/css"))
})

// Hash img
gulp.task("img", function () {
    del([static_img + "/**/*"])
    gulp.src(static_src_img + "/**/*")
        .pipe(hash())
        .pipe(gulp.dest(static_img))
        .pipe(hash.manifest("hash.json", false))
        .pipe(gulp.dest("data/img"))
})

// Just copy permanent images
gulp.task("permanent", function () {
    del([static_permanent + "/**/*"])
    gulp.src(static_src_permanent + "/**/*")
        .pipe(gulp.dest(static_permanent))
})

//
// // Hash regular css files
// gulp.task("css", function () {
//     del([static_css + "/**/*"])
//     gulp.src(static_src_css + "/**/*")
//         .pipe(hash())
//         .pipe(gulp.dest(static_css))
//         .pipe(hash.manifest("hash.json", true))
//         .pipe(gulp.dest("data/css"))
// })

gulp.task("build", ["img", "permanent", "scss"])

// Watch asset folder for changes
gulp.task("watch", ["build"], function () {
    var log_change = function (event) {
        console.log('Event type: ' + event.type) // added, changed, or deleted
        console.log('Event path: ' + event.path) // The path of the modified file
    }

    gulp.watch([static_src_scss + "/**/*", dropseed_static_dir + "/**/*"], ["scss"]).on('change', log_change)
    gulp.watch(static_src_img + "/**/*", ["img"]).on('change', log_change)
    gulp.watch(static_src_permanent + "/**/*", ["permanent"]).on('change', log_change)
})

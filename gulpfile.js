"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");

gulp.task("css", function () {
  return gulp.src("src/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    // .pipe(csso())
    .pipe(rename("style_min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("public/css"))
    .pipe(server.stream());
});

gulp.task("sass", function () {
  return gulp.src("src/sass/**/*.scss")
  .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest("public/css"))
})

// gulp.task("task_name", function () {
//     return gulp.src("source_files") // путь к файлам-исходникам
//     .pipe(plugin_name()) // название плагина, через который прогоняем их
//     .pipe(gulp.dest("destination")) // путь к папке, куда помещаем конечные файлы
// })

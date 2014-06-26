var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var templateData = require("./data/data.js");

gulp.task('default', function () {

    var a = gulp.src('template.html')
        .pipe(handlebars(templateData, null))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'))


    var b = gulp.src('template.rss')
        .pipe(handlebars(templateData, null))
        .pipe(rename('rss.xml'))
        .pipe(gulp.dest('./'));

    return a && b
});

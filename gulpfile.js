// Include gulp
var gulp = require('gulp');

// Include plugins
var sass        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    minifyCSS   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    watch       = require('gulp-watch');

// Compile SCSS
gulp.task('sass', function() {
    return gulp.src('src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/assets/css'))
        .pipe(concat('cannonfire.css'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(minifyCSS())
        .pipe(rename('cannonfire.min.css'))
        .pipe(gulp.dest('build/assets/css'));
});

// Watch for changes
gulp.task('watch', function() {
    gulp.watch('src/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['sass']);
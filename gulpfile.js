var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    replacename = require('gulp-replace-name');;

// SASS
gulp.task('sass', function (done) {
    gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
        }))
        .pipe(cleancss({
            compatibility: 'ie8'
        }))
        .pipe(replacename(/\.css/g, '.min.css'))
        .pipe(gulp.dest('css'))

    done();
});

// BUILD
gulp.task('build', gulp.series('sass'));
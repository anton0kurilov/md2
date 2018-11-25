var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    replacename = require('gulp-replace-name'),
    uglify = require('gulp-uglifyjs');

// SASS
gulp.task('sass', function (done) {
    gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
        }))
        .pipe(cleancss({
            compatibility: 'ie7'
        }))
        .pipe(replacename(/\.css/g, '.min.css'))
        .pipe(gulp.dest('css'))
    done();
});

// SCRIPTS
gulp.task('scripts', function (done) {
    gulp.src('js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'))
    done();
});

// BUILD
gulp.task('build', gulp.series('sass', 'scripts'));
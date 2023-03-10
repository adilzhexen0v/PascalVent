const gulp = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const gulpSourcemaps = require('gulp-sourcemaps');

gulp.task('styles-compile', () => {
     return gulp.src('./app/scss/*.scss')
     .pipe(gulpSourcemaps.init())
     .pipe(gulpSass().on('error', gulpSass.logError))
     .pipe(gulpSourcemaps.write('./'))
     .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', () => {
     gulp.watch('./app/scss/*.scss', gulp.series('styles-compile'));
});
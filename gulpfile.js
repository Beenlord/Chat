const
    gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    sync = require('browser-sync').create();

gulp.task('style', async function() {
    return gulp.src('./app/assets/stylesheet/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/assets/stylesheet'));
});

gulp.task('watch', async function() {
    return gulp.watch('./app/assets/stylesheet/scss/**/**.scss', gulp.series('style'));
})

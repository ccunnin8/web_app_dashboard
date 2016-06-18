var gulp = require('gulp'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload');

gulp.task('styles',function(){
	gulp.src('scss/application.scss').pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./css/'))
	.pipe(livereload());
});

gulp.task('default',function(){
	livereload.listen({
		reloadPage: true
	});
	gulp.watch('scss/**/*.scss',['styles']);
})
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload'),
	cleanCSS = require("gulp-clean-css"),
	uglifyJS = require("gulp-uglifyjs");

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

gulp.task("minify",function(){
	gulp.src("css/*.css").pipe(cleanCSS()).pipe(gulp.dest("dist/css"));
	gulp.src("javascript/*.js").pipe(uglifyJS()).pipe(gulp.dest("dist/js"));
})
// !!!!!!! Сделано для Deploy  проекта на GitHub pages
import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
export const ghPages = () => {
	pipe('deploy', function () {
		return gulp.src('./dist/**/*')
			.pipe(ghPages());
	});
}
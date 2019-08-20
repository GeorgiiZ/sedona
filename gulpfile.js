var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite');
 
gulp.task('svgSprite', function () {
    return gulp.src('./src/assets/*.svg') // svg files for sprite
        .pipe(svgSprite({
          mode: {
              stack: {
                  sprite: "../sprite.svg"  //sprite file name
              }
          },
      }))
        .pipe(gulp.dest('./src/assets/sprite'));
});
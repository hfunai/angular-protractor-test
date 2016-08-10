var gulp  = require('gulp');
var protractor  = require('gulp-protractor');

gulp.task('test-e2e', function(callback){
  return gulp.src('app-spec.js')
  .pipe(protractor.protractor({
    configFile: 'conf.js'
  }))
  .on('error', function(e) { callback(); });
});

var gulp = require('gulp');
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({lazy:true});
var config = require('./gulp.config')();

gulp.task('lint',function(){
    log('linting javascript files');

    return gulp.src(config.jsfiles)
    .pipe($.if(args.verbose,$.print()))
    .pipe($.jscs())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish',{verbose:true}))
    .pipe($.jshint.reporter('fail'));
});



function log(msg){
 if(typeof(msg) === 'object'){
    for(var item in msg){
        if(msg.hasOwnProperty(item)){
            $.util.log($.util.colors.blue(msg[item]));
        }
    }
 }else{
    $.util.log($.util.colors.blue(msg));
 }
}

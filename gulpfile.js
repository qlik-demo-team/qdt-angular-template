var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('default', ['aws']);

gulp.task('aws', function() {
    exec('aws s3 sync ./dist/ s3://qlikmarketing-webapps/qdt-components/angular5 --cache-control "max-age=3600"', (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        exec(`aws cloudfront create-invalidation --distribution-id E1TXZE4I5DIDHP --paths /qdt-components/angular5/*`, (err, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            // cb(err);
        });
    });
})
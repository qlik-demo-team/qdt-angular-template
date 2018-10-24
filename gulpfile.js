const gulp = require('gulp');
const exec = require('child_process').exec;

const bucket = 'qdt-components/angular';

gulp.task('default', ['aws']);

gulp.task('aws', () => {
  exec(`aws s3 sync ./dist/ s3://qlikmarketing-webapps/${bucket} --cache-control "max-age=3600"`, (err, stdout, stderr) => {
    console.log('Step 1: Sync');
    if (stdout) console.log(stdout);
    if (stderr) console.log(stderr);
    exec(`aws s3 cp --exclude "*" --include "*.js" --content-type="application/javascript" --metadata-directive="REPLACE" --recursive s3://qlikmarketing-webapps/${bucket}  s3://qlikmarketing-webapps/${bucket} `, (err, stdout, stderr) => {
      console.log('Step 2: Set js content type');
      if (stdout) console.log(stdout);
      if (stderr) console.log(stderr);
      exec(`aws cloudfront create-invalidation --distribution-id E1TXZE4I5DIDHP --paths /${bucket}/*`, (err, stdout, stderr) => {
        console.log('Step 3: Invalidate');
        if (stdout) console.log(stdout);
        if (stderr) console.log(stderr);
      });
    });
  });
});

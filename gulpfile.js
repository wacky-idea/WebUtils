const { parallel } = require("gulp");
var gulp = require("gulp");
var ts = require("gulp-typescript");
var merge = require('merge2');

gulp.task("build", parallel(buildAMD, buildUMD, buildES, buildCJS));

gulp.task("build:AMD", buildAMD);
gulp.task("build:UMD", buildUMD);
gulp.task("build:ES", buildES);
gulp.task("build:CJS", buildCJS);

function buildAMD() {
  return build();
}

function buildUMD() {
  return build("UMD", "umd");
}

function buildES() {
  return build("ES2015", "es");
}

function buildCJS() {
  return build("CommonJS", "cjs");
}

function build(module = "AMD", dist = "amd") {
  var tsconfig = ts.createProject("tsconfig.json", { target: 'ES6', module, removeComments: false });
  var tsResult = tsconfig.src().pipe(tsconfig())
  return merge([
    tsResult.js.pipe(gulp.dest(`dist/${dist}`)),
    tsResult.dts.pipe(gulp.dest(`dist/${dist}`))
  ])
}

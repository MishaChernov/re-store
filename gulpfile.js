'use strict'

const gulp = require('gulp-v4');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const debug = require('gulp-debug');
const minify = require('gulp-csso');
const multipipe = require('multipipe');
const rename = require('gulp-rename');
const notify = require('gulp-notify');

function styles() {

  return multipipe(
    gulp.src('./src/styles/style.scss'),
      sass(),
      postcss([
        autoprefixer(),
        mqpacker({
          sort: true
        })
      ]),
      minify(),
      rename('style-min.css'),
      debug({title: 'TASK: Styles'}),
      gulp.dest('public/css')
  ).on('error', notify.onError(function(err) {
    return {
      title: 'css',
      message: err.message
    };
  }));
}

function watch() {
  gulp.watch('src/components/**/*.scss', styles)
}

exports.watch = watch;


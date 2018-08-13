'use strict';

var gulp = require('gulp');
var rogercoreTasks = require('rogercore-build');

rogercoreTasks('message');

gulp.task('default', ['lint', 'coverage']);

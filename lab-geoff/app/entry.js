require('./scss/main.scss');

let angular = require('angular');
let path = require('path');
let camelcase = require('camelcase');
let pascalcase = require('pascalcase');
let uiRouter = require('angular-ui-router');
// let ngTouch = require('angular-touch');
// let ngAnimate = require('angular-animate');

let ngApp = angular.module('ngApp', [uiRouter]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach( path => {
  ngApp.config(context(path));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  let module = context(key);
  ngApp.controller(name, module);
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  ngApp.service(name, module);
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  ngApp.component(name, module);
});
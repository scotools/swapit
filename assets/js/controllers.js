
define(function (require) {

  var angular = require('angular'),
      Controllers = angular.module('controllers', []);

  Controllers.controller('angUserController', require('controllers/angUserController'));

  return Controllers;

});

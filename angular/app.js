import '../angular.js';
import '../angular-ui-router.js'
import homeCtrl from './homeCtrl'
import homeService from './homeService'
import myNav from './navDirective'
import appConfig from './appConfig'

angular.module("app", ['ui.router'])
.controller('homeCtrl', ["$scope", "homeService", homeCtrl])
.service('homeService', homeService)
.config(["$stateProvider", "$urlRouterProvider", appConfig])
.directive('myNav', myNav)

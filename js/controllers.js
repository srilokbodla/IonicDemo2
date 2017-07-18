/**
 * Created by srilok on 02-07-2017.
 */
angular.module('app.controllers', [])
  .controller('welcomeCtrl', ['$scope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope) {


    }])
.controller('calculatorCtrl', ['$scope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope) {

    $scope.form = {number1: '', number2: ''}
    $scope.total = function() {

      try {
        $scope.sum = Math.round($scope.form.number1 + $scope.form.number2);
      }
      catch (e) {
        console.log(e);
      }
      ;
    }
    $scope.differ = function() {

      try {
        $scope.difference = Math.round($scope.form.number1 - $scope.form.number2);
      }
      catch (e) {
        console.log(e);
      }
      ;
    }
  }])

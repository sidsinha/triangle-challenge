var app = angular.module('myApp', []);

      app.controller('mainController', function ($scope) {

          $scope.result = 'Enter Values and Hit Submit';
          $scope.ctrl = {xVal:'', yVal:'', zVal:''};

          function isInt(n){
              if(n>0)
                  return Number(n) === n && n % 1 === 0;
              else
                  return false
          }
          //checkTriangle function which calls after user hit on Submit
          $scope.checkTriangle = function () {

              var x = Number($scope.ctrl.xVal);
              var y = Number($scope.ctrl.yVal);
              var z = Number($scope.ctrl.zVal);

              //checking if length is empty or zero
              if( (isInt(x) == false) || (isInt(y) == false) || (isInt(z) == false) ){
                  $scope.result = 'Triangle lengths are Invalid !';
              }
              //checking if its a valid lengths for Triangle
              else if( (x + y > z) & (x + z > y) & (y + z > x) ){

                  //checking if all the lengths are same
                  if(x == y & y == z){
                      $scope.result = 'This is EQUILATERAL TRIANGLE !';
                  }
                  //checking if atleast 2 side lengths are same
                  else if( (x == y) || (y == z) || (z == x) ){
                      $scope.result = 'This is ISOSCELES TRIANGLE !';
                  }
                  //its a triangle but all lengths are different
                  else {
                      $scope.result = 'This is SCALENE TRIANGLE !';
                  }
              }
              else {
                  $scope.result = 'This is not a TRIANGLE !';
              }

          }
      });
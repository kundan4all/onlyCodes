app.controller("contactctrl",function($scope,$routeParams){
    $scope.result = "name is"+$routeParams.name+"Job"+$routeParams.job;
})
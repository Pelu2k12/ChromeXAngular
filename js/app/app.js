(function (ng){
    var myApp = ng.module('TaskTimer', ['timer']).controller("PageController", function($scope) {
        $scope.counter = 0;
    });
})(angular);
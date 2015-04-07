myApp.controller("PageController", ['$scope', '$compile', '$element', function($scope, $compile, $element) {
    $scope.counter = 0;
    this.addTimer = function (){
        $scope.counter++;
        angular.element(document.getElementById('timerDiv')).append(
            $compile("<timer id='"+$scope.counter+"'></timer>")($scope)
        );
    };
}]);
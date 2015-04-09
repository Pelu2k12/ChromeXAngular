(function (ng){
    var myApp = ng.module('TaskTimer', ['timer']).controller("PageController", ['$scope', '$compile', '$element', function($scope, $compile, $element) {
        $scope.counter = 0;
        this.addTimer = function (){
            $scope.counter++;
            ng.element(document.getElementById('timerDiv')).append(
                $compile("<timer id='"+$scope.counter+"'></timer>")($scope)
            );
        };
    }]);
})(angular);
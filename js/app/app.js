(function (ng){
    var myApp = ng.module('TaskTimer', ['timer', 'newTimerForm']).controller("PageController", ['$scope', '$compile', '$element', function($scope, $compile, $element) {
        $scope.counter = 0;
//        this.showNewTimerForm = false;
        
        this.showNewTimerForm = function (){
            $scope.isNewFormVisible = !$scope.isNewFormVisible;
        };
        
//        this.addTimer = function (){
//            $scope.counter++;
//            ng.element(document.getElementById('timerDiv')).append(
//                $compile("<timer id='"+$scope.counter+"' ></timer>")($scope)
//            );
//        };
    }]);
})(angular);
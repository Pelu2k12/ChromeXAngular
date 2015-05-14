(function (ng){
    var myApp = ng.module('TaskTimerTracker', ['SqlServiceModule', 'timer', 'newTimerForm']).controller("PageController", ['$scope', 'SqlService', function($scope, SqlService) {
        $scope.counter = 0;
//        this.showNewTimerForm = false;

        this.showNewTimerForm = function (){
            
            
            $scope.isNewFormVisible = !$scope.isNewFormVisible;
            $scope.newTimerFormCtrl.isNewFormVisible = !$scope.newTimerFormCtrl.isNewFormVisible;
        };
    }]);
})(angular);

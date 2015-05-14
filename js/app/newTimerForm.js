(function (ng){
    var myApp = ng.module('newTimerForm', ['SqlServiceModule']).directive('newTimerForm', function (){
        return {
            restrict: "E",
            templateUrl: 'directives/newTimerForm.html',
            controllerAs: "newTimerFormCtrl",
            controller: function ($scope, $compile, $element){
                var self = this;
                $scope.isNewFormVisible = false;
                // Button click event
                self.addTimer = function (){
                    $scope.counter++;
                    ng.element(document.getElementById('timerDiv')).append(
                        $compile("<timer id='"+$scope.counter+"' project='" + self.project + "' task='" + self.task + "'></timer>")($scope)
                    );
                };
            }
        };
    });
})(angular);

(function (ng){
    var myApp = ng.module('newTimerForm', []).directive('newTimerForm', function (){
        return {
            restrict: "E",
            templateUrl: 'directives/newTimerForm.html',
            controllerAs: "newTimerFormCtrl",
            controller: function ($scope, $compile, $element){
                var self = this;
                $scope.isNewFormVisible = false;
                self.addTimer = function (){
                    $scope.counter++;
                    ng.element(document.getElementById('timerDiv')).append(
                        $compile("<timer test='d1234' id='"+$scope.counter+"' project='" + self.project + "' task='" + self.task + "'>hello here</timer>")($scope)
                    );
                };
            }
        };
    });
})(angular);
(function (ng){
    var myApp = ng.module('newTimerForm', []).directive('newTimerForm', function (){
        return {
            restrict: "E",
            templateUrl: 'directives/newTimerForm.html',
            controllerAs: "newTimerFormCtrl",
            controller: function ($scope, $compile, $element){
                $scope.isNewFormVisible = false;
                
                this.addTimer = function (){
                    $scope.counter++;
                    ng.element(document.getElementById('timerDiv')).append(
                        $compile("<timer id='"+$scope.counter+"'>hello here</timer>")($scope)
                    );
                };
            }
        };
    });
})(angular);
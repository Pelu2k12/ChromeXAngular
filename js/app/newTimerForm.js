(function (ng){
    var myApp = ng.module('newTimerForm', []).directive('newTimerForm', function (){
        return {
            restrict: "E",
            templateUrl: 'directives/newTimerForm.html',
            controllerAs: "newTimerFormCtrl",
            controller: function ($scope){
                $scope.showNewTimerForm = false;
            }
        };
    });
})(angular);
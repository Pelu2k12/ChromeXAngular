(function (ng){
    var myApp = ng.module('TaskTimer', ['timer']).controller("PageController", ['$scope', '$compile', '$element', function($scope, $compile, $element) {
        
        var self = this;
        
        $scope.counter = 0;
        this.addTimer = function (){
            $scope.counter++;
            
            console.log(self.project + "--" + self.task);
            ng.element(document.getElementById('timerDiv')).append(
                $compile("<timer id='"+$scope.counter+"' ></timer>")($scope)
            );
        };
    }]);
})(angular);
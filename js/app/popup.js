myApp.controller("PageController", ['$scope', '$compile', '$element', function($scope, $compile, $element) {
    this.addTimer = function (){
        $scope.counter++;
        // // console.log(document.getElementById("foo");
        // var newTimerNode = $compile( "<timer></timer>" )( $scope );
        // $element(document.getElementById('timerDiv')).append(newTimerNode);
        angular.element(document.getElementById('timerDiv')).append(
            $compile("<timer id='"+$scope.counter+"'></timer>")($scope)
        );
        // $element(document.getElementById('timerDiv').appendChild(newTimerNode);

        // document.getElementById('timerDiv').appendChild(document.createElement("timer"));
    };
}]);
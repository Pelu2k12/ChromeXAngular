myApp.controller("PageController", ['$scope', '$interval', function($scope, $interval) {
    this.timer = "00:00:00";

	var Timer = function (controller){
        var _counter = 0,
            _controller = controller,
            displayTime = function (){
                _controller.timer = moment().hour(0).minute(0).second(_counter++).format('HH:mm:ss');
            },
            _isClockRunning = false;

        this.startClock = function (){
            if (_isClockRunning === false){
                displayTime();
                _isClockRunning = $interval(function(){
                    displayTime();
                }, 1000);
            }      
        };

        this.pauseClock = function (){
            $interval.cancel(_isClockRunning);
            _isClockRunning = false;
        };
        
        this.stopClock = function (){
            $interval.cancel(_isClockRunning);
            _isClockRunning = false;
            _counter = 0;
        };

        this.resetClock = function (){
            this.stopClock();
            displayTime();
        };

        this.toggleClock = function (){
            if (_isClockRunning === false){
                this.startClock();
            } else {
                this.pauseClock();
            }
        };
    };

    Timer = new Timer(this);
    this.startClock = Timer.toggleClock.bind(Timer);
    this.pauseClock = Timer.pauseClock.bind(Timer);
    this.stopClock = Timer.stopClock.bind(Timer);
    this.resetClock = Timer.resetClock.bind(Timer);
}]);
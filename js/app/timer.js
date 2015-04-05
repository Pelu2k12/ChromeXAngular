var myApp = angular.module('timer', []).directive('timer', ["$interval", function ($interval){
	var TimerPrototype = function (controller){
        var _counter = 1,
            _controller = controller,
            displayTime = function (){
                _controller.timer = moment().hour(0).minute(0).second(_counter++).format('HH:mm:ss');
            },
            _isClockRunning = false;

        this.startClock = function (){
            // displayTime();
            _isClockRunning = $interval(function(){
                displayTime();
            }, 1000);
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
            _counter = 0;
            displayTime();
        };

        this.toggleClock = function (){
        	var state = this.getState();
            
            if (state === false){
                this.startClock();
            } else {
                this.pauseClock();
            }

            return this.getState();
        };

        this.getState = function (){
        	return _isClockRunning;
        };
    };

	return {
		restrict: "E",
		templateUrl: 'directives/timer.html',
        controllerAs: "timerCtrl",
        scope: {timerScope: '=id'},
        controller: function ($element){
		    
		    var Timer = new TimerPrototype(this);

		    this.toggleClock = function (){
		    	if (Timer.toggleClock() === false){
		    		this.payButton = 'Play';
		    	}else{
					this.payButton = 'Pause';
		    	}
		    };
		    this.stopClock = function (){
		    	if (Timer.toggleClock() === false){
		    		this.payButton = 'Play';
		    	}
		    	Timer.stopClock();
		    };
		    this.resetClock = Timer.resetClock.bind(Timer);
		}
	};
}]);
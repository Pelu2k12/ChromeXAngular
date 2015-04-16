(function (ng){
        var myApp = ng.module('timer', []).directive('timer', ['$interval', '$compile', function ($interval, $compile){
        var TimerPrototype = function (scope, controller){
            var _counter = 1,
                _lapCounter = 1,
                _lapCounterId = 1,
                _isClockRunning = false,
                _controller = controller,
                converCounterToTime = function (n){
                    return moment().hour(0).minute(0).second(n).format('HH:mm:ss');
                },
                displayTime = function (){
                    _controller.timer = converCounterToTime(_counter++);
                    _lapCounter++;
                },
                createLapNode = function (time){
                    var lapId = _controller.lapsDivId + "_" + _lapCounterId,
                        parent = document.getElementById(_controller.lapsDivId);
                    _controller[lapId] = converCounterToTime(time);
                                        
                    ng.element(parent).append(
                        $compile("<div>" + _controller[lapId] + "</div>")(scope)
                    );
                    parent.scrollTop = parent.scrollHeight;
                    
                    return lapId;
                },
                removeLapNodes = function (){
                    ng.element(document.getElementById(_controller.lapsDivId)).empty();
                };
            
            this.identity = scope.timerScope;
            _controller.lapsDivId = 'laps_' + this.identity;
            
            this.startClock = function (){
                displayTime();
                _isClockRunning = $interval(function(){
                    displayTime();
                }, 1000);
            };

            this.pauseClock = function (){
                $interval.cancel(_isClockRunning);
                createLapNode(_lapCounter - 1);
                _isClockRunning = false;
                
                _lapCounter = 1;
                _lapCounterId++;
            };

            this.stopClock = function (){
                this.pauseClock();
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
            controller: function ($scope, $element){                
                var Timer = new TimerPrototype($scope, this);

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
                this.deleteClock = function (){
                    Timer.stopClock();
                    Timer = null;
                    $element.remove();
                };
                this.resetClock = Timer.resetClock.bind(Timer);
            }
        };
    }]);
})(angular);
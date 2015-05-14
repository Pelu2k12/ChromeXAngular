(function (ng){
    var myApp = ng.module('TaskTimer', ['timer', 'newTimerForm']).controller("PageController", ['$scope', '$compile', '$element', function($scope, $compile, $element) {
        $scope.counter = 0;
//        this.showNewTimerForm = false;

        this.showNewTimerForm = function (){
            $scope.isNewFormVisible = !$scope.isNewFormVisible;
            $scope.newTimerFormCtrl.isNewFormVisible = !$scope.newTimerFormCtrl.isNewFormVisible;
        };
    }]);
})(angular);


var db = openDatabase('TaskTimerTracker', '1.0', 'Task time track database', 2 * 1024 * 1024);

var dbErrorLogger = function (tx, error){
    console.log(error);
};

/**
 * Delete all records (drop table)
 */
var dropTaskTable = function () {
    db.transaction(function (tx) {
        tx.executeSql("DROP TABLE TASKS", [], function (tx, results) {
            alert('Table tasks was droped');
        }, dbErrorLogger);
    });
};
//dropTaskTable();
/**
 * id - unique autoincrement identificator of task
 * projectName - project name or caption of the project
 * taskName - name of taks or caption of task
 * time - keep cumulative time from begining to STOP press
 * start - we need some guide for calculate time increase
 * running - task is in progress now
 */
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS TASKS (id INTEGER PRIMARY KEY ASC, projectName TEXT, taskName TEXT, time INTEGER, start DATETIME, running BOOLEAN)');
});

db.transaction(function (tx) {
    tx.executeSql("INSERT INTO TASKS (projectName, taskName, time, start, running) VALUES (?, ?, ?, ?, ?)", ['testP', 'testT', 0, new Date(), false], function (tx, result) {
        console.log(result);
    }, dbErrorLogger);
});

//db.transaction(function (tx) {
//    tx.executeSql("DELETE FROM TASKS WHERE id=?", [1], function (tx, result) {
//        console.log(result);
//    }, dbErrorLogger);
//});

(function (ng){
    var myApp = ng.module('SqlServiceModule', []).service('SqlService', function () {
        var DB_NAME = 'TaskTimerTracker',
            DB_VERSION = '1.0',
            DB_DESCRIPTION = 'Task time track database',
            DB_SIZE = 2 * 1024 * 1024;

        var db = openDatabase(DB_NAME, DB_VERSION, DB_DESCRIPTION, DB_SIZE);

        var _dbErrorLogger = function (tx, error){
            console.log(error);
        };

        /**
         * Delete all records (drop table)
         */
        var dropTaskTable = function () {
            db.transaction(function (tx) {
                tx.executeSql("DROP TABLE TASKS", [], function (tx, results) {
                    alert('Table tasks was droped');
                }, _dbErrorLogger);
            });
        };
//        dropTaskTable();

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

        this.insert = function (projectName, taskName){
            db.transaction(function (tx) {
                tx.executeSql("INSERT INTO TASKS (projectName, taskName, time, start, running) VALUES (?, ?, 0, ?, 0)", [projectName, taskName, new Date()], function (tx, result) {
                    console.log(result);
                }, _dbErrorLogger);
            });
        };

        this.delete = function (id){
            db.transaction(function (tx) {
                tx.executeSql("DELETE FROM TASKS WHERE id=?", [id], function (tx, result) {
                    console.log(result);
                }, _dbErrorLogger);
            });
        };

        this.select = function (id){
            db.transaction(function (tx) {
                var whereString = '',
                    whereArray = [];
                if (id){
                    whereString = ' id = ? ';
                    whereArray = [id];
                }
                tx.executeSql("SELECT * FROM TASKS " + whereString + " ORDER BY id DESC", whereArray, function (tx, result) {
                    console.log(result);
                }, _dbErrorLogger);
            });
        };
    });
})(angular);

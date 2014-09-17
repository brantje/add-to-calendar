var app = angular.module('addToCalendar', [])
    .controller('mainCtrl', [
        '$scope',
        function($scope) {

            $scope.hello = 'hello world';
            $scope.formDummies =
                $scope.success = function(response) {
                    console.log("Form Response: Success");
                };
            $scope.failure = function(response) {
                console.log("Form Reponse: Fail: " + response);
            };
            $scope.event = {
                start: '06/19/2014 14:42:30',
                end: '06/23/2014 14:45:00',
                title: 'Sample event',
                address:'Hoofdstraat 28, Zwolle, Nederland',
                description: 'Short description'
            };

        }
    ]);
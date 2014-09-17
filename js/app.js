var app = angular.module('addToCalendar', [])
    .controller('mainCtrl', [
        '$scope',
        function($scope) {


            $scope.event = {
                start: '06/19/2014 14:42:30',
                end: '06/23/2014 14:45:00',
                title: 'Some event',
                address:'Hoofdstraat 28, Zwolle, Nederland',
                description: 'Short description'
            };

        }
]);
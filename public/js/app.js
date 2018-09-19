(function (angular) {
    'use strict';
    var app = angular.module('app', ['firebase']);
    var firebaseObj = new Firebase("https://blistering-heat-2473.firebaseio.com");

    app.controller('indexCtrl', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {

        $scope.name = null;
        $scope.phone = null;
        $scope.message = null;
        $scope.email = null;


        var ref = new Firebase('https://smartsoap-9d715.firebaseio.com');

        var obj = $firebaseObject(ref);

        obj.$add




    }

    ]);

    app.service('appSvc', ['$scope', function ($scope) {

    }])
})(window.angular);
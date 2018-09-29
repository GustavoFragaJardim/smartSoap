angular.module('app', []).controller('indexCtrl', ['$scope',
    function ($scope) {
        $scope.name = null;
        $scope.phone = null;
        $scope.message = null;
        $scope.mail = null;
        $scope.save = () => {
            return $.post('http://localhost:8000/save/log/', {
                name: $scope.name,
                phone: $scope.phone,
                email: $scope.mail,
                message: $scope.message
            }
            )
        }
    }
])
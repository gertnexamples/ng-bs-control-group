'use strict';

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.labels = {};
    $scope.labels.please_sign_in = 'Please sign in';
    $scope.labels.username = 'Username';
    $scope.labels.password = 'Password';
    $scope.labels.sign_in = 'Sign in';
    $scope.labels.cancel = 'Cancel';
    $scope.labels.error_username = 'Required - between 6 and 10 chars.';
    $scope.labels.error_password = 'Required - between 8 and 12 chars.';
    $scope.signedIn = false;

    resetUser();

    function resetUser() {
        $scope.user = { username: '', password: ''};
        $scope.signedIn = false;
    }

    $scope.signIn = function() {
        $scope.signedIn = true;
    };

    $scope.cancel = function() {
        resetUser();
    };
}]);

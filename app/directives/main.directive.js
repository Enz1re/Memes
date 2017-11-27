define(function () {
    return function() {
        return {
            restrict: "E",
            templateUrl: "app/layout/main.html",
            controller: "MainController",
            controllerAs: "mainCtrl"
        };
    };
});
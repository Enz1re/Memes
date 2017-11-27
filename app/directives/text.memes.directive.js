define(function () {
    return function() {
        return {
            restrict: "E",
            templateUrl: "app/layout/memes.html",
            controller: "TextController",
            controllerAs: "textCtrl",
            scope: {}
        };
    };
});
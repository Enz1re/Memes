define(function () {
    return function() {
        return {
            restrict: "E",
            templateUrl: "app/layout/memes.html",
            controller: "VideoController",
            controllerAs: "videoCtrl",
            scope: {}
        };
    };
});